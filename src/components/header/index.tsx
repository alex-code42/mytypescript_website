export default function Header() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The travel blog that loves good fashion</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Luxury bags are a popular choice among smart travelers in Jordan. They are stylish, durable, and can be used for a variety of purposes.                      
                        </p>
                        
                        <a href="/blog/travel-in-jordan" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Read the blog
                        </a> 
                    </div>
                    <div className="relative w-full overflow-hidden rounded-lg bg-white hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://images.ctfassets.net/lr057rk03c3t/46eQlQ2bQuOzqPC0Mxib8s/be7806cc879f1ac4063ddeb1abd41343/juli-kosolapova-be5B3YGDmtc-unsplash.jpg" alt="mockup"/>
                    </div>                
                </div>
            </section>
        </div>
    )
}