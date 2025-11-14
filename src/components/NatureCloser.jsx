import React from 'react'


export default function NatureCloser(){
return (
<section className="flex justify-center items-center py-16 bg-[url('img/beautiful-plant-illustration.jpg')] bg-cover bg-center bg-black/50 bg-blend-multiply ">
<div className="relative w-full max-w-5xl flex justify-center">
<img src="img/beautiful-plant-illustration.jpg" alt="Beautiful Plant" className="rounded-2xl border-4 border-black w-full h-auto object-cover" />
<div className="absolute bottom-6 left-6 text-left text-white flex flex-col space-y-4 max-w-md">
<h3 className="text-2xl font-semibold drop-shadow-lg">Bring Nature Closer To You 🌿</h3>
<p className="text-lg">Discover premium quality indoor plants with expert care and eco-friendly packaging.</p>
<button className="border border-white text-white px-6 py-2 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max"><a href="http://localhost:5173/vlog">Learn More</a></button>
</div>
</div>
</section>
)
}