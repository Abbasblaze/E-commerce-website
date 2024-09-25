import './Products.modules.css'

function Products() {
    return ( 
        <>
        <div className="Productscontainer">
     
            <h1>Today</h1>

        <div className="countdown">
            <div>
            <p>Days</p>
                <h2>03 <span>:</span></h2>
               
            </div>
            <div>
            <p>Hours</p>
                <h2>23 <span>:</span></h2>
              
            </div>
            <div>
            <p>Minutes</p>
                <h2>19 <span>:</span></h2>
            
            </div>
            <div>
            <p>Seconds</p>
                <h2>56</h2>
              
            </div>
        </div>



        <div className="product-grid">
       
            <div className="product-card">
                <div className="discount">-40%</div>
                <div className="icons">
                    <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                    <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 611.png" alt="Gamepad"/>
                <h3>HAVIT HV-G92 Gamepad</h3>
                <div className="price">$120 <span className="old-price">$160</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (88)</div>
            </div>

   
            <div className="product-card">
                <div className="discount">-35%</div>
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 612.png" alt="Keyboard"/>
                <h3>AK-900 Wired Keyboard</h3>
                <div className="price">$960 <span className="old-price">$1160</span></div>
                <div className="rating">⭐⭐⭐⭐ (75)</div>
            </div>

          
            <div className="product-card">
                <div className="discount">-30%</div>
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 613.png" alt="Monitor"/>
                <h3>IPS LCD Gaming Monitor</h3>
                <div className="price">$370 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

      
            <div className="product-card">
                <div className="discount">-25%</div>
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 614.png" alt="Chair"/>
                <h3>S-Series Comfort Chair</h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>
        </div>

        <a href="#" className="btn-view-all">View All Products</a>
    </div>

        </>
     );
}

export default Products;



