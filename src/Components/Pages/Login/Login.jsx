import './Login.modules.css'
import { Link } from 'react-router-dom';

function Login() {
    return ( 
        <>
        <div className="container">
        <div className="image-section">
            <img src="src/assets/LoginCard.png" alt="Shopping Cart and Mobile"/>
        </div>
        <div className="form-section">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <div className="form">
                <input type="text" placeholder="Email or Phone Number" required/>
                <input type="password" placeholder="Password" required/>
                <button >Log In</button>
                <a href="#" className="forgot-password">Forget Password?</a>
                <Link to="/signIn" className="signIn-link">Create Account ? <span>SignIn</span></Link>
                </div>
        </div>
    </div>
        </>
     );
}

export default Login;