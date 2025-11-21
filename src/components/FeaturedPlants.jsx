// import React, { useEffect, useRef, useState } from 'react'

// export default function FeaturedPlants() {
//   const [plants, setPlants] = useState([])
//   const sliderRef = useRef(null)

//   useEffect(() => {
//     fetch('/featuredPlants.json')
//       .then(res => res.json())
//       .then(data => setPlants(data))
//       .catch(err => console.error(err))
//   }, [])

//   const moveSlide = (dir) => {
//     const slider = sliderRef.current
//     if (!slider) return
//     const cardWidth = slider.children[0]?.offsetWidth + 16 || 288
//     slider.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
//   }

//   return (
//     <section className="bg-linear-to-r from-black to-green-950 py-12">
//       <div className="max-w-screen-xl mx-auto px-4">
//         {/* Title */}
//         <h1 className="text-white text-6xl font-bold text-center">
//           Featured <span className="text-[#007b3e]">Plants</span>
//         </h1>
//         <p className="text-gray-400 text-center mt-2 mb-8">
//           Hand-picked plants that are perfect for beginners and experts alike. Each plant <br /> comes with detailed care instructions.
//         </p>

//         {/* Slider Container */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={() => moveSlide(-1)}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#007b3e] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00a63e] z-10 hidden md:flex"
//           >
//             &#10094;
//           </button>

//           {/* Slider */}
//           <div
//             ref={sliderRef}
//             className="flex items-center overflow-x-auto scroll-smooth scrollbar-hide gap-6 px-8 md:px-0"
//             style={{ maxWidth: '100%' }}
//           >
//             {plants.map(p => (
//               <div
//                 key={p.id}
//                 className="bg-[#141414] border-2 border-black shadow-lg rounded-2xl flex-shrink-0 w-72 md:w-80 hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={p.img}
//                   alt={p.name}
//                   className="rounded-t-2xl h-64 md:h-72 w-full object-fill"
//                 />
//                 <div className="p-4 text-center">
//                   <p className="text-gray-500 text-sm">{p.category}</p>
//                   <h3 className="font-semibold text-lg text-white">{p.name}</h3>
//                   <p className="text-[#00a63e] font-bold mt-1">{p.price}</p>
//                   <p className="text-yellow-400 text-sm mt-1">
//                     {p.rating} <span className="text-gray-300">({p.reviews})</span>
//                   </p>
//                   <button className="mt-3 bg-[#007b3e] hover:bg-[#00a63e] text-white px-4 py-2 rounded-xl w-full active:scale-95 ease-out transition-transform duration-300">
//                     Add to Cart <i className="fa-solid fa-cart-shopping"></i>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => moveSlide(1)}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#007b3e] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00a63e] z-10 hidden md:flex"
//           >
//             &#10095;
//           </button>
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-end mt-6">
//           <button className="bg-[#141414] text-[#FAFAFA] py-4 px-9 rounded-lg text-[18px] hover:bg-[#313131] border-2 border-gray-700">
//             <a href="http://localhost:5173/all">View All Plants <i className="fa-solid fa-angle-right"></i></a>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }



import React, { useEffect, useRef, useState } from 'react'
import { useCart } from "../components/context/CartContext";
import { useUser } from "../components/context/UserContext";
import { useNavigate } from "react-router-dom";

export default function FeaturedPlants() {
  const [plants, setPlants] = useState([])
  const sliderRef = useRef(null)
  const { addToCart } = useCart()
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/featuredPlants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error(err))
  }, [])

  const moveSlide = (dir) => {
    const slider = sliderRef.current
    if (!slider) return
    const cardWidth = slider.children[0]?.offsetWidth + 16 || 288
    slider.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  const handleAddToCart = (plant) => {
    if (user) {
      addToCart(plant)
      alert(`${plant.name} added to cart!`)
    } else {
      navigate("/login")
    }
  }

  return (
    <section className="bg-linear-to-r from-black to-green-950 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-white text-6xl font-bold text-center">
          Featured <span className="text-[#007b3e]">Plants</span>
        </h1>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Hand-picked plants that are perfect for beginners and experts alike. Each plant <br /> comes with detailed care instructions.
        </p>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => moveSlide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#007b3e] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00a63e] z-10 hidden md:flex"
          >
            &#10094;
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex items-center overflow-x-auto scroll-smooth scrollbar-hide gap-6 px-8 md:px-0"
            style={{ maxWidth: '100%' }}
          >
            {plants.map(p => (
              <div
                key={p.id}
                className="bg-[#141414] border-2 border-black shadow-lg rounded-2xl flex-shrink-0 w-72 md:w-80 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-t-2xl h-64 md:h-72 w-full object-fill"
                />
                <div className="p-4 text-center">
                  <p className="text-gray-500 text-sm">{p.category}</p>
                  <h3 className="font-semibold text-lg text-white">{p.name}</h3>
                  <p className="text-[#00a63e] font-bold mt-1">{p.price}</p>
                  <p className="text-yellow-400 text-sm mt-1">
                    {p.rating} <span className="text-gray-300">({p.reviews})</span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(p)}
                    className="mt-3 bg-[#007b3e] hover:bg-[#00a63e] text-white px-4 py-2 rounded-xl w-full active:scale-95 ease-out transition-transform duration-300"
                  >
                    Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => moveSlide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#007b3e] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00a63e] z-10 hidden md:flex"
          >
            &#10095;
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-[#141414] text-[#FAFAFA] py-4 px-9 rounded-lg text-[18px] hover:bg-[#313131] border-2 border-gray-700">
            <a href="http://localhost:5173/all">View All Plants <i className="fa-solid fa-angle-right"></i></a>
          </button>
        </div>
      </div>
    </section>
  )
}
