import React from 'react';
import { ProductDetails } from '../../../types';

export default function Card({ product }: { product: ProductDetails }) {
  console.log("this is the product", product.sys.id);
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.fields.images[0].fields.file.url}
          alt="bla"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-black dark:text-white">
            <a href={`/shop/${product.fields.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.fields.productName}
            </a>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
        </div>
        <p className="text-sm font-medium text-black dark:text-white">€ {product.fields.price}</p>
      </div>
    </div>
  );
}