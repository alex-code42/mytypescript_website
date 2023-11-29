
import Collections from "@/components/collections";
import ProductList from "@/components/productlist";
import  { createClient } from 'contentful'
import { BlogPost, ProductDetails } from "../../../types";
import Search from "@/components/search/Search"
import { Helmet } from "react-helmet";


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
        <Helmet>
            <title>BerlinVogue Collective → → ✅ 😀 ✅  Go Shopping and support Berlin Based Collective</title>
            <meta name="Discover the epitome of style at BerlinVogue Collective, a dynamic online fashion destination nestled in the heart of Berlin. " content="More to come" />
            <meta property="og:image" content="https://images.ctfassets.net/lr057rk03c3t/1LG3GPG1VM8x5KvVZqbdi6/b822143e8e571ba75d5bddc2b38a021d/philip-martin-CPXPFi3POLw-unsplash.jpg" />
        </Helmet>
         <div className="tc bg-green ma0 pa4 min-vh-100">
           <Search productss={productss}/>
        </div>
      <Collections blog={blog}/>
      </div>
    );
  }