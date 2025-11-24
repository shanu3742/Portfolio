import React from 'react'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import Experience from './Experience'
//  ['hero', 'about', 'contact', 'experience', 'project', 'skills'];
const PageView = ({ pageName }) => {

    console.log('pageName:fromcomp', pageName)
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

export default PageView
