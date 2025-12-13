import PortfolioLayout from "./PortfolioLayout"

const Hero = () => {
  return <PortfolioLayout>
    <section id="hero" className="anotation-view-text-xl relative text-center py-20 md:py-28 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden rounded-b-xl shadow-inner" style={{ width: '1024px', height: '524px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none">
          <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="0.5" className="text-gray-700"></circle>
          <circle cx="80" cy="70" r="20" stroke="currentColor" stroke-width="0.5" className="text-gray-600"></circle>
          <rect x="50" y="10" width="10" height="10" stroke="currentColor" stroke-width="0.5" className="text-gray-700"></rect>
        </svg>
      </div>
      <div className="relative z-10">
        <p className="anotation-view-text-2xl">
          Frontend Developer <br className="md:hidden" /> & Data Viz Engineer
        </p>
        <p className="max-w-xl mx-auto mb-8 opacity-90 animate-fade-in">
          Building intuitive UIs and data-driven apps with modern web technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4 animate-scale-in">
          <a href="mailto:kumarshanu.dev@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 transform">
            Hire Me
          </a>
          <a href="/portfolio/shanu.pdf" download
            className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-900 hover:text-white hover:scale-105 transition-all duration-300 transform">
            Download CV
          </a>
        </div>
      </div>
    </section>
  </PortfolioLayout>
}


export default Hero