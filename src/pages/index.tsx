import Collections from '@/components/collections'
import Navbar from '@/components/navigation'
import ProductList from '@/components/productlist'
import { useState } from 'react';
import ShoppingCart from '@/components/shopping_cart';

interface MyPageProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPage(props : MyPageProps) {
  const [openCart, localSetOpenCart] = useState(false);

  return (
    <div>
      <div className='z-10 relative'>
      <Navbar setOpenCart={localSetOpenCart} />
      <ShoppingCart setOpenCart={localSetOpenCart} openCart={openCart} />
      </div>
      <div className='relative'>
        <ProductList/>
        </div>
    </div>
     
    
  )
}
