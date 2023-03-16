import Link from "next/link";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <Link href="/">Home</Link>
    </>
  );
}
