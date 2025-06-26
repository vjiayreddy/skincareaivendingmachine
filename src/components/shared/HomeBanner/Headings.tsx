const HeroHeadings = () => {
  return (
    <div className="w-full px-4 lg:w-5/12 mt-8 lg:mt-0"> 
      <div className="hero-content text-center lg:text-left">
        <h1 className="mb-5 text-3xl font-bold leading-snug text-gray-900 sm:text-5xl md:text-6xl sm:leading-[1.208]">
          <span className="block lg:inline">
            India’s First <span className="text-green-700">AI</span> Skincare
          </span>{" "}
          <span className="block text-green-700 xl:inline">
            Vending Machine
          </span>
        </h1>
        <p className="mb-9 max-w-[480px] text-base text-gray-700 text-lg">
          Personalised skincare, powered by AI — Get instant analysis, product
          recommendations, and purchase on the spot.
        </p>
        <ul className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full">
          <li>
            <a
              href="/#"
              className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center rounded-lg bg-green-700 px-7 py-3 text-center text-base font-medium text-white hover:bg-green-800 transition-colors duration-300"
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-center text-base font-medium text-green-700 border border-green-700 hover:bg-green-50 transition-colors duration-300"
            >
              Partner With Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeroHeadings;    
