"use client";

import { Product } from "@/types";
import { ReactNode } from "react";

export const ProductInformation = ({
  product,
  reviewsSection,
}: {
  product: Product;
  reviewsSection?: ReactNode;
}) => {
  return (
    <>
      <div className="border p-4">
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      <h2 className="font-semibold">Reviews</h2>
      {reviewsSection}
    </>
  );
};
