import { Product } from "@/types";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className="border rounded p-4">
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <div className="flex gap-4 mt-4">
        <a
          className="bg-blue-600 text-white px-4 py-2 rounded"
          href={`/p/${product.id}`}
        >
          View Details
        </a>
      </div>
    </div>
  );
};
