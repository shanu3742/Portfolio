import React, { createContext } from 'react'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import Experience from './Experience'
import { createPortal } from 'react-dom'
//  ['hero', 'about', 'contact', 'experience', 'project', 'skills'];
const pageContext = createContext(null)
const PageView = ({ pageName }: any) => {
    const [pageNameState, setPageNameState] = React.useState(() => pageName);
    const pageContextValue = {
        pageName: pageNameState,
        setPageName: setPageNameState
    }
    return <pageContext.Provider value={pageContextValue as any} >
        <Page />
        {createPortal(
            <PageInterface />,
            document.body
        )}

    </pageContext.Provider>

}

export default PageView

const Page = () => {
    const { pageName } = usePageContext() as any
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
    const { pageName, setPageName } = usePageContext() as any

    return (
        // The container is now semi-transparent with a subtle backdrop blur
        <div className='fixed top-4 right-4 z-50 flex flex-col p-2 rounded-lg space-y-1 backdrop-blur-sm bg-black/30'>

            <PageButton name="hero" current={pageName} setPage={setPageName}>Hero</PageButton>
            <PageButton name="about" current={pageName} setPage={setPageName}>About</PageButton>
            <PageButton name="skills" current={pageName} setPage={setPageName}>Skills</PageButton>
            <PageButton name="projects" current={pageName} setPage={setPageName}>Projects</PageButton>
            <PageButton name="experience" current={pageName} setPage={setPageName}>Experience</PageButton>
            <PageButton name="contact" current={pageName} setPage={setPageName}>Contact</PageButton>

        </div>
    )
}

// Helper component for cleaner button styling and logic
const PageButton = ({ name, current, setPage, children }: any) => {
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
