import React, { useState } from 'react';
// import Scroll from './Scroll';
import { ProductDetails } from '../../../types';
import ProductDetail from '../product_detail';
import ProductList from '../productlist';
import Card from './Card';





function Search({ productss }: { productss: ProductDetails[] }) {
  console.log("this is the Productss in search", productss);
  const [searchField, setSearchField] = useState("");

  const filteredProducts = productss?.filter(
    product =>
      product.fields.title?.toLowerCase().includes(searchField.toLowerCase()) ||
      product.fields.shortDescription?.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
    <div className="mx-auto lg:max-w-2xl lg:px-8 mt-8 ">
  <div className="relative mt-2 rounded-md shadow-sm px-4">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
      type="text"
      placeholder="Search..."
      value={searchField}
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:pl-4 lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 px-8"
      onChange={(e) => setSearchField(e.target.value)}
    />
    <div className="absolute inset-y-0 right-0 flex items-center">
      {/* Additional content on the right side if needed */}
    </div>
  </div>
</div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Collection</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts?.map((product, index) => (
            <div key={index}>
              <Card product={product}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;