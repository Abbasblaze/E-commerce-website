
import Ad from "./Ad/Ad";
import BestSelling from "./BestSelling/BestSelling";
import Category from "./Category/Category";
import FlashSale from "./flashSale/flashSale";
import Navigation from "./Navigation/Navigation";
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
        </>
     );
}

export default HomePage;