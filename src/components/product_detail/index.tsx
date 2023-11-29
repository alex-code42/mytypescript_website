import { useState, useEffect  } from 'react'
import { RadioGroup } from '@headlessui/react'
import { products } from '../productlist/productlist'
import { useRouter } from 'next/router'
import useOpenShoppingCard from '../zustand'
import useCartStore from '../zustand/cartStore'
import {  Item, ProductDetails,Sizes, chosenSize } from '../../../types'


  
const reviews = { href: '#', average: 4, totalCount: 117 }
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  




  
  export default function ProductDetail({productss} : {productss: ProductDetails}) {
    const { isTrue, toggleState } = useOpenShoppingCard(); 
    const addToCart = useCartStore((state) => state.addToCart);


    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    console.log("this is the selected color",selectedColor);
    console.log("this is the selected size",selectedSize);

console.log("this is the productssssss",productss);

  const router = useRouter();
  const { isReady, query } = router;

        if (!isReady) {
          return <div>Loading...</div>;
        }
    const { id } = query;
    const filteredProduct = products.filter(product => product.id === id)
    console.log("This is the filtered product",filteredProduct[0]);
    
    
    const product = filteredProduct[0]
    console.log("this is the product",product);


  
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product?.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-gray-400">
            <span className="text-gray-600">{productss.fields.productName}</span>
          </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={productss.fields.images[0].fields.file.url}
                alt={product?.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={productss.fields.images[1].fields.file.url}
                  alt={product?.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={productss.fields.images[2].fields.file.url}
                  alt={product?.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={productss.fields.images[3].fields.file.url}
                alt={product?.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
  
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productss.fields.productName}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">€ {productss.fields.price}</p>
  
              {/* Reviews */}
              {/* <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div> */}
  
              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
  
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {productss?.fields?.colors.map((color) => (
                        <RadioGroup.Option
                          key={color}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                          style={{ backgroundColor: color }}
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color}
                          </RadioGroup.Label>
                          <span
                            // aria-hidden="true"
                            className={classNames(
                              color,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
  
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                   
                  </div>
  
                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {productss?.fields?.sizes.map((size: string ) => (
                        <RadioGroup.Option
                          key={size}
                          value={size}
                          disabled={!size}
                          className={({ active }) =>
                            classNames(
                              size
                                ? 'cursor-pointer bg-white text-gray-500 shadow-sm '
                                : 'cursor-pointer bg-white text-gray-500 shadow-sm',
                              active ? 'ring-2 ring-indigo-500 hover:bg-gray-50' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">"{size}"</RadioGroup.Label>
                              {/* {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )} */}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
  
                  <button
                      type="button"
                      onClick={() => {
                        // Create a product object with selected color and size
                        const productToAdd : Item = {
                          id: productss.sys.id,
                          image: productss.fields.images[0].fields.file.url,
                          chosenSize: selectedSize,
                          color: selectedColor,
                          title: productss.fields.title,
                          subtitle: productss.fields.subtitle,
                          slug: productss.fields.slug,
                          titleImage: productss.fields.titleImage,
                          description: productss.fields.description,
                          conclusion: productss.fields.conclusion,
                          comments: productss.fields.comments,
                          productName: productss.fields.productName,
                          images: productss.fields.images,
                          price: productss.fields.price,
                          imageAlt: "",
                          href: "",
                          sizes: productss.fields.sizes,
                        };

                        addToCart(productToAdd);
                        toggleState(); 
                      }}
                      className="disabled:opacity-50 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      disabled={!selectedSize || !selectedColor}
                    >
                      Add to bag
                  </button>
              </form>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
  
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{productss.fields.shortDescription}</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {productss?.fields?.hightlights?.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{productss?.fields.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}