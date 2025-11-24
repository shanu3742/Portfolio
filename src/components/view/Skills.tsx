import React from 'react'
import PortfolioLayout from './PortfolioLayout'

const Skills = () => {
    return (
        <PortfolioLayout>
            <section id="skills" className="bg-gray-900 px-6 py-16 md:py-24 rounded-xl shadow-lg mx-auto max-w-6xl my-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-10 text-gray-100 border-b-2 border-blue-500 pb-2 inline-block">Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">


                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Javascript</span>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">TypeScript</span>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Node.js</span>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://vectorlogo.zone/logos/expressjs/expressjs-icon.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Express</span>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">React</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://angular.io/assets/images/logos/angular/angular.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Angular</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">D3.js</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://redux-toolkit.js.org/img/redux.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Redux Toolkit</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">RxJS</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.simpleicons.org/tailwindcss/38BDF8" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Tailwind CSS</span>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">MongoDB</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://logo.svgcdn.com/l/firebase.png" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">Firebase</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12 h-12" />
                            <span className="text-xl font-semibold text-gray-200">HTML/CSS</span>
                        </div>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    )
}

export default Skills
