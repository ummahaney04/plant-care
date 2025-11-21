// import React, { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   console.log("Email:", email, "Password:", password);
    
//   // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black px-4">
//       <div className="max-w-md w-full bg-[#141414] rounded-2xl p-8 
//                       shadow-[0_4px_20px_rgba(255,255,255,0.3)] 
//                       hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] 
//                       transition-shadow duration-300">
//         <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

//         <form /*onSubmit={handleLogin}*/ className="space-y-5">
//           <div>
//             <label className="text-gray-300">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-gray-300">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-gray-400 text-center mt-5">
//           Don't have an account?{" "}
//           <a href="#" className="text-green-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }






// import React, { useState } from "react";
// import { useUser } from "../components/UserContext";
// import { useNavigate } from "react-router-dom";




// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useUser();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;

//     login(email);      // Save user
//     navigate("/");     // redirect home
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black px-4">
//       <div className="max-w-md w-full bg-[#141414] rounded-2xl p-8 shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
//         <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label className="text-gray-300">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-gray-300">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-gray-400 text-center mt-5">
//           Don't have an account?{" "}
//           <a href="#" className="text-green-500 hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useUser } from "./context/UserContext"; // context
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();  // context login
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // --- STATIC CREDENTIALS ---
    const validEmail = "test@example.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      login(email);        // context e user save
      navigate("/");       // home redirect
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-[#141414] rounded-2xl p-8 
                      shadow-[0_4px_20px_rgba(255,255,255,0.3)] 
                      hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] 
                      transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-5">
          Don't have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
