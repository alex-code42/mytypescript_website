import { log } from 'console';
import React from 'react';
import { BlogPost } from '../../../../types';
import { ContentfulText } from '../../../../types';

const TravelBlogPost = ({blog } : {blog: BlogPost}) => {
  console.log("this is the blog-yyz",blog.fields.titleImage.fields.file.url);
  


  return (
    <div>
      <div className="h-[50vh] bg-gray-50 flex items-center mb-8">
        <section
          className="w-full bg-cover bg-center py-32"
          style={{ backgroundImage: `url(${blog.fields.titleImage.fields.file.url})` }}
        >
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-medium mb-6">{blog.fields.title}</h1>
            <p className="text-xl mb-12">{blog.fields.comments}</p>
          </div>
        </section>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {blog.fields.subtitle}
            </h2>
            <p className="mb-4">
            
            {blog?.fields.description.content.map((text: ContentfulText) => (
                <div key={text?.sys?.id} className="group relative">
                 <p className="text-base text-gray-900 mb-8">{text.content[0].value}</p>
                </div>
              ))}


            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={blog.fields.moreImages[1].fields.file.url} alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={blog.fields.moreImages[2].fields.file.url} alt="office content 2" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-l tracking-tight font-extrabold text-gray-900 dark:text-white">
              Conclusion
            </h2>
            <p className="mb-4">
            {blog?.fields?.conclusion?.content.map((text: ContentfulText) => (
                <div key={text?.sys?.id} className="group relative">
                 <p className="text-base text-gray-900 mb-8">{text.content[0].value}</p>
                </div>
              ))}
            </p>
            <img src={blog.fields.moreImages[0].fields.file.url} alt="Image Alt Text" className="w-full h-auto rounded-t-lg mt-6"/>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default TravelBlogPost;
  
