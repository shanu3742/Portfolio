// Controller.jsx
import { IonIcon } from '@ionic/react'
import { caretBackOutline, caretDownOutline, caretForwardOutline, caretUpOutline } from 'ionicons/icons'
import './playerController.css'

const Controller = ({ onMove }) => {
  const handleAction = (direction, active) => {
    onMove(direction, active)
  }

 

  return (
    <div className='btn-controller-container'>
      <div />
      <button 
        className='btn'
        onPointerDown={() => handleAction('forward', true)} 
        onPointerUp={() => handleAction('forward', false)}
      >
            <IonIcon icon={caretUpOutline} />
      </button>
      <div />
      
      <button 
        className='btn'
        onPointerDown={() => handleAction('leftward', true)} 
        onPointerUp={() => handleAction('leftward', false)}
      >
         <IonIcon icon={caretBackOutline} />
      </button>
      <button 
        className='btn'
        style={{borderRadius:'50%'}}
      
      >
        
      </button>
      <button 
        className='btn'
        onPointerDown={() => handleAction('rightward', true)} 
        onPointerUp={() => handleAction('rightward', false)}
      >
         <IonIcon icon={caretForwardOutline} />
      </button>
      <div />
      <button 
        className='btn'
        onPointerDown={() => handleAction('backward', true)} 
        onPointerUp={() => handleAction('backward', false)}
      >
         <IonIcon icon={caretDownOutline} />
      </button>
      <div />
    </div>
  )
}

export default Controller