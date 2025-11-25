import React from 'react'
import PortfolioLayout from './PortfolioLayout'

const Contact = () => {
    return (
        <PortfolioLayout>
            <section id="contact" className="px-6 py-16 md:py-24 max-w-6xl mx-auto rounded-xl my-12 text-center" style={{width:'1024px',height:'1024px'}}>
                <h3 className="anotation-view-text-2xl font-bold mb-10 text-gray-100 border-b-2 border-blue-500 pb-2 inline-block">Get In Touch</h3>
                <p className="anotation-view-text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat? Feel free to reach out to me through any of the channels below. I'm always open to new opportunities and collaborations!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    <a href="mailto:kumarshanu.dev@gmail.com" className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <svg className="w-12 h-12 text-blue-400 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H8a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                        <span className="font-semibold text-lg text-gray-200 anotation-view-text-xl">Email Me</span>
                        <span className="text-sm text-gray-400 anotation-view-text-xxsm">kumarshanu.dev@gmail.com</span>
                    </a>

                    <a href="tel:+918660308645" className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <svg className="w-12 h-12 text-green-400 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.293a1 1 0 01.707.293l3.586 3.586a1 1 0 010 1.414L9.586 12A8 8 0 0012 14.414l2.707-2.707a1 1 0 011.414 0l3.586 3.586a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10.292V5z" /></svg>
                        <span className="font-semibold text-lg text-gray-200 anotation-view-text-xl">Call Me</span>
                        <span className="text-sm text-gray-400 anotation-view-text-xsm">+91-8660308645</span>
                    </a>

                    <a href="https://github.com/shanu3742" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <svg className="w-12 h-12 text-gray-100 mb-3" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.343 1.088 2.91.831.091-.645.35-1.088.636-1.339-2.22-.253-4.555-1.115-4.555-4.945 0-1.09.39-1.98.966-2.678-.09-.253-.418-1.27.096-2.651 0 0 .79-.268 2.585 1.026A8.55 8.55 0 0112 5.673c.895 0 1.782.121 2.628.361 1.795-1.294 2.583-1.026 2.583-1.026.516 1.382.19 2.398.099 2.651.577.698.965 1.587.965 2.678 0 3.83-2.339 4.685-4.566 4.935.359.308.678.915.678 1.846 0 1.335-.012 2.413-.012 2.747 0 .267.18.579.688.481C19.14 20.163 22 16.416 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path></svg>
                        <span className="font-semibold text-lg text-gray-200 anotation-view-text-xl">GitHub</span>
                        <span className="text-sm text-gray-400 anotation-view-text-xsm">shanu3742</span>
                    </a>

                    <a href="https://www.linkedin.com/in/kumar-shanu-95855b170/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
                        <svg className="w-12 h-12 text-blue-500 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4zM6 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
                        <span className="font-semibold text-lg text-gray-200 anotation-view-text-xl">LinkedIn</span>
                        <span className="text-sm text-gray-400 anotation-view-text-xsm">Kumar Shanu</span>
                    </a>
                </div>
                <div className="fixed bottom-0 right-1 flex">
                    <div className="text-4xl" >🛜</div>
                    <div className="text-4xl" >📶</div>
                </div>
            </section>
        </PortfolioLayout>
    )
}

export default Contact
