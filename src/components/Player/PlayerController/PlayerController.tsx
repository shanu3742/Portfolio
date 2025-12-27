import { IonIcon } from '@ionic/react'
import {
  caretBackOutline,
  caretDownOutline,
  caretForwardOutline,
  caretUpOutline
} from 'ionicons/icons'
import './playerController.css'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const Controller = forwardRef((props, ref) => {
  const forwardbtnRef = useRef(null)
  const backwardbtnRef = useRef(null)
  const leftbtnRef = useRef(null)
  const rightbtnRef = useRef(null)

  const activate = (ref) => {
    if (!ref.current) return
    ref.current.classList.remove('btn')
    ref.current.classList.add('btn-active')
  }

  const deactivate = (ref) => {
    if (!ref.current) return
    ref.current.classList.remove('btn-active')
    ref.current.classList.add('btn')
  }

  const handleAction = (direction, active) => {
    props.onMove(direction, active)
  }

  useImperativeHandle(ref, () => ({
    onForwardPressed: () => activate(forwardbtnRef),
    onForwardReleased: () => deactivate(forwardbtnRef),

    onBackwardPressed: () => activate(backwardbtnRef),
    onBackwardReleased: () => deactivate(backwardbtnRef),

    onLeftwardPressed: () => activate(leftbtnRef),
    onLeftwardReleased: () => deactivate(leftbtnRef),

    onRightwardPressed: () => activate(rightbtnRef),
    onRightwardReleased: () => deactivate(rightbtnRef),
  }))

  return (
    <div className='btn-controller-container'>
      <div />

      <button
        ref={forwardbtnRef}
        className='btn no-select'
        onPointerDown={() => handleAction('forward', true)}
        onPointerUp={() => handleAction('forward', false)}
      >
        <IonIcon icon={caretUpOutline} />
      </button>

      <div />

      <button
        ref={leftbtnRef}
        className='btn no-select'
        onPointerDown={() => handleAction('leftward', true)}
        onPointerUp={() => handleAction('leftward', false)}
      >
        <IonIcon icon={caretBackOutline} />
      </button>

      <button className='btn no-select' style={{ borderRadius: '50%' }} />

      <button
        ref={rightbtnRef}
        className='btn no-select'
        onPointerDown={() => handleAction('rightward', true)}
        onPointerUp={() => handleAction('rightward', false)}
      >
        <IonIcon icon={caretForwardOutline} />
      </button>

      <div />

      <button
        ref={backwardbtnRef}
        className='btn no-select'
        onPointerDown={() => handleAction('backward', true)}
        onPointerUp={() => handleAction('backward', false)}
      >
        <IonIcon icon={caretDownOutline} />
      </button>

      <div />
    </div>
  )
})

export default Controller
