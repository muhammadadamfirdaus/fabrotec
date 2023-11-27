"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineSortDescending } from "react-icons/hi";

export default function ProductList({ products }) {
  const sortFunction = (e) => {
    e.preventDefault();
    const sortedData = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log(sortedData);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col px-2 py-2 md:w-[480px] mx-auto">
        <div className="flex items-end justify-end">
          <div className="w-[32px] h-[32px] rounded-md border border-slate-600 flex place-items-end my-4 cursor-pointer">
            <button onClick={sortFunction}>
              <HiOutlineSortDescending size={32} />
            </button>
          </div>
        </div>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div className="bg-white rounded-md mb-4">
                <h1 className="px-4 pt-4 capitalize">{product.category}</h1>
                <div className="flex justify-between items-center px-4 pt-1 pb-2 mb-2">
                  <h1 className="font-semibold text-2xl">{product.title}</h1>
                  <h3 className="text-2xl">${product.price}</h3>
                </div>
                <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src={product.thumbnail} alt={product.title} width={500} height={500} priority />
                <p className="text-base my-2 px-4 py-2">{product.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
