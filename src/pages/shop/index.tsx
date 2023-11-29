
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";
import  { createClient } from 'contentful'
import { BlogPost, ProductDetails } from "../../../types";
import Search from "@/components/search/Search"


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


  
  export default function MyTshirtPage({productss,blog } : {productss: ProductDetails[], blog: BlogPost[]}) {
    console.log("this is the Products in the Shop",productss);
    
    return (
      <div>
         <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search productss={productss}/>
    </div>
      <Collections blog={blog}/>
      </div>
    );
  }