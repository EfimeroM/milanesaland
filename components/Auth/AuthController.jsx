import { useRouter } from 'next/router'

import Signup from './Signup'
import Login from './Login'
import { ToastContainer } from 'react-toastify'

const AuthController = () => {
  const router = useRouter()
  const { type = 'login' } = router.query

  return (
    <div>
      <ToastContainer />
      {
        type === 'login' ? <Login /> : <Signup />
      }
    </div>
  )
}

export default AuthController