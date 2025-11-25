import React from 'react'
import PortfolioLayout from './PortfolioLayout'

const Experience = () => {
    return (
        <PortfolioLayout>
            <section id="experience" className="bg-gray-900 px-6 py-16 md:py-24 rounded-xl shadow-lg mx-auto max-w-6xl my-12" style={{width:'1024px',height:'1024px'}}>
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-10 text-gray-100 border-b-2 border-blue-500 pb-2 inline-block">Experience</h3>
                    <div className="space-y-8 text-left relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gray-700 before:rounded-full md:before:left-0 md:before:translate-x-0">


                        <div className="relative pl-8 md:pl-16 group min-h-[300px]">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0 transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300 md:-left-2 md:translate-x-0"></div>
                            <div className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 h-full">



                                <div className="absolute inset-0 bg-gray-950/70 z-10 rounded-lg"></div>

                                <div className="relative z-20">
                                    <h4 className="text-2xl font-bold text-blue-400 mb-2">StockEdge</h4>
                                    <p className="text-gray-400 text-sm mb-3 ">Nov 2022 - Present</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 anotation-view-text-normal">
                                        <li>Improved performance of legacy Angular codebase, resulting in a <strong>20% reduction in load time</strong> for key modules.</li>
                                        <li>Developed and integrated advanced financial charting components using D3.js, providing users with deeper analytical insights.</li>
                                        <li>Collaborated with backend teams to optimize API interactions and data fetching for enhanced responsiveness.</li>
                                    </ul>
                                    <a href="https://web.stockedge.com/app/markets" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md">
                                        Visit Website
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="relative pl-8 md:pl-16 group min-h-[300px]">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0 transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300 md:-left-2 md:translate-x-0"></div>
                            <div className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 h-full">

                                <iframe src="https://curry-company.eccenca.com/home" className="absolute inset-0 w-full h-full border-none z-0 opacity-10 pointer-events-none rounded-lg"></iframe>

                                <div className="absolute inset-0 bg-gray-950/70 z-10 rounded-lg"></div>

                                <div className="relative z-20">
                                    <h4 className="text-2xl font-bold text-blue-400 mb-2">Aarth Software</h4>
                                    <p className="text-gray-400 text-sm mb-3">Jun 2021 - Nov 2022</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 anotation-view-text-normal">
                                        <li>Led the frontend development team for the "Curry Company" web application, overseeing UI/UX implementation.</li>
                                        <li>Designed and built a dynamic SPARQL query builder and various visual data tools using D3.js for complex data exploration.</li>
                                        <li>Implemented responsive designs and ensured cross-browser compatibility for all web applications.</li>
                                    </ul>
                                    <a href="https://curry-company.eccenca.com/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md">
                                        Visit Website
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </PortfolioLayout>
    )
}

export default Experience
