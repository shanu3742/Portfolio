import { IonContent, IonPage, } from '@ionic/react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls, Stats } from '@react-three/drei';
import './Home.css';
import Experience from '../Experience';
import { useEffect } from 'react';
import { Physics } from '@react-three/rapier'
import SceneEnvironment from '../components/SceneEnvirnoment/SceneEnvirnoment';

const Home: React.FC = () => {
 const welecomeMessage = `hellow there it's your friend Kumar  a friendly developer next to your door `
 
 const welecomeSpeech = () => {
  const speech = new SpeechSynthesisUtterance(welecomeMessage);
  speech.lang = "en-US";   // set language
  speech.rate = 1;         // speed
  speech.pitch = 1;        // tone

  window.speechSynthesis.speak(speech);
 }

 /**
  * one time speech
  */
 useEffect(() => {
   setTimeout(() => {
    welecomeSpeech()
   },5000)
 },[])

  return (
    <IonPage>

      <IonContent fullscreen >
        <Canvas camera={{ position: [0, 1, 4.5] }}  >
         <color args={['#252731']} attach='background' />
          <ambientLight intensity={0.5} />

          <directionalLight position={[5, 5, 5]} intensity={1} />
         
          <OrbitControls />
          <SceneEnvironment />
          <Physics debug={false}>
            <Experience />
          </Physics>
          <Stats />
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
