
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function PlantDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [plant, setPlant] = useState(null);

//   useEffect(() => {
//     fetch("/All.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const selected = data.find((p) => p.id === parseInt(id));
//         setPlant(selected);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!plant) return <p className="text-center mt-20 text-xl">Loading...</p>;

//   return (
//     <div className="bg-green-900 min-h-screen py-10 px-4 sm:px-6 md:px-12 font-[Poppins]">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 bg-black/70 hover:bg-[#00a63e] text-white/80 px-4 py-3 rounded  active:scale-95 transition-transform duration-300 "
//       >
//         ← Back
//       </button>

//       <div className="max-w-6xl mx-auto bg-black   shadow-[0_4px_20px_rgba(255,255,255,0.3)] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
//         <div className="flex justify-center items-center">
//           <img
//             src={`/${plant.img}`}
//             alt={plant.name}
//             className="w-full max-w-md rounded-2xl shadow-md"
//           />
//         </div>

//         <div className="flex flex-col justify-start">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#007b3e] mb-2">{plant.name}</h2>
//           <p className="text-gray-400 mb-2">{plant.category}</p>
//           <p className="text-xl sm:text-2xl font-semibold text-[#007b3e] mb-2">{plant.price}</p>
//           <p className="text-yellow-500 mb-4">
//             ⭐ {plant.rating} ({plant.reviews} Reviews)
//           </p>
//           {plant.description && <p className="text-gray-400 mb-5">{plant.description}</p>}

//           {plant.care && (
//             <div className="bg-[#007b3e] p-4 sm:p-5 rounded-xl mb-5">
//               <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
//                 Care Instructions 🌿
//               </h3>
//               <ul className="space-y-1 sm:space-y-2 text-gray-300">
//                 <li><b>Light:</b> {plant.care.light}</li>
//                 <li><b>Water:</b> {plant.care.water}</li>
//                 <li><b>Soil:</b> {plant.care.soil}</li>
//                 <li><b>Temperature:</b> {plant.care.temperature}</li>
//                 <li><b>Difficulty:</b> {plant.care.difficulty}</li>
//               </ul>
//             </div>
//           )}

//           <div className="space-y-1 sm:space-y-2 text-gray-400 mb-6">
//             <p><b>Scientific Name:</b> {plant.scientific_name}</p>
//             <p><b>Height:</b> {plant.height}</p>
//             <p><b>Pot Included:</b> {plant.pot_included ? "Yes" : "No"}</p>
//             <p><b>Availability:</b> {plant.availability}</p>
//             <p><b>Shipping:</b> {plant.shipping}</p>
//             <p><b>Toxicity:</b> {plant.toxicity}</p>
//             <p><b>Propagation:</b> {plant.propagation}</p>
//             <p><b>Return Policy:</b> {plant.return_policy}</p>
//           </div>

//           <button className="bg-[#007b3e] hover:bg-[#00a63e] text-white font-semibold py-3 px-6 rounded-xl shadow-md active:scale-95 transition-transform  duration-300 w-full md:w-auto">
//             🛒 Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/context/CartContext"; // Cart
import { useUser } from "../components/context/UserContext"; // User login check

export default function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const { addToCart } = useCart();
  const { user } = useUser();

  useEffect(() => {
    fetch("/All.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((p) => p.id === parseInt(id));
        setPlant(selected);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!plant) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <div className="bg-green-900 min-h-screen py-10 px-4 sm:px-6 md:px-12 font-[Poppins]">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-black/70 hover:bg-[#00a63e] text-white/80 px-4 py-3 rounded  active:scale-95 transition-transform duration-300 "
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto bg-black shadow-[0_4px_20px_rgba(255,255,255,0.3)] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex justify-center items-center">
          <img
            src={`/${plant.img}`}
            alt={plant.name}
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>

        <div className="flex flex-col justify-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#007b3e] mb-2">{plant.name}</h2>
          <p className="text-gray-400 mb-2">{plant.category}</p>
          <p className="text-xl sm:text-2xl font-semibold text-[#007b3e] mb-2">{plant.price}</p>
          <p className="text-yellow-500 mb-4">
            ⭐ {plant.rating} ({plant.reviews} Reviews)
          </p>
          {plant.description && <p className="text-gray-400 mb-5">{plant.description}</p>}

          {plant.care && (
            <div className="bg-[#007b3e] p-4 sm:p-5 rounded-xl mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Care Instructions 🌿
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300">
                <li><b>Light:</b> {plant.care.light}</li>
                <li><b>Water:</b> {plant.care.water}</li>
                <li><b>Soil:</b> {plant.care.soil}</li>
                <li><b>Temperature:</b> {plant.care.temperature}</li>
                <li><b>Difficulty:</b> {plant.care.difficulty}</li>
              </ul>
            </div>
          )}

          <div className="space-y-1 sm:space-y-2 text-gray-400 mb-6">
            <p><b>Scientific Name:</b> {plant.scientific_name}</p>
            <p><b>Height:</b> {plant.height}</p>
            <p><b>Pot Included:</b> {plant.pot_included ? "Yes" : "No"}</p>
            <p><b>Availability:</b> {plant.availability}</p>
            <p><b>Shipping:</b> {plant.shipping}</p>
            <p><b>Toxicity:</b> {plant.toxicity}</p>
            <p><b>Propagation:</b> {plant.propagation}</p>
            <p><b>Return Policy:</b> {plant.return_policy}</p>
          </div>

          {/* Add to Cart button with login check */}
          <button
            onClick={() => {
              if (user) {
                addToCart(plant);
                alert(`${plant.name} added to cart!`);
              } else {
                navigate("/login");
              }
            }}
            className="bg-[#007b3e] hover:bg-[#00a63e] text-white font-semibold py-3 px-6 rounded-xl shadow-md active:scale-95 transition-transform  duration-300 w-full md:w-auto"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
