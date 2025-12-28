import React, { createContext } from 'react'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import Experience from './Experience'
import { createPortal } from 'react-dom'
//  ['hero', 'about', 'contact', 'experience', 'project', 'skills'];
const pageContext = createContext()
const PageView = ({ pageName }) => {
    const [pageNameState, setPageNameState] = React.useState(() => pageName);
    const pageContextValue = {
        pageName: pageNameState,
        setPageName: setPageNameState
    }
    return <pageContext.Provider value={pageContextValue}>
        <Page />
        {createPortal(
            <PageInterface />,
            document.body
        )}

    </pageContext.Provider>

}

export default PageView

const Page = () => {
    const { pageName } = usePageContext()
    if (pageName === 'about') {
        return <About />
    }
    else if (pageName === 'hero') {
        return <Hero />
    }
    else if (pageName === 'contact') {
        return <Contact />
    }
    else if (pageName === 'experience') {
        return <Experience />
    }
    else if (pageName === 'projects') {
        return <Project />
    }
    else if (pageName === 'skills') {
        return <Skills />
    } else {
        return <Hero />
    }
}



export const PageInterface = () => {
    const { pageName, setPageName } = usePageContext()

    return (
        // The container is now semi-transparent with a subtle backdrop blur
        <>
            <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
                {/* Label Section - Integrated into the top */}
                <div className="pr-2 mb-1 text-right">
                    <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400/80">
                        Billboard
                    </span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                        Navigation
                    </span>
                </div>

                {/* Main Menu Box */}
                <div className="billboard-navigation flex flex-col w-32 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40 shadow-2xl">
                    <PageButton name="hero" current={pageName} setPage={setPageName}>Hero</PageButton>
                    <PageButton name="about" current={pageName} setPage={setPageName}>About</PageButton>
                    <PageButton name="skills" current={pageName} setPage={setPageName}>Skills</PageButton>
                    <PageButton name="projects" current={pageName} setPage={setPageName}>Projects</PageButton>
                    <PageButton name="experience" current={pageName} setPage={setPageName}>Experience</PageButton>
                    <PageButton name="contact" current={pageName} setPage={setPageName}>Contact</PageButton>
                </div>
            </div>
        </>

    )
}

// Helper component for cleaner button styling and logic
const PageButton = ({ name, current, setPage, children }) => {
    // Determine the styles based on the active state
    const isActive = name === current;

    // Modern button styling: text-based, subtle hover, clear active state
    const baseClasses = 'px-4 py-1 text-right text-sm font-semibold transition-colors duration-200';
    const activeClasses = isActive
        ? 'text-yellow-400 bg-white/10 rounded-md shadow-md' // Brighter active color that matches the scene's warm tones
        : 'text-gray-100 hover:text-yellow-300 hover:bg-white/5 rounded-md';

    return (
        <button
            className={`${baseClasses} ${activeClasses}`}
            onClick={() => setPage(name)}
        >
            {children}
        </button>
    );
}

// NOTE: Remember to define or import the usePageContext() hook.
export const usePageContext = () => React.useContext(pageContext)
