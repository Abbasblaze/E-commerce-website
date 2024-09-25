import './NewArrival.modules.css'

function NewArrival() {
    return ( 
        <>
             <div className="NewArrival">
        <h1>Featured</h1>
        <h3>New Arrival</h3>

        <div className="NewArrivalcontainer">
        <div className="item large" id="ps5">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="shop-btn">Shop Now</a>
        </div>
        <div className="item-two" id="womens-collection">
            <h2>Womens Collections</h2>
            <p>Featured womens collections that give you another vibe.</p>
            <a href="#" className="shop-btn">Shop Now</a>
        </div>
        <div className="item-three" id="speakers">
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <a href="#" className="shop-btn">Shop Now</a>
        </div>
        <div className="item-four" id="perfume">
            <h2>Perfume</h2>
            <p>GUCCI INTENSEOUD EDP</p>
            <a href="#" className="shop-btn">Shop Now</a>
        </div>
    </div>
        </div>
        </>
     );
}

export default NewArrival;