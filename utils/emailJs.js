import emailjs from "@emailjs/browser"
import { notify } from "./notificationToastify"

export const sendTokenVerification = async (user) => {
    try {
        user = {...user, link: `${process.env.NEXT_PUBLIC_BASE_URL}/authentication/token/${user.token}`}
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
            user, 
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    } catch (error) {
        notify(user, "error", "Error al enviar el correo de verificación")
    }
}