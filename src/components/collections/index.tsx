import { BlogPost } from "../../../types";

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
      slug: 'desk-and-office',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
      slug: 'self-improvement',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
      slug: 'travel',
    },
  ]

  export default function Collections({blog } : {blog: BlogPost[]}) {
    // console.log("this is the blog-yyz",blog[0].fields.titleImage.fields.file.url);
    return (
      <div className="bg-gray-100 -z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
            <h2 className="text-2xl font-bold text-gray-900">Blogposts</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 -z-50">
              {blog?.map((callout: BlogPost) => (
                <div key={callout.sys.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 z-0">
                    <img
                      src={callout.fields.titleImage.fields.file.url}
                      alt="sdfsdf"
                      className="h-full w-full object-cover object-center "
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={`/blog/${callout.fields.slug}`}>
                      <span className="absolute inset-0" />
                      Read more
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.fields.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }