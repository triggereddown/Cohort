// import React from "react";
// import { Instagram, Linkedin, Twitter } from "lucide-react";
// import star from "../../assets/star.webp";

// const Footer = () => {
//   return (
//     <div id="footer" className=" px-6 pb-6">
//       {" "}
//       <footer className="border border-gray-200 px-8 py-12 mt-20 rounded-[2.5rem] text-center max-w-7xl mx-auto">
//         {/* Top Tagline */}
//         <div className="text-brand-purple font-medium mb-6">
//           <h3>Open the door to forging your Pomodoro Timer</h3>
//         </div>

//         <div className="text-3xl md:text-6xl font-medium leading-tight text-gray-900 mb-8">
//           <span>
//             <img
//               src={star}
//               alt="star"
//               className="w-10 inline-block align-top mr-2"
//             />
//           </span>
//           Embark on a Transformative Journey <br className="hidden md:block" />
//           Shaping your{" "}
//           <span className="bg-brand-yellow px-6 py-1 rounded-lg transform -rotate-2 inline-block text-brand-purple font-medium shadow-sm">
//             Mindset
//           </span>
//           and Focus <br className="hidden md:block" />
//           Through Our Dedicated Partnership
//         </div>

//         <div className="text-gray-500 max-w-2xl mx-auto mb-16">
//           <p>
//             Join us in revolutionizing productivity and achieving your goals
//             with precision and clarity.
//           </p>
//         </div>

//         <div className="w-full h-px bg-gray-200 my-8"></div>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
//           <div className="left">
//             <p>Veni Vidi Vici, 25, I came I saw I conqured</p>
//           </div>

//           <div className="links flex gap-6">
//             <a href="#" className="hover:text-brand-purple transition">
//               <Twitter size={20} />
//             </a>
//             <a href="#" className="hover:text-brand-purple transition">
//               <Linkedin size={20} />
//             </a>
//             <a href="#" className="hover:text-brand-purple transition">
//               <Instagram size={20} />
//             </a>
//           </div>

//           <div className="right flex gap-6">
//             <p className="cursor-pointer hover:text-black">Privacy Policy</p>
//             <p>© 2025 TrigguBrand</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import star from "../../assets/star.webp";

const Footer = () => {
  return (
    <div id="footer" className="px-4 md:px-6 pb-6">
      <footer className="border border-gray-200 px-4 py-8 md:px-8 md:py-12 mt-12 md:mt-20 rounded-[2.5rem] text-center max-w-7xl mx-auto">
        <div className="text-brand-purple font-medium mb-6">
          <h3>Open the door to forging your Pomodoro Timer</h3>
        </div>

        <div className="text-3xl md:text-6xl font-medium leading-tight text-gray-900 mb-8">
          <span>
            <img
              src={star}
              alt="star"
              className="w-8 md:w-10 inline-block align-top mr-2" // Slightly smaller star on mobile
            />
          </span>
          Embark on a Transformative Journey <br className="hidden md:block" />
          Shaping your{" "}
          <span className="bg-brand-yellow px-4 md:px-6 py-1 rounded-lg transform -rotate-2 inline-block text-brand-purple font-medium shadow-sm">
            Mindset
          </span>{" "}
          and Focus <br className="hidden md:block" />
          Through Our Dedicated Partnership
        </div>

        <div className="text-gray-500 max-w-2xl mx-auto mb-10 md:mb-16 px-2">
          <p>
            Join us in revolutionizing productivity and achieving your goals
            with precision and clarity.
          </p>
        </div>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="left text-center md:text-left">
            <p>Veni Vidi Vici, 25, I came I saw I conquered</p>
          </div>

          <div className="links flex gap-6">
            <a href="#" className="hover:text-brand-purple transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-brand-purple transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-brand-purple transition">
              <Instagram size={20} />
            </a>
          </div>

          <div className="right flex gap-6">
            <p className="cursor-pointer hover:text-black">Privacy Policy</p>
            <p>© 2025 TrigguBrand</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
