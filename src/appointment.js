import React from 'react';
import './index.css';
import TimeButton from './TimeButton'
import Desc from './Desc'

function Appointment(props) {

  let tbs = [];
  if( props.name === " - ")
  {
    let l = props.timeEnd - props.timeStart
    l = l / .25
    
    for(let i = 0; i < l; i++)
    {
      if(props.timeStart+(i*.25) === props.ftime)
      {
        tbs = [...tbs, <TimeButton key={i} t={i*(100/l) + "%"} h={(100/l) + "%"} num={props.timeStart+(i*.25)} day={props.day} thandle={props.thandle} sel={true} />]
      }
      else
      {
        tbs = [...tbs, <TimeButton key={i} t={i*(100/l) + "%"} h={(100/l) + "%"} num={props.timeStart+(i*.25)} day={props.day} thandle={props.thandle} sel={false} />]
      }
    }
   
  }

  let h;
  let c;
  let c2 = ":00";
  let e;
  let e2 = ":00";

  c = parseFloat(props.timeStart);
  if(c >= 13 )
  {
      c -= 12;
  }
  if(c % 1 !== 0)
  {
    switch(c - Math.floor(c))
    {
      case 0.25:
        c2=":15"
        break;
        
      case 0.5:
        c2=":30"
        break;

      case 0.75:
        c2=":45"
        break;
      default:
      break;
    }
  }
  c -= (c - Math.floor(c))
  
  e = parseFloat(props.timeEnd)
  if(e >= 13 )
  {
    e -= 12;
  }
  if(e % 1 !== 0)
  {
    switch(e - Math.floor(e))
    {
      case .25:
        e2=":15"
        break;
        
      case .5:
        e2=":30"
        break;

      case .75:
        e2=":45"
        break;
        default:
            break;
    }
  }
  e -= (e - Math.floor(e))

  h = ((props.timeEnd - props.timeStart)/13)*100;
  const hstr = h + "%";
  const str = props.name;
  const time = " " + c + c2 + " -  " + e + e2 
 // console.log("hi " + props.day);
  return (
    
    <div style={{backgroundColor: props.color, boxSizing : "border-box", borderStyle : "solid" , margin : "0", borderColor : "lightgrey" , position : "relative", height : hstr, width : "100%"}}>
      {  
        props.name === " - " ?
        <div style={{height : "100%"}} >
        {tbs}
        </div>
        :
        ((h*.01 )*(window.innerHeight*.99) > 60 ) ?

            <Desc fs={"1.6vh"} bg={props.color} day={props.day}  str={str} time={time} changeAtr={props.changeAtr} delApp={props.delApp} locked={props.locked} hor={0} />: 
          ((h*.01 )*(window.innerHeight*.99) > 30)?
              <Desc fs={"1.3vh"} bg={props.color} day={props.day} str={str} time={time} changeAtr={props.changeAtr} delApp={props.delApp} locked={props.locked} hor={1} />: 
              <Desc fs={"1vh"} bg={props.color} day={props.day} str={str} time={time} changeAtr={props.changeAtr} delApp={props.delApp} locked={props.locked} hor={2} />
      }
    </div>
  );
}

export default Appointment;
