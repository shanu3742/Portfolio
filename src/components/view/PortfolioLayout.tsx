import React from 'react'

const PortfolioLayout = ({ children }) => {
    return <div className="bg-gray-950 text-gray-100 font-inter transition-colors duration-300 h-full w-full">


        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 lg:px-12 shadow-lg bg-gray-900/90 backdrop-blur-md rounded-b-xl">
            <h1 className="text-3xl font-extrabold text-blue-400">Kumar Shanu</h1>
            <div className="flex items-center gap-6">
                <nav className="space-x-6 hidden md:block">
                    <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">About</a>
                    <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Skills</a>
                    <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Projects</a>
                    <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Experience</a>
                    <a className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 rounded-md p-2">Contact</a>
                </nav>

            </div>
        </header>



        {
            children
        }

        <footer className="text-center py-6 bg-gray-800 text-gray-300 rounded-t-xl shadow-inner">
            <p>&copy; 2025 Kumar Shanu. Built with ❤️ and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tailwind CSS</a>.</p>
        </footer>
    </div>
}

export default PortfolioLayout
