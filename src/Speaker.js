import React from 'react';

function Speaker(props) {
  return (
    <div>
      <button onClick={props.speak}>Speak</button>
      <div>{props.message}</div>
    </div>
  )
}

export default Speaker;