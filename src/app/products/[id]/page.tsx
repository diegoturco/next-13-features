import { Metadata } from "next";

type Product = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type ProductParams = {
  id: number;
};

async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: ProductParams;
}): Promise<Metadata> {
  const product = await getProduct(params.id);
  return { title: product.title };
}

export default async function ProductPage({
  params,
}: {
  params: ProductParams;
}) {
  const product = await getProduct(params.id);
  return <h1>{product.title}</h1>;
}
