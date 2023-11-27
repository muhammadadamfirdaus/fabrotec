import ProductList from "./products";

export default async function Products() {
  const response = await fetch(`https://dummyjson.com/products`);
  const dataProducts = await response.json();

  const products = dataProducts.products;

  console.log(products);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
