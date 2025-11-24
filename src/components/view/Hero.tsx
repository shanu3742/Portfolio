const Hero = () => {
    return   <div className="bg-gray-950 text-gray-100 font-inter transition-colors duration-300">

  
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 lg:px-12 shadow-lg bg-gray-900/90 backdrop-blur-md rounded-b-xl">
      <h1 className="text-3xl font-extrabold text-blue-400">Kumar Shanu</h1>
      <div className="flex items-center gap-6">
        <nav className="space-x-6 hidden md:block">
          <a  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">About</a>
          <a  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Skills</a>
          <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Projects</a>
          <a  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Experience</a>
          <a  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Contact</a>
        </nav>
        
      </div>
    </header>

    <section id="hero" className="relative text-center py-20 md:py-28 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden rounded-b-xl shadow-inner">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none">
          <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="0.5" className="text-gray-700"></circle>
          <circle cx="80" cy="70" r="20" stroke="currentColor" stroke-width="0.5" className="text-gray-600"></circle>
          <rect x="50" y="10" width="10" height="10" stroke="currentColor" stroke-width="0.5" className="text-gray-700"></rect>
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in-up">
          Frontend Developer <br className="md:hidden"/> & Data Viz Engineer
        </h2>
        <p className="max-w-xl mx-auto text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          Building intuitive UIs and data-driven apps with modern web technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4 animate-scale-in">
          <a href="mailto:kumarshanu.dev@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 transform">
            Hire Me
          </a>
         <a href="./shanu.pdf" download
           className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-900 hover:text-white hover:scale-105 transition-all duration-300 transform">
           Download CV
          </a>
        </div>
      </div>
    </section>

  
  
    <footer className="text-center py-6 bg-gray-800 text-gray-300 rounded-t-xl shadow-inner">
      <p>&copy; 2025 Kumar Shanu. Built with ❤️ and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tailwind CSS</a>.</p>
    </footer>
  </div>
}


export default Hero