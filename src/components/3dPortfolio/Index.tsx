import R3FExperience from "./Experience/Experience"
import R3FIntro from "./Intro/Intro"
import R3FSkill from "./Skill/Skill";
import R3FProjects from "./Projects/Projects";
import R3FContact from "./Contact/Contact";
import { Arrow } from "../Arrow/Arrow";
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
        {/*toward left  direction  from center*/}
        <Arrow position={[-3, 0.2, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-8, 0.2, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-13, 0.3, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-18, 0.5, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-22, 0.5, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-25, 0.5, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-27, 0.5, 1]} rotation={[Math.PI / 2, 0, Math.PI / 3]} scale={3} color="yellow" />
        <Arrow position={[-31, 0.5, 3]} rotation={[Math.PI / 2, 0, Math.PI / 3]} scale={3} color="yellow" />
        <Arrow position={[-30, 0.7, -1.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[-35, 0.8, -3]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="yellow" />


        {/*toward right  direction  from center*/}

        <Arrow position={[5, 0.2, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="yellow" />

        <Arrow position={[12, 0.2, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="yellow" />
        <Arrow position={[5, 0.1, -2]} rotation={[Math.PI / 2, Math.PI, Math.PI * 0.7]} scale={3} color="yellow" />
        <Arrow position={[8, 0.1, -5]} rotation={[Math.PI / 2, Math.PI, Math.PI * 0.7]} scale={3} color="yellow" />
        <Arrow position={[18, 0.7, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="yellow" />
    </>

}

export default R3FPortfolio

