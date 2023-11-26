import Navbar from "@/components/navigation"
import ShoppingCart from "@/components/shopping_cart"
import ProductDetail from "@/components/product_detail"
import { useRouter } from 'next/router.js';

import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "product" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }:any) => {
    const { items } = await client.getEntries({
      content_type: 'product',
      'fields.slug': params.slug
    })
  
    return {
      props: { product: items[0] }
    }
  
  }


export default function ProductDetailPage({product}: any){

    const router = useRouter();
  const { isReady } = router;
  const { id }= router.query;
  console.log("this is the recipe",product);

  
    return(
        <div>
             <div className='z-10 relative'>
             <ProductDetail productss={product}/>
            </div>
        
        
        
        </div>
    )
}