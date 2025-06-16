import { IonContent, IonPage, } from '@ionic/react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import './Home.css';
import Experience from '../Experience';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen >
        <Canvas camera={{ position: [0, 1, 4.5] }}  >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls />
          <Experience />
          <Grid sectionSize={3}
            sectionColor={'purple'}
            sectionThickness={1}
            cellSize={1}
            cellColor={"#ffffff"}
            cellThickness={0.6}
            fadeDistance={50}
            fadeStrength={5}
            infiniteGrid />


        </Canvas>
      </IonContent>
    </IonPage>
  );
};

export default Home;
