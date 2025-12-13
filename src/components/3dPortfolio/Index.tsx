import React, { useState } from "react";
import R3FExperience from "./Experience/Experience"
import R3FIntro from "./Intro/Intro"
const R3Context = React.createContext(null);
const R3FPortfolio = () => {
    const [activeSection, setActiveSection] = useState('intro');
    return <R3Context.Provider value={{ activeSection, setActiveSection }}>
        <R3FIntro />
        <R3FExperience />
    </R3Context.Provider>
}

export default R3FPortfolio

const useR3FPortfolio = () => {
    const context = React.useContext(R3Context);
    if (!context) {
        throw new Error("useR3FPortfolio must be used within a R3FPortfolioProvider");
    }
    return context;
};
export { useR3FPortfolio };