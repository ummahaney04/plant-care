import React from 'react'


export default function Footer(){
return (
<footer>
<section className="bg-black">
<div>
<div className="flex justify-around items-center py-20 text-center">
<div>
<h2 className="text-3xl font-bold text-[#00a63e]">3,5000+</h2>
<p className="text-gray-400 ">Happy Customers</p>
</div>
<div>
<h2 className="text-3xl font-bold text-[#00a63e]">4.8/5</h2>
<p className="text-gray-400 ">Average Rating</p>
</div>
<div>
<h2 className="text-3xl font-bold text-[#00a63e]">99%</h2>
<p className="text-gray-400 ">Plant Survival Rating</p>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 pb-16">
<div>
<div className="flex justify-start items-end gap-3 ">
<img src="img/logo.png" className="w-20" alt="" />
<h2 className="text-[#00a63e] font-bold text-[22px] py-1">Plants Care</h2>
</div>
<p className="text-gray-400 py-1">Bringing nature into your home with <br /> premium quality plants, expert care <br /> advice, and Sustainable practices. <br /> Your trusted partner in creating <br /> Beautiful indoor gardens.</p>
</div>


<div className="text-white">
<h2 className="text-[22px] font-medium">Quick Links</h2>
<ul className="text-gray-400">
<li><a href="">Home</a></li>
<li><a href="">Shop Plant</a></li>
<li><a href="">Blog</a></li>
<li><a href="">About us</a></li>
<li><a href="">Category</a></li>
</ul>
</div>


<div>
<h2 className="text-[22px] font-medium text-white">Customers Service</h2>
<ul className="text-gray-400">
<li><a href="">Contact Us</a></li>
<li><a href="">FAQ</a></li>
<li><a href="">Press</a></li>
</ul>
</div>


<div>
<h2 className="text-[22px] font-medium text-white">Stay Connected</h2>
<p className="text-gray-400">Get Plant care Tips, exclusive <br /> offers, and new arrivals delivered <br /> to your inbox</p>
<p className="text-gray-400 py-1"><i className="fa-solid fa-phone text-[#00a63e]"></i> 01909-9121192</p>
<p className="text-gray-400 py-1"><i className="fa-solid fa-envelope text-[#007b3e]"></i> Hello@plantree.com</p>
<p className="text-gray-400 py-1"><i className="fa-solid fa-location-dot text-[#00a63e]"></i> Dhaka, Bangladesh</p>
</div>
</div>
<div>
<hr className="border-gray-400 lg:w-[1000px] md:w-9/12 w-full mx-auto" />
<p className="text-gray-400 text-center mx-auto py-6">©2025 Plantree. All rights reserved. <br />Made with love for plant lovers everywhere</p>
</div>


</div>
</section>
</footer>
)
}
