import Collections from '@/components/collections'
import Navbar from '@/components/navigation'
import ProductList from '@/components/productlist'
import { useState } from 'react';
import ShoppingCart from '@/components/shopping_cart';

interface MyComponentProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <div className='z-10 relative'>
      <Navbar setOpenCart={setOpenCart} openCart={openCart} />
      <ShoppingCart setOpenCart={setOpenCart} openCart={openCart} />
      </div>
      <div className='relative'>
        <Collections/>
        <ProductList/>
        </div>
    </div>
     
    
  )
}
