import Link from "next/link"
import { products } from "./productlist"
import Image from 'next/image'
import { Console } from "console";
import { ProductDetails } from "../../../types";
import Card from "../search/Card";


// console.log(products);


  
  export default function ProductList({productss} : {productss: ProductDetails[]}) {


    return (
      <div>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Collection</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productss?.map((product) => (
             <Card product={product} />
            ))}
          </div>
        </div>
      </div>
      </div>
      
    )
  }
  