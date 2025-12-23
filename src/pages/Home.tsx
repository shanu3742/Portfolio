import { IonContent, IonPage, } from '@ionic/react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls, Stats } from '@react-three/drei';
import './Home.css';
import Experience from '../Experience';
import { Suspense, useEffect } from 'react';
import { Physics } from '@react-three/rapier'
import SceneEnvironment from '../components/SceneEnvirnoment/SceneEnvirnoment';
import StatusBar from '../components/StatusBar/StatusBar';
import { createPortal } from 'react-dom';

const Home: React.FC = () => {




  return (
    <IonPage>

      <IonContent fullscreen >
        {/* 
          * 3d view scene 
          * color  tag  only used inside canvas 
          * ambientLight tag used to add envirnoment light like sun 
          * to add  envirnoment we creted custom sceneEnvirnoment component
        */}
        <Canvas camera={{ position: [0, 1, 4.5] }}  >
          <ambientLight intensity={0.5} />

          <directionalLight position={[5, 5, 5]} intensity={1} />

          <OrbitControls />
          <Suspense fallback={null}>
            <SceneEnvironment />
          </Suspense>
          {/* 
            * physics wrapper from rapier to add physics to the scene
           */}
          <Physics debug={false}>
            <Experience />
          </Physics>
          <Stats />

          {/* <Grid sectionSize={3}
            sectionColor={'purple'}
            sectionThickness={1}
            cellSize={1}
            cellColor={"#ffffff"}
            cellThickness={0.6}
            fadeDistance={50}
            fadeStrength={5}
            infiniteGrid /> */}


        </Canvas>
        {
          createPortal(<div className='status-bar-container'>
            <StatusBar />
          </div>, document.body)
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
