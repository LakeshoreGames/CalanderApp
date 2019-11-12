import React from 'react';
import './index.css';

function TimeButton(props) {
   
    function caller() {
      props.thandle(props.num, props.day)
    }

  return ( 
    props.sel?
    <input type="button" className="appoint" style={{backgroundColor : "lightblue", top : props.t, height : props.h}} onClick={caller} />:
    <input type="button" className="appoint" style={{top : props.t, height : props.h}} onClick={caller} />
  );
}

export default TimeButton;

