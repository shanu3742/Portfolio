// Controller.jsx
import React from 'react'

const Controller = ({ onMove }) => {
  const handleAction = (direction, active) => {
    onMove(direction, active)
  }

  // Styles for the button container
  const containerStyle = {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 50px)',
    gap: '10px',
    zIndex: 1000,
  }

  const btnStyle = {
    width: '50px',
    height: '50px',
    userSelect: 'none',
    touchAction: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid white',
    color: 'white',
    borderRadius: '8px'
  }

  return (
    <div style={containerStyle}>
      <div />
      <button 
        style={btnStyle}
        onPointerDown={() => handleAction('forward', true)} 
        onPointerUp={() => handleAction('forward', false)}
      >W</button>
      <div />
      
      <button 
        style={btnStyle}
        onPointerDown={() => handleAction('leftward', true)} 
        onPointerUp={() => handleAction('leftward', false)}
      >A</button>
      <button 
        style={btnStyle}
        onPointerDown={() => handleAction('backward', true)} 
        onPointerUp={() => handleAction('backward', false)}
      >S</button>
      <button 
        style={btnStyle}
        onPointerDown={() => handleAction('rightward', true)} 
        onPointerUp={() => handleAction('rightward', false)}
      >D</button>
    </div>
  )
}

export default Controller