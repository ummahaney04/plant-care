import React from 'react'


export default function FollowInstagram(){
return (
<section className="py-16 bg-gradient-to-r from-black to-green-950">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white">Follow Us</h2>
<h3 className="text-5xl font-bold text-white mt-2">Follow Us On <span className="text-[#007b3e]">Instagram</span></h3>
</div>


<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 px-4">
<div className="grid grid-cols-2 gap-4">
<img src="people/people-1.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-2.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-3.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-4.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
</div>


<div className="flex justify-center items-center">
<img src="people/people-5.png" alt="" className="w-56 h-72 md:w-72 md:h-[400px] object-cover rounded-2xl shadow-md" />
</div>


<div className="grid grid-cols-2 gap-4">
<img src="people/people-6.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-7.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-8.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
<img src="people/people-9.png" alt="" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
</div>
</div>
</section>
)
}

