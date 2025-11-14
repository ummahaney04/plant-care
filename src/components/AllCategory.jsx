import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AllCategory() {
  const { category } = useParams();
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/All.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPlants = category
    ? plants.filter(
        (p) =>
          p.category.trim().toLowerCase() ===
          decodeURIComponent(category).trim().toLowerCase()
      )
    : plants;

  return (
    <section className="bg-linear-to-r from-black to-green-950 py-12">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-screen-xl mx-auto">
        {filteredPlants.map((plant) => (
          <div
            key={plant.id}
            onClick={() => navigate(`/plant/${plant.id}`)}
            className="mx-auto bg-[#141414] border-2 border-black shadow-lg rounded-2xl flex-shrink-0 w-full max-w-xs hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={`/${plant.img}`}
              alt={plant.name}
              className="rounded-t-2xl h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-400 text-sm truncate">{plant.category}</p>
              <h3 className="font-semibold text-lg text-white truncate">{plant.name}</h3>
              <p className="text-[#00a63e] font-bold mt-1">{plant.price}</p>
              <p className="text-yellow-400 text-sm mt-1">
                {plant.rating} <span className="text-gray-300">({plant.reviews})</span>
              </p>
              <button className="mt-3 bg-[#007b3e] hover:bg-[#00a63e] text-white px-4 py-2 rounded-xl w-full active:scale-95 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
