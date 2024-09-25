
import Ad from "./Ad/Ad";
import BestSelling from "./BestSelling/BestSelling";
import Category from "./Category/Category";
import FlashSale from "./flashSale/flashSale";
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
        </>
     );
}

export default HomePage;