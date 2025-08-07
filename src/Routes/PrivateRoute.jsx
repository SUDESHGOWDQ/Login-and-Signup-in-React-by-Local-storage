import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	
  const isAuthenticated = () => {
    return localStorage.getItem('isLoggedIn') === 'true'
  }

  return isAuthenticated() ? children : <Navigate to="/" replace />
}

export default PrivateRoute
