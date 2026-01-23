

const Header = () => {
  return (
    <header
      id="home"
      className="pt-20 pb-10 px-10 bg-linear-to-b from-purple-50 to-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-purple-700">Luxury Fragrances</span> <br />
          <span className="text-purple-700">For Every Mood.</span>
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-4xl">
          Experience premium perfumes crafted to leave a lasting impression.
        </p>

      </div>
    </header>
  );
};

export default Header;
