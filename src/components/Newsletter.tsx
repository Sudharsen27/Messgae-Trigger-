// import { useState } from "react";

// const Newsletter = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Email submitted:", email);
//     setEmail(""); // Clear input after submission
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-xl max-w-md mx-auto transition-transform hover:scale-105 duration-300">
//       <h2 className="text-2xl font-extrabold mb-4 text-gray-800">Stay Updated!</h2>
//       <p className="text-gray-600 text-center mb-4">
//         Join our newsletter to get the latest updates and offers.
//       </p>
//       <form onSubmit={handleSubmit} className="w-full">
//         <div className="flex flex-col sm:flex-row gap-3">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             aria-label="Email address"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105 focus:ring-4 focus:ring-blue-300"
//           >
//             Subscribe
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Newsletter;

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  // Add the correct type for the event parameter
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-xl max-w-md mx-auto transition-transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800">Stay Updated!</h2>
      <p className="text-gray-600 text-center mb-4">
        Join our newsletter to get the latest updates and offers.
      </p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105 focus:ring-4 focus:ring-blue-300"
          >
            Subscribeed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;