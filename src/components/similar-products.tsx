"use client";

import { Product } from "@/types";
import { ProductListItem } from "./product-list-item";
import { use } from "react";

export const SimilarProducts = ({
  promise,
}: {
  promise: Promise<Product[]>;
}) => {
  const products = use(promise);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};
