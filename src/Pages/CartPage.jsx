import React from "react";
import { useCart } from "../components/context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-3xl text-white mb-6">My Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <Link to={`/plant/${item.id}`} key={item.id}>
              <div className="bg-[#1f1f1f] p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300">
                <img
                  src={`/${item.img}`}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-white font-bold mt-2">{item.name}</h3>
                <p className="text-[#00a63e] font-bold mt-1">{item.price}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent link click
                    removeFromCart(item.id);
                  }}
                  className="mt-2 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-xl"
                >
                  Remove
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
