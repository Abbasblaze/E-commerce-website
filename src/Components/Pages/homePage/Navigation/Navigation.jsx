import './Navigation.modules.css'

function Navigation() {
    return ( 
        <>
         <header>
        <div className="logo">Exclusive</div>
        <nav className="top-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
        <div className="search-cart">
            <input type="text" placeholder="What are you looking for?"/>
            <img src="src/assets/Vector.png" alt="" className='searchLogo' />
            <div className="icons">
              
              <img src="src/assets/Cart1 with buy.png" alt="" />
              <img src="src/assets/Wishlist.png" alt="" />
            </div>
        </div>
    </header>
    <main>
        <aside className="sidebar">
            <ul>
                <li><a href="#">Womans Fashion</a></li>
                <li><a href="#">Mens Fashion</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Home & Lifestyle</a></li>
                <li><a href="#">Medicine</a></li>
                <li><a href="#">Sports & Outdoor</a></li>
                <li><a href="#">Babys & Toys</a></li>
                <li><a href="#">Groceries & Pets</a></li>
                <li><a href="#">Health & Beauty</a></li>
            </ul>
        </aside>
        <section className="banner">
            <div className="banner-content">
                <div className="textLogo">
                <img src="src/assets/1200px-Apple_gray_logo 1.png" alt="" />
                <p>iPhone 14 Series</p>
                </div>
            
                <h2>Up to 10% <br/> off Voucher</h2>
                
            </div>
            <div className="shopNowBtn">
            <a href="#">Shop Now</a><i className="ri-arrow-right-fill"></i>
            </div>
            <div className="bannerImg">
                <img src="src/assets/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
            </div>
            <div className="banner-indicators">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
            </div>
        </section>
    </main>
        </>
     );
}

export default Navigation;