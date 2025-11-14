import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Reviews(){
const [reviews, setReviews] = useState([])
useEffect(()=>{
fetch('/reviews.json')
.then(res=>res.json())
.then(data=>setReviews(data))
.catch(err=>console.error(err))
},[])


const cardVariant = {
hidden: { opacity: 0, scale: 0.95 },
visible: i => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.45 } })
}


return (
<section className="bg-[#141414] text-white py-16">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-5xl font-bold mb-2">What Our <span className="text-[#007b3e]">Customers Say</span></h2>
<p className="text-yellow-400 text-lg mb-1">★★★★☆ <span className="text-white">4.8</span> <span className="text-gray-400">(3564 reviews)</span> </p>
<p className="text-gray-400 mb-12">Join thousands of happy plant parents who trust Plantree for their indoor garden needs.</p>


<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
{reviews.map((r, idx)=> (
<motion.div custom={idx} key={r.id} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.2}} variants={cardVariant} className="bg-black rounded-2xl p-6 text-left">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-green-400 mb-3" fill="currentColor">
<path d="M9.5 7.5C9.5 5.29 11.29 3.5 13.5 3.5V8c0 2.21-1.79 4-4 4H9.5V7.5zM3.5 7.5C3.5 5.29 5.29 3.5 7.5 3.5V8c0 2.21-1.79 4-4 4H3.5V7.5z"/>
</svg>
<p className="text-yellow-400 mb-2">★★★★★</p>
<p className="text-gray-200 mb-4">{r.text}</p>
<p className="text-gray-300 text-sm mb-4 py-1 px-4 border border-green-900 rounded-lg">Purchased: {r.product}</p>
<hr className="border-gray-600" />
<br />
<div className="flex items-center gap-3">
<img src={r.avatar} className="w-10 h-10 rounded-full" alt="" />
<div>
<h4 className="font-medium text-white">{r.user} <span className="text-green-500">✔</span></h4>
<p className="text-gray-500 text-sm">{r.time}</p>
</div>
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}