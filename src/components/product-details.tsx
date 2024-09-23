import { SimilarProducts } from "@/components/similar-products";
import { Product } from "@/types";
import { Suspense } from "react";
import { ProductInformation } from "./product-information";
import { ProductReviews } from "./reviews";

export const ProductDetails = async ({ id }: { id: string }) => {
  const product: Product = await fetch(`/api/products/${id}.json`).then((res) =>
    res.json()
  );
  const similarProductsPromise = fetch(`/api/products/${id}/similar.json`).then(
    (res) => res.json()
  );

  return (
    <div className="p-4 space-y-4">
      <h1 className="font-semibold">Product Details</h1>
      <ProductInformation
        product={product}
        reviewsSection={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductReviews />
          </Suspense>
        }
      />
      <h2 className="font-semibold">Similar Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <SimilarProducts promise={similarProductsPromise} />
      </Suspense>
    </div>
  );
};
