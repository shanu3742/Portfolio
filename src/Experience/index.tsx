import { Suspense } from "react";
import BilBoard from "../components/BilBoard/BilBoard";
import Garden from "../components/Garden/Garden";
import Ground from "../components/Ground/Ground";
import Player from "../components/Player/Player";
import Village from "../components/Village/Village";
import Boundries from "../components/Boundries/Boundries";
import R3FPortfolio from "../components/3dPortfolio/Index";
import NavigationPath from "../components/NavigationPath/NavigationPath";
import ResourceLoaderInfo from "../components/ResourceLoaderInfo/ResourceLoaderInfo";
import { createPortal } from "react-dom";
import { Html } from "@react-three/drei";



const Experience = () => {

  return <>
    <Html>
      {
        createPortal(<ResourceLoaderInfo />, document.body)
      }
    </Html>
    <Suspense fallback={null}>
      <Ground />
      <Village />
      <Garden />
      <BilBoard />
      <NavigationPath />
      <Boundries />
      <Player />
      <R3FPortfolio />
    </Suspense>


  </>;
};

export default Experience;
