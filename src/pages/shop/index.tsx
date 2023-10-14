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
    
    function generateRandomId() {
      // Generate a random number and append it to the current timestamp
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    const [openCart, localSetOpenCart] = useState(false);

    const [cart, setCart] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('shoppingCart');
        return savedCart ? JSON.parse(savedCart) : [];
      }
      return [];
    });

    console.log("Shoppingcart",cart)
    // Define a function to add an item to the cart
    const addItemToCart = (item: Item) => {
      const uniqueId = generateRandomId();
      const updatedCart = [...cart, { ...item, id: uniqueId }];
  setCart(updatedCart);
    };

    console.log("function-add-itemto-cart-in-shirts",addItemToCart)
  
    // Define a function to remove an item from the cart
    const removeItemFromCart = (itemId: number) => {
      const updatedCart = cart.filter((item: any) => item.id !== itemId);
      setCart(updatedCart);
    };
    console.log(removeItemFromCart);
    
  
    // Load the cart data from localStorage when the component mounts
    useEffect(() => {
      const savedCart = localStorage.getItem('shoppingCart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }, []);
  
    // Save the cart data to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart]);
  
    return (
      <div>
        <div className='z-10 relative'>
            <Navbar setOpenCart={localSetOpenCart} openCart={openCart} />
            <ShoppingCart setOpenCart={localSetOpenCart} openCart={openCart} cart={cart} removeItemFromCart={removeItemFromCart}/>
      </div>
      <ProductList/>
      <Collections/>
        <ProductDetail addItemToCart={addItemToCart} setOpenCart={localSetOpenCart}/>
      </div>
    );
  }