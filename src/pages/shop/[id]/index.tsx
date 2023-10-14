import Navbar from "@/components/navigation"
import ShoppingCart from "@/components/shopping_cart"
import ProductDetail from "@/components/product_detail"
import { useRouter } from 'next/router.js';



export default function ProductDetailPage({addItemToCart, localSetOpenCart}){

    const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  console.log("this is the id",id);
  
    return(
        <div>
             <div className='z-10 relative'>
             <ProductDetail addItemToCart={addItemToCart} setOpenCart={localSetOpenCart} id={id}/>

            </div>
        
        
        
        </div>
    )
}