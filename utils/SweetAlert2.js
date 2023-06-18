import Swal from "sweetalert2/dist/sweetalert2.js"

export const alertCreatedAccount = () => {
  Swal.fire(
      'Cuenta creada correctamente!',
      `necesita verificar su correo para continuar, revise su casilla de mensajes, en algunos casos
      puede encontrarse en la categoria spam`,
      'info'
  )
}