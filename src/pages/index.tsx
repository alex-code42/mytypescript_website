import ProductList from '@/components/productlist'
import Collections from '@/components/collections'
import  { createClient } from 'contentful'
import Header from '@/components/header';
import { BlogPost, ProductDetails } from '../../types';
import AboutUs from '@/components/aboutus';


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || ''
  });

  const productRes = await client.getEntries({ content_type: 'product' });
  const blogRes = await client.getEntries({ content_type: 'blog' });

  return {
    props: {
      productss: productRes.items,
      blog: blogRes.items
    }
  };
}

  export default function MyPage({productss,blog } : {productss: ProductDetails[], blog: BlogPost[]}) {
    console.log("this is the blogs-zzz",blog);
    
    return (
      <div>
        <Header blog={blog}/>
        
      <ProductList productss={productss}/>
      <AboutUs />
      <Collections blog={blog}/>

      
      
      </div>
    );
  }
