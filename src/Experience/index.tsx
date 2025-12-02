import { Suspense } from "react";
import BilBoard from "../components/BilBoard/BilBoard";
import Garden from "../components/Garden/Garden";
import Ground from "../components/Ground/Ground";
import Player from "../components/Player/Player";
import Village from "../components/Village/Village";
import WorkingDesk from "../components/WorkingDesk";


const Experience = () => {

  return <>
    <WorkingDesk />
    <BilBoard />
    <Suspense fallback={null}>
      <Garden />
    </Suspense>
     <Suspense fallback={null}>
        <Player />
     </Suspense>
      <Suspense fallback={null}>
          <Village />
      </Suspense>
    <Ground />


  </>;
};

export default Experience;
