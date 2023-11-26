import ProductList from '@/components/productlist'
import Collections from '@/components/collections'
import  { createClient } from 'contentful'


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


  
  export default function MyPage({productss,blog } : {productss: any, blog: any}) {
    console.log("this is the blogs-zzz",blog);
    
    return (
      <div>
      <Collections blog={blog}/>
      <ProductList productss={productss}/>
      
      </div>
    );
  }
