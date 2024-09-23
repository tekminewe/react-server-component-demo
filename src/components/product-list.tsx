import { Product } from "@/types";
import { ProductListItem } from "./product-list-item";

export const ProductList = async () => {
  const products: Product[] = await fetch(`/api/products.json`).then((res) =>
    res.json()
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};
