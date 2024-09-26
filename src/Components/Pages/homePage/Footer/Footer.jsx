import './Footer.modules.css'


function Footer() {
    return ( 
        <>
         <div className="Footer">
            <div className="footer-column">
                <h3>Exclusive</h3>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <form action="#">
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">→</button>
                </form>
            </div>
            <div className="footer-column">
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>Email: <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
                <p>Phone: <a href="tel:+8801588889999">+88015-88888-9999</a></p>
            </div>
            <div className="footer-column">
                <h3>Account</h3>
                <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Login / Register</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                
                <div className="qr-codes">
                <img src="src/assets/Qrcode 1.png" alt="" />
                    <img src="src/assets/GooglePlay.png" alt="Google Play"/>
                    <img src="src/assets/AppStore.png" alt="App Store"/>
                </div>
      
                <div className="social-icons">
                  <img src="src/assets/icon-instagram.png" alt="" />
                  <img src="src/assets/Icon-Twitter.png" alt="" />
                  <img src="src/assets/Icon-Linkedin.png" alt="" />
                  <img src="src/assets/Icon-Facebook.png" alt="" />
                </div>
            </div>
        </div>
        
        </>
     );
}

export default Footer;