import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './Routes/Router'; 

const App = () => {
  return (
	<div>
	  <Router>
		<AppRoutes />
		<ToastContainer
		  position="top-right"
		  autoClose={5000}
		  hideProgressBar={false}
		  newestOnTop={false}
		  closeOnClick
		  rtl={false}
		  pauseOnFocusLoss
		  draggable
		  pauseOnHover
		  theme="light"
		/>
	  </Router>
	</div>
  )
}

export default App