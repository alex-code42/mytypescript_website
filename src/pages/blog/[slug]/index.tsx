import TravelBlogPost from "@/components/blog/article";
import { createClient } from 'contentful'
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogPost } from "../../../../types";

interface BlogPostParams extends Record<string, string | string[]> {
  slug: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
})

export const getStaticPaths: GetStaticPaths<BlogPostParams> = async () => {
  const res = await client.getEntries({ 
    content_type: "blog" 
  })

  const paths = res.items.map(item => {
    // Convert params.slug to string explicitly
    const slug = String(item.fields.slug);
    
    return {
      params: { slug }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<{ blog: BlogPost }, BlogPostParams> = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params?.slug, 
  });

  return {
    props: {
      blog: items[0] as BlogPost, 
    },
  };
};

export default function BlogIndexPage({ blog }: { blog: BlogPost }) {
  
  return (
    <div>
      <TravelBlogPost blog={blog}/>
    </div>
  );
}
