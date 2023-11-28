
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";
import  { createClient } from 'contentful'
import { BlogPost } from "../../../types";


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


  
  export default function MyTshirtPage({productss,blog } : {productss: any, blog: BlogPost[]}) {
    console.log("this is the blogs-zzz",blog);
    
    return (
      <div>
      <ProductList productss={productss}/>
      <Collections blog={blog}/>
      </div>
    );
  }