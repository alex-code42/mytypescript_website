import TravelBlogPost from "@/components/blog/article";
import Collections from "@/components/collections";
import { log } from "console";
import  { createClient } from 'contentful'
import { BlogPost } from "../../../types";


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || ''
  })

  const res = await client.getEntries<BlogPost>({ content_type: 'blog' })
  log("this is the res",res);
  
  return {

    props: {
      blog: res.items
    }
  }
}

export default function BlogIndexPage({blog } : {blog: BlogPost[]}) {
  console.log("this is the blog-xxx",blog);
  return (
    <div>
      <Collections blog={blog}/>
    </div>
  );
}