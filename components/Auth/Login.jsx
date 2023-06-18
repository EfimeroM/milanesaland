import { useState } from "react"
import Link from "next/link"

import HeadForm from "./HeadForm"
import { notify } from "@/utils/notificationToastify";

const Login = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    try {
      
    } catch (error) {
      setIsSubmitDisabled(false);
      notify(user, "error", error.message);
    }
  }

  return (
    <div className="w-full flex flex-col items-center py-20">
      <HeadForm title="Accede" />
      <div
        className="w-5/6 md:w-2/6 py-5 flex flex-col border border-custom-orange border-t-0 
      rounded rounded-tr-none rounded-tl-none text-gray-900"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full py-4 flex flex-col items-center"
        >
          <input
            type="text"
            onChange={handleInputChange}
            name="username"
            placeholder="nombre de usuario"
            value={user.username}
            className="w-5/6 border-2 p-1 my-4 rounded border-gray-400"
          />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            placeholder="contraseña"
            value={user.password}
            className="w-5/6 border-2 p-1 my-4 rounded border-gray-400"
          />
          <input
            type="submit"
            value="Iniciar Sesion"
            className="w-5/6 border-2 p-1 my-6 rounded text-custom-orange 
            border-custom-orange hover:cursor-pointer"
            disabled={isSubmitDisabled}
          />
        </form>
        <Link
          href={{
            pathname: "/authentication",
            query: { type: "signup" },
          }}
          className="flex justify-center pb-2"
        >
          <p className="text-gray-100">No tienes una cuenta? Registrate</p>
        </Link>
      </div>
    </div>
  )
}

export default Login