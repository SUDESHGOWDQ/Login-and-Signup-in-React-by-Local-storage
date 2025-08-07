import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Input from '../Componets/Input'
import Button from '../Componets/Button'
import useForm from '../hooks/useForm'
import '../Styles/Form.css'


const SignUp = () => {
	const { values, handleChange,resetForm } = useForm({ email: '', password: '' })
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		
		// Basic validation
		if (!values.email || !values.password) {
			toast.error('Please fill in all fields!', {
				position: "top-right",
				autoClose: 5000,
			})
			return
		}
		
		if (values.password.length < 6) {
			toast.error('Password must be at least 6 characters long!', {
				position: "top-right",
				autoClose: 5000,
			})
			return
		}
		
		localStorage.setItem('email', values.email )
		localStorage.setItem('password', values.password )
		localStorage.removeItem('isLoggedIn')
		
		toast.success('Account created successfully! Please login.', {
			position: "top-right",
			autoClose: 3000,
		})
		
		resetForm()
		navigate('/')
	}


  return (
	<div className='form-container'>
		<form onSubmit={handleSubmit}>
		<h1>SignUp Here</h1>
		<Input 
			type="email" 
			placeholder="Enter your email" 
			name='email' 
			value={values.email}
			onChange={handleChange} 
		/>
		<Input 
			type="password" 
			placeholder="Enter your password" 
			name='password' 
			value={values.password}
			onChange={handleChange} 
		/>
		<Button type="submit">SignUp</Button>
		<p>Already Have An Account? <Link to="/">Login</Link></p>
		</form>
	</div>
  )
}

export default SignUp