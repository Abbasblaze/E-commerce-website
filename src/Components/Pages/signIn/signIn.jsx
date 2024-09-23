import './signIn.modules.css'

import { Link } from 'react-router-dom';
function SignIn() {
    return ( 
    <>
     <div className="container">
        <div className="image-section">
            <img src="src/assets/LoginCard.png" alt="Shopping Cart and Mobile"/>
        </div>
        <div className="form-section">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <div className="signinForm">
            <input type="Name" placeholder="Name" required/>
                <input type="text" placeholder="Email or Phone Number" required/>
                <input type="password" placeholder="Password" required/>
                <button >Create Account</button>
                <button className='googleBtn' ><img src="src/assets/Icon-Google.png" alt="" />Sign up with Google</button>
                <Link to="/login" className="Login-link">Already have an account? <span>Login</span></Link>
                </div>
        </div>
    </div>
    </> 
    );
}

export default SignIn;