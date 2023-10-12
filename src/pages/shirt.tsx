import Navbar from "@/components/navigation";
import ProductDetail from "@/components/product_detail";
import ShoppingCart from "@/components/shopping_cart";
import { useState } from "react";



interface MyPageProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function MyTshirtPage(props: MyPageProps) {
    const [openCart, localSetOpenCart] = useState(false);
  
    return (
      <div>
        <div className='z-10 relative'>
            <Navbar setOpenCart={localSetOpenCart} openCart={openCart} />
            <ShoppingCart setOpenCart={localSetOpenCart} openCart={openCart} />
      </div>
        <ProductDetail />
      </div>
    );
  }