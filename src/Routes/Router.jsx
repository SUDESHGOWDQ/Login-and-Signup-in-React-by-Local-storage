import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';



const Login = lazy(() => import('../Pages/Login'));
const SignUp = lazy(() => import('../Pages/SignUp'));
const Home = lazy(() => import('../Pages/Home'));

const Router = () => {
  return (
	<div>
	  <Suspense fallback={<div><h1>Loading.....</h1></div>}>
		<Routes>
		  <Route path="/" element={<Login />} />
		  <Route path="/signup" element={<SignUp />} />
		  <Route path="/home" element={
			<PrivateRoute>
			  <Home />
			</PrivateRoute>
		  } />
		</Routes>
	  </Suspense>
	</div>
  )
}

export default Router