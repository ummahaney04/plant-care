import React from 'react'
import { motion } from 'framer-motion'

export default function Banner() {
  const textVariant = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 }
  }

  const imageVariant = {
    hidden: { opacity: 0, x: 50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 }
  }

  return (
    <section className="bg-black overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:px-16 lg:py-10 px-3 pt-5 pb-10">
        <motion.div
          className="lg:pt-36 order-2 lg:order-1 mt-6 text-center md:text-center md:mt-8 lg:text-start"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <li className="mx-auto lg:mx-0 text-[#00A63E] bg-green-950 w-52 py-1 px-2 rounded-lg border border-[#007b3e]">
            New Collection Available
          </li>
          <h1 className="text-white font-medium text-8xl">
            Bring Nature <br />
            <span className="text-[#007b3e]">Into Your Home</span>
          </h1>
          <p className="text-gray-300 text-[20px] my-3">
            Discover our curated collection of premium indoor plants, <br />
            carefully selected to thrive in your living space and purify your air.
          </p>
          <button className="bg-[#00A63E] text-[#FAFAFA] py-4 px-9 rounded-lg text-[18px] hover:bg-[#007b3e] mt-3">
          <a href="http://localhost:5173/all"><i className="fa-solid fa-bag-shopping"></i> Shop Plants</a>
          </button>
          <button className="bg-[#141414] text-[#FAFAFA] py-4 px-9 rounded-lg text-[18px] hover:bg-[#313131] ms-3 md:ms-6 lg:ms-6">
           <a href="http://localhost:5173/vlog">Learn More <i className="fa-solid fa-arrow-right" style={{ color: "#00a63e" }}></i></a>
          </button>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <img src="img/anime.png" alt="" className="bg-black w-full max-w-full" />
        </motion.div>
      </div>
    </section>
  )
}
