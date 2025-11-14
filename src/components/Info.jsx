import React from 'react'


export default function Info(){
return (
<section className="bg-linear-to-r from-black to-green-950">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10 pt-32 px-16">
<div className=" border-2 border-green-600 flex items-center justify-center gap-6 rounded-lg py-6 px-3 lg:px-0 md:px-3">
<div><i className="fa-solid fa-truck-ramp-box" style={{color:'#00a63e'}}></i></div>
<div>
<h3 className="text-white text-[18px]">Free Delivery</h3>
<p className="text-gray-400 text-[16px]">Free Shipping on orders over $60 </p>
</div>
</div>
<div className=" border-2 border-green-600 flex items-center justify-center gap-6 rounded-lg py-6 px-3 lg:px-0 md:px-3">
<div><i className="fa-solid fa-seedling" style={{color:'#00a63e'}}></i></div>
<div>
<h3 className="text-white text-[18px]">Plant Guarantee</h3>
<p className="text-gray-400 text-[16px]">30-day healthy plant guarantee </p>
</div>
</div>
<div className=" border-2 border-green-600 flex items-center justify-center gap-6 rounded-lg py-6 md:px-3 lg:px-0 px-3">
<div><i className="fa-solid fa-shield-heart" style={{color:'#00a63e'}}></i></div>
<div>
<h3 className="text-white text-[18px]">Expert Care Tips</h3>
<p className="text-gray-400 text-[16px]">Free care guides with every purchase </p>
</div>
</div>
</div>
</section>
)
}