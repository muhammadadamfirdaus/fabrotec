import Image from "next/image";

export default async function ProductDetail({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await response.json();
  console.log(params);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-2 py-2">
        <div className="bg-white rounded-md mb-4">
          <h1 className="px-4 pt-4 capitalize">{product.category}</h1>
          <div className="flex justify-between items-center px-4 pt-1 pb-2 mb-2">
            <h1 className="font-semibold text-2xl">{product.title}</h1>
            <h3 className="text-2xl">${product.price}</h3>
          </div>
          <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto" src={product.thumbnail} alt={product.title} width={500} height={500} priority />
          <p className="text-base my-2 px-4 py-2">{product.description}</p>
        </div>
      </main>
    </>
  );
}
