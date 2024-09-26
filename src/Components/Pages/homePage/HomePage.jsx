
import Ad from "./Ad/Ad";
import BestSelling from "./BestSelling/BestSelling";
import Category from "./Category/Category";
import Features from "./Features/Features";
import FlashSale from "./flashSale/flashSale";
import Footer from "./Footer/Footer";
import MoreProducts from "./MoreProducts/MoreProducts";
import Navigation from "./Navigation/Navigation";
import NewArrival from "./NewArrival/NewArrival";
import Products from "./Products/Products";



function HomePage() {
    return ( 
        <>
        <FlashSale/>
        <Navigation/>
        <Products/>
        <Category/>
        <BestSelling/>
        <Ad/>
        <MoreProducts/>
        <NewArrival/>
        <Features/>
        <Footer/>
        </>
     );
}

export default HomePage;