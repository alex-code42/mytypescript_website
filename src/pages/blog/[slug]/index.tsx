import TravelBlogPost from "@/components/blog/article";
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blog" 
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
      content_type: 'blog',
      'fields.slug': params.slug
    })
  
    return {
      props: { blog: items[0] }
    }
  
  }

export default function BlogIndexPage({blog}: any) {
  console.log("this is the blog",blog);
  
  return (
    <div>
      <TravelBlogPost blog={blog}/>
    </div>
  );
}