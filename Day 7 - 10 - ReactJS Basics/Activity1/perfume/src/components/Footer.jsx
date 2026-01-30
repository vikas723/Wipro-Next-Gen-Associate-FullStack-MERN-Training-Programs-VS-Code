

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-slate-200 py-10 px-10"
    >
      <div className="max-w-6l mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <h4 className="text-white text-xl font-bold mb-4">
            Aura Perfumes
          </h4>
          <p className="text-sm max-w-sm">
            Signature scents crafted with elegance and inspired by timeless luxury.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">
            Contact Us
          </h4>
          <p>Email: support@auraperfumes.com</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">Location: Tamil Nadu, India</p>
        </div>

      </div>

      <div className="text-center text-sm mt-10 text-purple-200">
        © 2026 Aura Perfumes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
