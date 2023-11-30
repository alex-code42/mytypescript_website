import { SmallBlogPost } from "../../../types";

export default function Header({ blog }: { blog: SmallBlogPost[] }) {
    if (!blog || blog.length === 0) {
        return null;
    }

    const firstBlogPost = blog[0];

  
    return (
        <div className="bg-white dark:bg-emerald-950">
            <section className="bg-white dark:bg-emerald-950">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{blog[0].fields.title}</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {firstBlogPost.fields.subtitle}                        
                        </p>
                        
                        <a href={`/blog/${firstBlogPost.fields.slug}`} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-emerald-500">
                            Read the blog
                        </a> 
                    </div>
                    <div className="relative w-full overflow-hidden rounded-lg bg-white hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={firstBlogPost.fields.titleImage.fields.file.url} alt="mockup"/>
                    </div>                
                </div>
            </section>
        </div>
    )
}