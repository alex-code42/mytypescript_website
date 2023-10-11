import Navbar from "@/components/navigation";
import ProductDetail from "@/components/product_detail";
import ShoppingCart from "@/components/shopping_cart";


export default function myPage (){
    return(
        <div>
            <Navbar/>
            <ShoppingCart/>
            <ProductDetail/>
        </div>
    )
}