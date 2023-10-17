import Navbar from "@/components/navigation";
import ProductDetail from "@/components/product_detail";
import ShoppingCart from "@/components/shopping_cart";
import { useState, useEffect  } from 'react'
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";
import useOpenShoppingCard from "@/components/zustand";


interface Item {
  id: number;
  name: string;
  price: number;
}


  
  export default function MyTshirtPage() {
    const { isTrue, toggleState } = useOpenShoppingCard();

    
    
    return (
      <div>
      <ProductList/>
      <div>
        <button onClick={toggleState}>Toggle Shopping Cart</button>
        {isTrue ? <p>Shopping Cart is open.</p> : <p>Shopping Cart is closed.</p>}
      </div>

      <Collections/>
        {/* <ProductDetail addItemToCart={addItemToCart} setOpenCart={localSetOpenCart}/> */}
      </div>
    );
  }