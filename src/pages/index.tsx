import Collections from '@/components/collections'
import Navbar from '@/components/navigation'
import ProductList from '@/components/productlist'


export default function Main() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
        <Navbar/>
      </div>
      <div className="pt-16">
        <Collections/>
        <ProductList/>
      </div>
    </div>
     
    
  )
}
