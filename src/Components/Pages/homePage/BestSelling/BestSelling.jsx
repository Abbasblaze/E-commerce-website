import './BestSelling.modules.css'

function BestSelling() {
    return ( 
        <>
        <div className="BestSelling">

        <h1>This Month</h1>
        <div className="horizantol">
        <h3>Best Selling Products  </h3>
        <button className="view-all">View All</button>
        </div>

        <div className="BestSellingProducts">
  
        <div className="product-grid">
       
       <div className="product-card">
           <div className="discount">-40%</div>
           <div className="icons">
               <button><img src="src/assets/Fill Heart.png" alt="" /></button>
               <button><img src="src/assets/Fill Eye.png" alt="" /></button>
           </div>
           <img src="src/assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png" alt="Gamepad"/>
           <h3>The north coat</h3>
           <div className="price">$260 <span className="old-price">$360</span></div>
           <div className="rating">⭐⭐⭐⭐⭐ (88)</div>
       </div>


       <div className="product-card">
           <div className="discount">-35%</div>
           <div className="icons">
           <button><img src="src/assets/Fill Heart.png" alt="" /></button>
           <button><img src="src/assets/Fill Eye.png" alt="" /></button>
           </div>
           <img src="src/assets/Frame 606.png" alt="Keyboard"/>
           <h3>Gucci duffle bag</h3>
           <div className="price">$960 <span className="old-price">$1160</span></div>
           <div className="rating">⭐⭐⭐⭐ (75)</div>
       </div>

     
       <div className="product-card">
           <div className="discount">-30%</div>
           <div className="icons">
           <button><img src="src/assets/Fill Heart.png" alt="" /></button>
           <button><img src="src/assets/Fill Eye.png" alt="" /></button>
           </div>
           <img src="src/assets/Frame 610.png" alt="Monitor"/>
           <h3>RGB liquid CPU Cooler</h3>
           <div className="price">$160 <span className="old-price">$170</span></div>
           <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
       </div>

 
       <div className="product-card">
           <div className="discount">-25%</div>
           <div className="icons">
           <button><img src="src/assets/Fill Heart.png" alt="" /></button>
           <button><img src="src/assets/Fill Eye.png" alt="" /></button>
           </div>
           <img src="src/assets/Frame .png" alt="Chair"/>
           <h3>Small BookSelf</h3>
           <div className="price">$360 </div>
           <div className="rating">⭐⭐⭐⭐⭐ (99)</div>
       </div>
   </div>
   </div>
    </div>
        </>
     );
}

export default BestSelling;