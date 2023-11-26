import React from 'react';

const TravelBlogPost = ({blog}:any) => {
  console.log("this is the blogg",blog);
  return (
    <div>
        <div className="h-[50vh] bg-gray-50 flex items-center">
        <section className="w-full bg-cover bg-center py-32" style={{ backgroundImage: `url(${blog.fields.titleImage.fields.file.url})` }}>
                    <div className="container mx-auto text-center text-white">
                    <h1 className="text-5xl font-medium mb-6">{blog.fields.title}</h1>
                    <p className="text-xl mb-12">{blog.fields.comments}</p>
                </div>
            </section>
        </div>


    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.fields.title}</h1>

      

      <p className="mt-4">
      {blog.fields.specialStory}
      </p>
    </div>
          <div className="grid grid-cols-2 gap-4 m-8">
        <img
          src={blog.fields.moreImages[0].fields.file.url}
          alt="Reisebild 1"
          className="w-full object-cover rounded"
        />
        

        <img
          src={blog.fields.moreImages[1].fields.file.url}
          alt="Reisebild 2"
          className="w-full object-cover rounded"
        />
             <p className="mt-4">
             {blog.fields.specialStory}
      </p>
        <img
          src={blog.fields.moreImages[2].fields.file.url}
          alt="Reisebild 3"
          className="w-full object-cover rounded"
        />
    
        <img
          src={blog.fields.moreImages[3].fields.file.url}
          alt="Reisebild 4"
          className="w-full object-cover rounded"
        />
            <p className="mt-4">
        Egal, ob du ein erfahrener Reisender oder ein Neuling bist, hier gibt
        es für jeden etwas zu entdecken.
        Egal, ob du ein erfahrener Reisender oder ein Neuling bist, hier gibt
        es für jeden etwas zu entdecken.
        Egal, ob du ein erfahrener Reisender oder ein Neuling bist, hier gibt
        es für jeden etwas zu entdecken.
        Egal, ob du ein erfahrener Reisender oder ein Neuling bist, hier gibt
        es für jeden etwas zu entdecken.
        Egal, ob du ein erfahrener Reisender oder ein Neuling bist, hier gibt
        es für jeden etwas zu entdecken.
      </p>
      </div>
    </div>
  );
};

export default TravelBlogPost;



