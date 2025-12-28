import R3FExperience from "./Experience/Experience"
import R3FIntro from "./Intro/Intro"
import R3FSkill from "./Skill/Skill";
import R3FProjects from "./Projects/Projects";
import R3FContact from "./Contact/Contact";
import { R3ContextProvider } from "./R3Context";

const R3FPortfolio = () => {

    return <>
        <R3ContextProvider>
            <R3FIntro />
            <R3FExperience />
            <R3FSkill />
            <R3FProjects />
            <R3FContact />
        </R3ContextProvider>
    </>

}

export default R3FPortfolio

