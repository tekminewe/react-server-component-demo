import { ProductDetails } from "@/components/product-details";
import { Suspense } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const { id } = useParams();
  if (!id) {
    return null;
  }

  return (
    <Suspense>
      <ProductDetails id={id} />
    </Suspense>
  );
}
