import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import useForm from '../hooks/useForm'
import '../Styles/Form.css'

const Login = () => {
	const { values: inputValue, handleChange,resetForm} = useForm({ email: '', password: '' })
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		let email = localStorage.getItem('email')
		let password = localStorage.getItem('password')
		
		if (!email || !password) {
			toast.error('No account found. Please sign up first!', {
				position: "top-right",
				autoClose: 5000,
			})
			return
		}
		
		if (inputValue.email !== email || inputValue.password !== password) {
			toast.error('Invalid email or password!', {
				position: "top-right",
				autoClose: 5000,
			})
			return
		}
		
		localStorage.setItem('isLoggedIn', 'true')
		toast.success('Login successful! Welcome back!', {
			position: "top-right",
			autoClose: 3000,
		})
		resetForm()
		navigate('/home')
	}


  return (
	<div className='form-container'>
		<form onSubmit={handleSubmit}>
		<h1>Login Here</h1>
		<Input 
			type="email" 
			placeholder="Enter your email" 
			name='email' 
			value={inputValue.email}
			onChange={handleChange} 
		/>
		<Input 
			type="password" 
			placeholder="Enter your password" 
			name='password' 
			value={inputValue.password}
			onChange={handleChange} 
		/>
		<Button type="submit">Login</Button>
		<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
		</form>
	</div>
  )
}

export default Login