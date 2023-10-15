import Navbar from "@/components/navigation";
import ProductDetail from "@/components/product_detail";
import ShoppingCart from "@/components/shopping_cart";
import { useState, useEffect  } from 'react'
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface MyPageProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function MyTshirtPage(props: MyPageProps) {
    
    
    return (
      <div>
      <ProductList/>
      <Collections/>
        {/* <ProductDetail addItemToCart={addItemToCart} setOpenCart={localSetOpenCart}/> */}
      </div>
    );
  }