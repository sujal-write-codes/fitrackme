import React, {useState} from 'react'
import '../stylesheets/Signin.css'
import { FaEye, FaEyeSlash} from "react-icons/fa"
import { Link } from "react-router-dom"
import {useSignin} from '../hooks/useSignin'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const {signin, error, loading} = useSignin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin(email, password)
  };

  return (
    <div className="container-for-signin">
        <div className='container'>
            <div className="form-container-sign-in">
                <form className='signin-form' onSubmit={handleSubmit}>
                    <h1 className='text-1'>Sign in to your account!</h1>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showPassword ? ( <FaEyeSlash className='eye-password' onClick={() => setShowPassword(!showPassword)} /> ) : (
                        <FaEye className='eye-password' onClick={() => setShowPassword(!showPassword)}/>
                    )}
                    <div className="button-for-signin">
                        <button disabled={loading} className='submit-button'> Sign In </button>
                    </div>
                    {error && <div className="error-signin">{error}</div>}
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="texts-for-toogle">
                        <h1 className='text-3'>Welcome Back!</h1>
                        <p className='text-4'>Unlock a wealth of features tailored to you by simply logging in <br />with your personalized account details.</p>
                        <div className="for-navigate">
                            <p> Don't have an account? </p>
                            <Link to='/signup' className='for-login-page-transfer'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

