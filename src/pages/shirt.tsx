import Navbar from "@/components/navigation";
import ProductDetail from "@/components/product_detail";
import ShoppingCart from "@/components/shopping_cart";
import { useState } from "react";



interface MyComponentProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function MyPage() {
    const [openCart, setOpenCart] = useState(false);
  
    return (
      <div>
        <Navbar setOpenCart={setOpenCart} openCart={openCart} />
        <ShoppingCart setOpenCart={setOpenCart} openCart={openCart} />
        <ProductDetail />
      </div>
    );
  }