import './Features.modules.css'

function Features() {
    return ( 
        <>
        <section className="features">
        <div className="feature-item">
            <div className="icon">
                <img src="src/assets/icon-delivery.png" alt="Fast Delivery Icon"/>
            </div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
        </div>

        <div className="feature-item">
            <div className="icon">
                <img src="src/assets/Icon-Customer service.png" alt="Customer Service Icon"/>
            </div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
        </div>

        <div className="feature-item">
            <div className="icon">
                <img src="src/assets/Icon-Customer service.png" alt="Money Back Guarantee Icon"/>
            </div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
        </div>
    </section>
        </>
     );
}

export default Features;