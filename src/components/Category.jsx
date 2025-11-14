import React from 'react'


export default function Category(){
return (
<section className="bg-linear-to-r from-black to-green-950 py-16 px-6">
<p className="text-white text-center text-3xl font-semibold pb-6 pt-5">Our Category</p>
<h2 className="text-6xl font-bold text-white text-center pb-8">Shop by <span className="text-[#007b3e]">Category</span></h2>


<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-start px-20 py-10 text-white text-[20px] text-center">
<div className="pb-6 md:pb-0 lg:pb-0">
<img src="people/catagory-plant-1.jpg" className="rounded-[100%] w-36 mx-auto" alt="" />
<h3 className="">Indoor Plants</h3>
</div>
<div className="pb-6 md:pb-0 lg:pb-0">
<img src="people/catagory-plant-2.jpg" className="rounded-[100%] w-36 mx-auto" alt="" />
<h3>Outdoor Plants</h3>
</div>
<div>
<img src="people/catagory-plant-3.png" className="rounded-[100%] w-36 mx-auto" alt="" />
<h3>Office Desk Plants</h3>
</div>
<div>
<img src="people/catagory-plant-5.jpg" className="rounded-[100%] w-36 mx-auto" alt="" />
<h3>Gifts plants & Combo</h3>
</div>
</div>
</section>
)
}