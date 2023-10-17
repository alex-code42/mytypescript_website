import Navbar from "@/components/navigation"
import ShoppingCart from "@/components/shopping_cart"
import ProductDetail from "@/components/product_detail"
import { useRouter } from 'next/router.js';



export default function ProductDetailPage(){

    const router = useRouter();
  const { isReady } = router;
  const { id }= router.query;

  
    return(
        <div>
             <div className='z-10 relative'>
             <ProductDetail id={id as string} />
            </div>
        
        
        
        </div>
    )
}