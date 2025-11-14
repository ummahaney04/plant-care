import React from 'react'
import { motion } from 'framer-motion'


export default function WhyChoose(){
const leftVariant = { hidden: { opacity: 0, x: -50, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } }
const rightVariant = { hidden: { opacity: 0, x: 50, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } }

return (
<section className="bg-black">
<div className="relative pt-10">
<div className="absolute lg:top-52 lg:right-auto lg:left-16 md:right-auto md:left-16 right-5">
<h2 className="text-white text-4xl font-medium ">Why Choose <span className="text-[#007b3e]">Plantree?</span></h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center py-12 overflow-hidden">
<motion.div className="px-16 order-2 md:order-1 lg:order-1 pt-5 lg:pt-0 md:pt-0"
initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} transition={{duration:0.6}} variants={leftVariant}>
<p className="text-gray-400 ">We're passionate about bringing the beauty and benefits of plants <br /> into every home. Our expert team carefully sources healthy, <br /> premium plants and provides ongoing Support to help your green friends Thrive.</p>
<ul className="text-white mt-4 list-disc custom-list" >
<li>Premium quality plants from trusted growers</li>
<li>Expert care advice and ongoing support</li>
<li>Sustainable packaging and eco-friendly practices</li>
</ul>
</motion.div>

<motion.div className="order-1 lg:order-2 md:order-2 flex justify-center"
initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} transition={{duration:0.6}} variants={rightVariant}>
<img src="img/Aeonium arboreum-plant.jpeg" className="rounded-3xl w-9/12 mx-auto pt-5 lg:pt-0 md:pt-0" alt="" />
</motion.div>
</div>
</div>
</section>
)
}