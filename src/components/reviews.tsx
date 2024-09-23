import { Review } from "@/types";

export const ProductReviews = async () => {
  const reviews: Review[] = await fetch(`/api/reviews.json`).then((res) =>
    res.json()
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div className="border p-4">
          <p>{review.name}</p>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
};
