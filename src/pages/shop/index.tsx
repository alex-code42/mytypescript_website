
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";
import  { createClient } from 'contentful'


export async function getStaticProps() {
  //connect to contentful
  // console.log("this is the contentful space id in detail xxx",process.env.CONTENTFUL_SPACE_ID);

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'product' })
  // console.log("this is the contentful response",res.items);
  
  return {

    props: {
      productss: res.items
    }
  }
}


  
  export default function MyTshirtPage({productss } : {productss: any}) {
    // console.log("this is the productss-xxx",productss);
    
    return (
      <div>
      <ProductList productss={productss}/>
      <Collections />
      </div>
    );
  }