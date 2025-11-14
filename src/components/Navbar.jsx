// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import SearchBar from './SearchBar'
// export default function Navbar() {
// const [open, setOpen] = useState(false)
// return (
// <header>
// <section>
// <nav className="bg-[#141414] opacity-90 shadow-md px-6 py-3 flex justify-between items-center relative z-50">
// <div className="flex items-center gap-2">
// <img src="img/logo.png" className="w-32 py-2" alt="" />
// </div>


// <button onClick={() => setOpen(!open)} className="md:hidden text-white">
// <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
// </svg>
// </button>
// {/* {searchOpen && <SearchBar />} */}
// {/* { {searchOpen && SearchBar}} */}



// <ul className="hidden md:flex gap-8 font-semibold ">
// <Link to='/'><li><a href="#" className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Home</a></li></Link>
// <Link to='/vlog'><li><a href="#" className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Vlog</a></li></Link>
// <li className="relative group">
// <button className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Category</button>
// <ul className="absolute hidden group-hover:block bg-black shadow-md rounded-lg mt-2 w-40">
// <Link to='/all'><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-700">All</a></li></Link>
// <Link to={`/all/${encodeURIComponent("Indoor Plant")}`}><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-700">Indoor Plants</a></li></Link>
// <Link to={`/all/${encodeURIComponent("Outdoor Plant")}`}><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-700">Outdoor Plants</a></li></Link>
// <Link to={`/all/${encodeURIComponent("Office Desk Plant")}`}><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-700">Office Desk Plants</a></li></Link>
// </ul>
// </li>
// </ul>


// <div className="hidden md:flex items-center gap-6">
// <button  onClick={() => setSearchOpen(!searchOpen)}
//           className="text-white hover:text-green-700 transition-all">
// <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
// </svg>
// </button>
// <Link to='/all'>
// <button className="text-white hover:text-green-700">
// <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
// </svg>
// </button></Link>
// <Link to="/login"><a href="#" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white border border-black outline outline-white outline-2 transition-all font-semibold">Login</a></Link>
// </div>
// </nav>


// <ul className={`${open ? '' : 'hidden'} flex-col bg-[#00A63E] shadow-md px-4 py-3 space-y-2 md:hidden font-semibold`}>
// <li><a href="#" className="block text-black py-2 border-b border-gray-300">Home</a></li>
// <li><a href="#" className="block text-black py-2 border-b border-gray-300">Vlog</a></li>
// <li><a href="#" className="block text-black py-2 border-b border-gray-300">Category</a></li>
// <div className="flex gap-4 text-lg pt-3 items-center">
// <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
// </svg>
// <a href="#" className="bg-black text-white text-center py-1 px-3 rounded-lg text-sm">Login</a>
// </div>
// </ul>
// </section>
// </header>
// )
// }





// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import SearchBar from './SearchBar'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)

//   return (
//     <header>
//       <section>
//         <nav className="bg-[#141414] opacity-90 shadow-md px-6 py-3 flex justify-between items-center relative z-50">
          
//           <div className="flex items-center gap-2">
//             <img src="img/logo.png" className="w-32 py-2" alt="" />
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-white">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>

//           <ul className="hidden md:flex gap-8 font-semibold ">
//             <Link to='/'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Home</a></li></Link>

//             <Link to='/vlog'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Vlog</a></li></Link>

//             <li className="relative group">
//               <button className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Category</button>
//               <ul className="absolute hidden group-hover:block bg-black shadow-md rounded-lg mt-2 w-40">

//                 <Link to='/all'><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">All</a></li></Link>
//                 <Link to={`/all/${encodeURIComponent("Indoor Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Indoor Plants</a></li></Link>
//                 <Link to={`/all/${encodeURIComponent("Outdoor Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Outdoor Plants</a></li></Link>
//                 <Link to={`/all/${encodeURIComponent("Office Desk Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Office Desk Plants</a></li></Link>
              
//               </ul>
//             </li>
//           </ul>

//           {/* RIGHT ICONS */}
//           <div className="hidden md:flex items-center gap-6">

//           {/* 🔍 Search Icon — click করলে hide হবে */}
//   {!searchOpen && (
//     <button  
//       onClick={() => setSearchOpen(true)}
//       className="text-white hover:text-green-700 transition-all"
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" 
//         className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" 
//         viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" 
//           d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
//       </svg>
//     </button>
//   )}

//   {/* 🔎 Search Bar — icon replace করবে */}
//   {searchOpen && (
//     <div className="w-64">
//       <SearchBar close={() => setSearchOpen(false)} />
//     </div>
//   )}

//             <Link to='/all'>
//               <button className="text-white hover:text-green-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
//                 </svg>
//               </button>
//             </Link>

//             <Link to="/login">
//               <a className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white border border-black outline outline-white outline-2 transition-all font-semibold">Login</a>
//             </Link>
//           </div>

//         </nav>

//         {/* 🔍 SearchBar Opens Here */}
//         {searchOpen && <SearchBar />}


//         {/* MOBILE MENU */}
//         <ul className={`${open ? '' : 'hidden'} flex-col bg-[#00A63E] shadow-md px-4 py-3 space-y-2 md:hidden font-semibold`}>
//           <li><a className="block text-black py-2 border-b border-gray-300">Home</a></li>
//           <li><a className="block text-black py-2 border-b border-gray-300">Vlog</a></li>
//           <li><a className="block text-black py-2 border-b border-gray-300">Category</a></li>

//           <div className="flex gap-4 text-lg pt-3 items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
//             </svg>

//             <a className="bg-black text-white text-center py-1 px-3 rounded-lg text-sm">Login</a>
//           </div>
//         </ul>

//       </section>
//     </header>
//   )
// }




import React, { useState } from 'react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header>
      <section>
        <nav className="bg-[#141414] opacity-90 shadow-md px-6 py-3 flex justify-between items-center relative z-50">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="img/logo.png" className="w-32 py-2" alt="" />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* MENU ITEMS */}
          <ul className="hidden md:flex gap-8 font-semibold ">
            <Link to='/'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Home</a></li></Link>
            <Link to='/vlog'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Vlog</a></li></Link>

            <li className="relative group">
              <button className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">Category</button>

              <ul className="absolute hidden group-hover:block bg-black shadow-md rounded-lg mt-2 w-40">
                <Link to='/all'><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">All</a></li></Link>
                <Link to={`/all/${encodeURIComponent("Indoor Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Indoor Plants</a></li></Link>
                <Link to={`/all/${encodeURIComponent("Outdoor Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Outdoor Plants</a></li></Link>
                <Link to={`/all/${encodeURIComponent("Office Desk Plant")}`}><li><a className="block px-4 py-2 hover:bg-gray-100 text-green-700">Office Desk Plants</a></li></Link>
              </ul>
            </li>

            <Link to='/Faq'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">FAQ</a></li></Link>

          </ul>

          {/* RIGHT SIDE ICONS */}
          <div className="hidden md:flex items-center gap-6 relative">

            {/* 🔍 SEARCH ICON */}
            {!searchOpen && (
          <button  
            onClick={() => setSearchOpen(true)}
            className="text-white hover:text-green-700 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </button>
        )}

        {/* Search Input */}
        {searchOpen && (
          <SearchBar close={() => setSearchOpen(false)} />
        )}

            {/* CART */}
            <Link to='/all'>
              <button className="text-white hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
                </svg>
              </button>
            </Link>

            {/* LOGIN */}
            <Link to="/login">
              <a className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white border border-black outline outline-white outline-2 transition-all font-semibold">Login</a>
            </Link>

          </div>
        </nav>

      </section>
    </header>
  )
}




