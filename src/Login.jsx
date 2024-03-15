import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
function Login() {
     
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()

        const user = signInWithEmailAndPassword(auth,email,password)
        
        .then(( auth ) =>{
            console.log(user)
            navigate('/');
        })

        .catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault()

        const user =createUserWithEmailAndPassword (auth ,email,password)
        .then(( auth ) =>{
            console.log(user)
            navigate('/');
        })

        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"  />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"  />
                    <button onClick={login} type="submit" className="login__signin">Sign in</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__register">Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;