import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import './app.css'
import { useMemo } from 'react';
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei';
setupIonicReact();
export enum Controls {
  forWard = 'forward',
  backWard = 'backward',
  leftWard = 'leftward',
  rightWard = 'rightward',
  // jump = 'jump',
}

const App: React.FC = () => {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forWard, keys: ['ArrowUp'] },
    { name: Controls.backWard, keys: ['ArrowDown'] },
    { name: Controls.leftWard, keys: ['ArrowLeft'] },
    { name: Controls.rightWard, keys: ['ArrowRight'] },
    // { name: Controls.jump, keys: ['Space'] },
  ], [])
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <KeyboardControls map={map}>
              <Home />
            </KeyboardControls>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
