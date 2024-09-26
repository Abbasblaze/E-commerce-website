import './signIn.modules.css'

import { Link } from 'react-router-dom';
function SignIn() {
    return ( 
    <>
     <div className="SignIn">
        <div className="image-section">
            <img src="src/assets/LoginCard.png" alt="Shopping Cart and Mobile"/>
        </div>
        <div className="form-section">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <div className="signinForm">
            <input type="Name" placeholder="Name" required/>
                <input type="text" placeholder="Email or Phone Number" required/>
                <input type="password" placeholder="Password" required/>

                </div>
                <div className="createNewbtn">
                <Link to="/homepage"><a className='button' href="">Create Account</a></Link>
                <button className='googleBtn' ><img src="src/assets/Icon-Google.png" alt="" />Sign up with Google</button>
                <Link to="/login" className="Login-link">Already have an account? <span>Login</span></Link>
                </div>
        </div>
    </div>
    </> 
    );
}

export default SignIn;