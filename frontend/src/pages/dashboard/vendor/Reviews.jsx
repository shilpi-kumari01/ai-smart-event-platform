const Reviews = () => {
  const reviews = [
    { name: "Ankit", rating: 5, comment: "Excellent service!" },
    { name: "Priya", rating: 4, comment: "Very professional vendor." },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow"
          >
            <p className="font-semibold">
              {review.name} ⭐ {review.rating}
            </p>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
