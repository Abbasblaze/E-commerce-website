import './Ad.modules.css'

function Ad() {
    return ( 
        <>
        <div className="Adcontainer">
            <div className="adcard">
            <div className="adHeading">
            <h1>Categories</h1>
            <h2>Enhance Your <br/> Music Experience</h2>
            <div className="Numbers">
                <div className="NumberCard">
                    <h3>23</h3>
                    <p>Hours</p>
                </div>
                <div className="NumberCard">
                <h3>05</h3>
                    <p>Days</p>
                </div>
                <div className="NumberCard">
                <h3>59</h3>
                    <p>Minutes</p>
                </div>
                <div className="NumberCard">
                <h3>35</h3>
                    <p>Seconds</p>
                </div>
           
            </div>
            <button className='BuyNow'>BUY NOW</button>
            </div>
            </div>
        </div>
        </>
     );
}

export default Ad;