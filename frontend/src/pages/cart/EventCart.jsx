const EventCart = () => {
  const cartItems = [
    { name: "DJ Night", price: 20000 },
    { name: "Stage Decoration", price: 15000 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Event Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item, i) => (
          <div
            key={i}
            className="flex justify-between bg-white p-4 rounded-lg shadow"
          >
            <span>{item.name}</span>
            <span className="font-semibold">₹{item.price}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 text-lg font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
        Proceed to Payment
      </button>
    </div>
  );
};

export default EventCart;
