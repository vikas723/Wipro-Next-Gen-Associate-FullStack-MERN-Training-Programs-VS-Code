

// const Footer = () => {
//   return (
//     <footer
//       id="contact"
//       className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-slate-200 py-10 px-10"
//     >
//       <div className="max-w-6l mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

//         <div>
//           <h4 className="text-white text-xl font-bold mb-4">
//             Aura Perfumes
//           </h4>
//           <p className="text-sm max-w-sm">
//             Signature scents crafted with elegance and inspired by timeless luxury.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-white font-bold mb-4">
//             Contact Us
//           </h4>
//           <p>Email: support@auraperfumes.com</p>
//           <p className="mt-2">Phone: +91 98765 43210</p>
//           <p className="mt-2">Location: Tamil Nadu, India</p>
//         </div>

//       </div>

//       <div className="text-center text-sm mt-10 text-purple-200">
//         © 2026 Aura Perfumes. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// const Footer = () => {
//   return (
//     <footer
//       id="contact"
//       className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-slate-200 py-10 px-10"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

//         <div>
//           <h4 className="text-white text-xl font-bold mb-4">
//             Aura Perfumes
//           </h4>
//           <p className="text-sm max-w-sm">
//             Signature scents crafted with elegance and inspired by timeless luxury.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-white font-bold mb-4">
//             Contact Us
//           </h4>
//           <p>Email: support@auraperfumes.com</p>
//           <p className="mt-2">Phone: +91 98765 43210</p>

//           <p className="mt-2">
//             Location:&nbsp;
//             <a
//               href="https://maps.app.goo.gl/77HwzziHrQgUkP8B8"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-purple-200 underline hover:text-white transition"
//             >
//               Tamil Nadu, India
//             </a>
//           </p>
//         </div>

//       </div>

//       <div className="text-center text-sm mt-10 text-purple-lue-200">
//         © 2026 Aura Perfumes. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-slate-200 py-10 px-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h4 className="text-white text-xl font-bold mb-4">
            Aura Perfumes
          </h4>
          <p className="text-sm max-w-sm">
            Signature scents crafted with elegance and inspired by timeless luxury.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4">
            Contact Us
          </h4>
          <p>Email: support@auraperfumes.com</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">Tamil Nadu, India</p>
        </div>

        {/* Map Embed */}
        <div>
          <h4 className="text-white font-bold mb-4">
            Store Location
          </h4>

          <div className="rounded-lg overflow-hidden border border-purple-700">
            <iframe
              title="Aura Perfumes Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.429723694901!2d76.9369973745207!3d11.067291953762307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61831b9bd07%3A0x4b25358d8db2975b!2s5th%20St%2C%20VKL%20Nagar%2C%20Thudiyalur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641034!5e1!3m2!1sen!2sin!4v1769185994308!5m2!1sen!2sin"
              width="100%"
              height="180"
              allowfullscreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            />
          </div>
        </div>

      </div>

      <div className="text-center text-sm mt-10 text-purple-200">
        © 2026 Aura Perfumes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
