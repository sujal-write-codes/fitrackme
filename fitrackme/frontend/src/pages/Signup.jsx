import React, { useState } from 'react'
import '../stylesheets/Signup.css'
import { FaEye, FaEyeSlash} from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const {signup, loading, error} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password)
  };

  return (
    <>
        <div className="container-for-signup">
            <div className='container'>
                <div className="form-container-sign-up">
                    <form className='signup-form' onSubmit={handleSubmit}>
                        <h1 className='text-1'>Join us by making <br />an account!</h1>
                        <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {showPassword ? ( <FaEyeSlash className='eye-password' onClick={() => setShowPassword(!showPassword)} /> ) : (
                                <FaEye className='eye-password' onClick={() => setShowPassword(!showPassword)}/>
                            )}
                        <div className="button-for-signup">
                            <button disabled={loading} className='submit-button'> Sign Up </button>
                        </div>
                        {error && <div className="error-signup">{error}</div>}
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="texts-for-toogle">
                            <h1 className='text-3'>Welcome to FITrackME!</h1>
                            <p className='text-4'>Experience the full potential of our site by registering with your <br/>personal details and gain access to all features.</p>
                            <div className="for-navigate">
                                <p> Already have an account? </p>
                                <Link to='/signin' className='for-login-page-transfer'>Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
  }
  

  