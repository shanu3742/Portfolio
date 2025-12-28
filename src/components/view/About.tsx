import React from 'react'
import PortfolioLayout from './PortfolioLayout'

const About = () => {
    return (
        <PortfolioLayout>
            <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-12 bg-gray-950 rounded-xl shadow-lg" style={{ width: '1024px', height: '524px', overflowY: 'auto' }}>
                <div className="md:w-1/3 flex-shrink-0">
                    <img
                        src="/image/shanu.png"
                        alt="Kumar Shanu"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-[0_0_60px_#0f172a] ring-1 ring-gray-900/50"
                    />

                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="anotation-view-text-2xl font-bold mb-6 text-gray-100 border-b-2 border-blue-500 pb-2 inline-block">About Me</h3>
                    <p className="anotation-view-text-md leading-relaxed text-gray-300">
                        Hi, I’m <strong className="font-semibold text-blue-400">Kumar Shanu</strong>, a passionate
                        <strong className="font-semibold text-blue-400">Frontend Developer</strong> and
                        <strong className="font-semibold text-blue-400">Data Visualization Engineer</strong> with 4+ years of hands-on experience.
                        I specialize in building modern, scalable, and high-performance web applications using cutting-edge
                        technologies like <span className="font-medium">React</span>, <span className="font-medium">Angular</span>, and <span className="font-medium">D3.js</span>.

                    </p>
                </div>
            </section>
        </PortfolioLayout>
    )
}

export default About
