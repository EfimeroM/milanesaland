const { createContext, useState } = require("react");

import { alertCreatedAccount } from "@/utils/SweetAlert2";
import { db } from "@/utils/dbConnection";
import { encryptPassword } from "@/utils/encryptPassword";
import { notify } from "@/utils/notificationToastify";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import uniqid from "uniqid";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const collUserRef = collection(db, 'users')

  const noRepeatUser = async (user) => {
    try {
      const queryUser = query(collUserRef, where("username", "==", user.username));
      const refUser = await getDocs(queryUser);
      const queryEmail = query(collUserRef, where("email", "==", user.email));
      const refEmail = await getDocs(queryEmail);
      if (refUser.empty) {
        if (refEmail.empty) {
          return true;
        } else {
          return "El email ya fue registrado con otro usuario";
        }
      } else {
        return "Nombre de usuario en uso";
      }
    } catch (error) {
      notify(user, "error", "Error al verificar usuario")
    }
  }

  const addUser = async (user) => {
    try {
      const res = await noRepeatUser(user)
      const passEncrypted = await encryptPassword(user.password)
      user = {
        ...user,
        password: passEncrypted,
        icons: ["https://res.cloudinary.com/dvabcnlc4/image/upload/v1687037553/MilanesaLand/icons-profile/drake_zteyvh.webp"],
        titles: ["Nuevo título"],
        hours: 8,
        points: 10,
        token: uniqid(),
        confirmToken: false,
        isAdmin: false,
        isSuperAdmin: false
      }
      if (res === true) {
        await addDoc(collUserRef, user)
        alertCreatedAccount()
        return true
      }
      throw new Error(res)
    } catch (error) {
      notify(user, "error", error.message)
    }
  }

  return (
    <AuthContext.Provider value={{
      addUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider