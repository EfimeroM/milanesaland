import CryptoJS from 'crypto-js'

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY

export const encryptPassword = async(password)=>{
    const cipherPassword = CryptoJS.AES.encrypt(password, secretKey)
    return (cipherPassword.toString())
}

export const decryptPassword = async(cipherPassword)=>{
    const bytes = CryptoJS.AES.decrypt(cipherPassword, secretKey)
    return (bytes.toString(CryptoJS.enc.Utf8))
}