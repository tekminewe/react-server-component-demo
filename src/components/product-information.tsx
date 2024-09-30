"use client";

import { addToCartAction } from "@/actions/cart";
import { Product } from "@/types";
import { ReactNode, useActionState } from "react";

export const ProductInformation = ({
  product,
  reviewsSection,
}: {
  product: Product;
  reviewsSection?: ReactNode;
}) => {
  const [addToCartResult, addToCart, isPending] = useActionState(
    addToCartAction,
    null
  );

  return (
    <>
      <div className="border p-4">
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      {addToCartResult && (
        <p>
          {addToCartResult.success ? "Added to cart" : "Failed to add to cart"}
        </p>
      )}
      {isPending ? (
        <p>Adding to cart...</p>
      ) : (
        <form action={addToCart}>
          <input type="hidden" name="productId" value={product.id} />
          <button type="submit">Add to cart</button>
        </form>
      )}
      <h2 className="font-semibold">Reviews</h2>
      {reviewsSection}
    </>
  );
};
