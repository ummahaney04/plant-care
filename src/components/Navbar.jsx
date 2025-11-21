// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import SearchBar from './SearchBar'
// import { useUser } from "./UserContext";



// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)

//   return (
//     <header>
//       <section>
//         <nav className="bg-[#141414] opacity-90 shadow-md px-6 py-3 flex justify-between items-center relative z-50">
          
//           {/* LOGO */}
//           <div className="flex items-center gap-2">
//             <img src="img/logo.png" className="w-32 py-2" alt="" />
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-white">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>

//           {/* MENU ITEMS */}
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

//             <Link to='/Faq'><li><a className="text-white text-[20px] hover:border-b-4 hover:text-green-700 hover:border-green-700 hover:rounded-b-md transition-all">FAQ</a></li></Link>

//           </ul>

//           {/* RIGHT SIDE ICONS */}
//           <div className="hidden md:flex items-center gap-6 relative">

//             {/*  SEARCH ICON */}
//             {!searchOpen && (
//           <button  
//             onClick={() => setSearchOpen(true)}
//             className="text-white hover:text-green-700 transition-all"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
//             </svg>
//           </button>
//         )}

//         {/* Search Input */}
//         {searchOpen && (
//           <SearchBar close={() => setSearchOpen(false)} />
//         )}

//             {/* CART */}
//             <Link to='/all'>
//               <button className="text-white hover:text-green-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
//                 </svg>
//               </button>
//             </Link>

//             {/* LOGIN */}
//             <Link to="/login">
//               <a className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white border border-black outline outline-white outline-2 transition-all font-semibold">Login</a>
//             </Link>

//           </div>
//         </nav>

//       </section>
//     </header>
//   )
// }

import React, { useState } from 'react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import { useUser } from "./context/UserContext";
 // <-- IMPORTANT

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const { user, logout } = useUser()   // <-- user & logout access

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

            {/* SEARCH ICON */}
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

            {/* SEARCH BAR */}
            {searchOpen && (
              <SearchBar close={() => setSearchOpen(false)} />
            )}

            {/* CART */}
            <Link to='/cart'>
              <button className="text-white hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M17 13l2 9M9 21h6" />
                </svg>
              </button>
            </Link>

            {/* LOGIN / AVATAR */}
            {!user && (
              <Link to="/login">
                <a className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white border border-black outline outline-white outline-2 transition-all font-semibold">
                  Login
                </a>
              </Link>
            )}

            {user && (
              <div className="flex items-center gap-4">
                
                {/* EMAIL FIRST LETTER AVATAR */}
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xl uppercase">
                  {user.email.charAt(0)}
                </div>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={logout}
                  className="text-white bg-green-600 px-3 py-2 rounded-lg hover:bg-green-500 font-semibold"
                >
                  Logout
                </button>
              </div>
            )}

          </div>
        </nav>
      </section>
    </header>
  )
}



