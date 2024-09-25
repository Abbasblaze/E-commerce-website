import './MoreProducts.modules.css'

function MoreProducts() {
    return ( 
        <>
        <div className="MoreProductsContainer">
        <div className="MoreProducts">
        <h1>Our Products</h1>
        <h3>Explore Our Products</h3>
        </div>
        <div className="product-grid">
       
            <div className="product-card">
           
                <div className="icons">
                    <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                    <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 604.png" alt="Gamepad"/>
                <h3>Breed Dry Dog Food</h3>
                <div className="price">$120 <span className="old-price">$160</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (88)</div>
            </div>

   
            <div className="product-card">
           
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 604 (1).png" alt="Keyboard"/>
                <h3>CANON EOS DSLR Camera</h3>
                <div className="price">$960 <span className="old-price">$1160</span></div>
                <div className="rating">⭐⭐⭐⭐ (75)</div>
            </div>

          
            <div className="product-card">
           
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 604 (2).png" alt="Monitor"/>
                <h3>ASUS FHD Gaming Laptop</h3>
                <div className="price">$370 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

      
            <div className="product-card">
           
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 610.png" alt="Chair"/>
                <h3>Curology Product Set </h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

            <div className="product-card">
            <div className="new">new</div>
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 608 (1).png" alt="Chair"/>
                <h3>Kids Electric Car</h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

            <div className="product-card">
            
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 608 (2).png" alt="Chair"/>
                <h3>Jr. Zoom Soccer Cleats</h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

            <div className="product-card">
                <div className="new">new</div>
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 608.png" alt="Chair"/>
                <h3>GP11 Shooter USB Gamepad</h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>
            <div className="product-card">
             
                <div className="icons">
                <button><img src="src/assets/Fill Heart.png" alt="" /></button>
                <button><img src="src/assets/Fill Eye.png" alt="" /></button>
                </div>
                <img src="src/assets/Frame 613.png" alt="Chair"/>
                <h3>Quilted Satin Jacket</h3>
                <div className="price">$375 <span className="old-price">$400</span></div>
                <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
            </div>

        </div>

        <a href="#" className="btn-view-all">View All Products</a>
        </div>
        </>
     );
}

export default MoreProducts;