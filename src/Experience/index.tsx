import { Suspense } from "react";
import BilBoard from "../components/BilBoard/BilBoard";
import Garden from "../components/Garden/Garden";
import Ground from "../components/Ground/Ground";
import Player from "../components/Player/Player";
import Village from "../components/Village/Village";
import Boundries from "../components/Boundries/Boundries";
import Button from "../components/Button/Button";



const Experience = () => {

  return <>
    {/* <WorkingDesk /> */}

    <Suspense fallback={null}>
      <Garden />
    </Suspense>
    <Suspense fallback={null}>
      <Player />
    </Suspense>
    <Suspense fallback={null}>
      <Village />
    </Suspense>
    <BilBoard />
    <Ground />
    <Button text={'Intro'} position={[0,0.1,0]} onClick={() => console.log('shnau')} />
    <Boundries />

  </>;
};

export default Experience;
