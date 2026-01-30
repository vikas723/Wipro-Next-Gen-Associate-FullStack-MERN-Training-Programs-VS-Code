import ActionButton from "./ActionButton";

function Footer() {
  return (
    <footer className="mt-6 px-5 py-4 bg-neutral-900 text-amber-50 flex justify-between items-center">
      <p>© 2026 Royal Spice Hotel</p>
      <ActionButton
        title="Open in Google Maps"
        link="https://www.google.com/maps"
      />
    </footer>
  );
}

export default Footer;
