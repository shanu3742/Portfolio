import { createContext, useContext, useState } from "react";

const R3Context = createContext(null);
const R3ContextProvider = ({ children }: any) => {
    const [activeSection, setActiveSection] = useState('');
    return <R3Context.Provider value={{ activeSection, setActiveSection } as any}>
        {children}
    </R3Context.Provider>

}

const useR3FPortfolio = () => {
    const context = useContext(R3Context);
    if (!context) {
        throw new Error("useR3FPortfolio must be used within a R3FPortfolioProvider");
    }
    return context;
};
export { R3ContextProvider, useR3FPortfolio };