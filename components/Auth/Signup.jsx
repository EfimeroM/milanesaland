import { useContext, useState } from "react";
import Link from "next/link";

import { notify } from "@/utils/notificationToastify";
import { validateForm } from "@/utils/validationsYup";
import { AuthContext } from "@/context/AuthContext";
import HeadForm from "./HeadForm";

const Signup = () => {
  const { addUser } = useContext(AuthContext);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitDisabled(true);
      const validate = await validateForm(user, "signup");
      if (validate === true) {
        const res = await addUser(user, setUser);
        setIsSubmitDisabled(false);
        res && setUser({ username: "", email: "", password: "" });
        return;
      }
      throw new Error(validate);
    } catch (error) {
      setIsSubmitDisabled(false);
      notify(user, "error", error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-20">
      <HeadForm title="Registrate" />
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
            type="email"
            onChange={handleInputChange}
            name="email"
            placeholder="email"
            value={user.email}
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
            value="Crear mi cuenta"
            className="w-5/6 border-2 p-1 my-6 rounded text-custom-orange 
            border-custom-orange hover:cursor-pointer"
            disabled={isSubmitDisabled}
          />
        </form>
        <Link
          href={{
            pathname: "/authentication",
            query: { type: "login" },
          }}
          className="flex justify-center pb-2"
        >
          <p className="text-gray-100">¿Ya tienes una cuenta? Inicia Sesion</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
