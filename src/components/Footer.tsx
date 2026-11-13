
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="font-orbitron text-xl font-semibold lowercase">
              evryware
            </div>
            <div className="font-fira font-normal text-[11px] leading-snug tracking-wider text-[#D1D5DB] mt-1">
              Advisory · Development · Integration · Managed Services
            </div>
          </div>
          <div className="text-sm opacity-75">
            © {new Date().getFullYear()} Evryware Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
