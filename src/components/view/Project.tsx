import React from 'react'
import PortfolioLayout from './PortfolioLayout'

const Project = () => {
    return (
        <PortfolioLayout>
            <section id="projects" className="px-6  max-w-6xl mx-auto rounded-xl my-12" style={{ width: '1024px', height: '524px', overflowY: 'auto' }}>
                <h3 className="anotation-view-text-2xl font-bold mb-10 text-center text-gray-100 border-b-2 border-blue-500 pb-2 inline-block">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <h4 className="anotation-view-text-xl font-bold mb-3 text-blue-400">Customer Journey Graph</h4>
                        <p className="anotation-view-text-sm text-gray-300 mb-4">
                            A sophisticated network graph visualization to effectively trace and analyze complex customer actions and pathways.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://customer-journey-hlrm.onrender.com/app/graph/v1/getJourney" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Project
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/shanu3742/customer-journey" className="inline-flex items-center px-5 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Code
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 20L2 16l4-4"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <h4 className="anotation-view-text-xl font-bold mb-3 text-blue-400">Marble Race</h4>
                        <p className="text-gray-300 mb-4 anotation-view-text-sm">
                            Marble Race Game is a 3D racing simulation built with React, Ionic, and Three.js.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://tubular-haupia-9a4eca.netlify.app/app/roll-the-ball" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Project
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                            <a href="https://github.com/shanu3742/MARBLE-RACE" className="inline-flex items-center px-5 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Code
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 20L2 16l4-4"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <h4 className="anotation-view-text-xl font-bold mb-3 text-blue-400">Chat App</h4>
                        <p className="text-gray-300 mb-4 anotation-view-text-sm">
                            A real-time messaging application leveraging Socket.io for instant communication and Firebase for backend services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/shanu3742/chat-app" className="inline-flex items-center px-5 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Code
                                <svg className="ml-2 w-4 h-4 anotation-view-text-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 20L2 16l4-4"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <h4 className="anotation-view-text-xl font-bold mb-3 text-blue-400">Curry Company Web App</h4>
                        <p className="text-gray-300 mb-4 anotation-view-text-sm">
                            A web application for managing cooks and ingredients, developed with D3.js for powerful data visualization and Angular for the frontend.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://curry-company.eccenca.com/home" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md anotation-view-text-xxsm">
                                View Project
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </PortfolioLayout >
    )
}

export default Project
