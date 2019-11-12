import React from 'react';
import Appointment from './appointment'

function DaySchedule(props){
let converter = [...props.schedule];
    let temp = []
    for(let i = 0; i <converter.length;i++)
    {
      temp = [...temp, <Appointment key={converter[i][0]} name={converter[i][1]} color={converter[i][2]} day={props.day} timeStart={converter[i][3]} timeEnd={converter[i][4]} locked={converter[i][5]}  changeAtr={props.changeAtr} delApp={props.delApp} />]
    }
    
    let teststarts = [7,8,9,10,11,12,13,14,15,16,17,18,19]
    let testends = [8,9,10,11,12,13,14,15,16,17,18,19,20]
    let blanks = []
    for(let i = 0; i < teststarts.length; i++ )
    {
      let keep = true;
      let start = teststarts[i];
      let end = testends[i];
      let surround = false;
      for(let j = 0; j < temp.length; j++ )
      {
        if(start >= parseFloat(temp[j].props.timeStart) &&  start < parseFloat(temp[j].props.timeEnd))
        {
          if( parseFloat(temp[j].props.timeEnd) < end)
          {
            start =  parseFloat(temp[j].props.timeEnd)
          }
          else
          {
            keep = false
          }
        }
        else if(end > parseFloat(temp[j].props.timeStart) &&  end <= parseFloat(temp[j].props.timeEnd))
        {
          end = parseFloat(temp[j].props.timeStart)
        }

        if(start < parseFloat(temp[j].props.timeStart) && end > parseFloat(temp[j].props.timeEnd) && !surround )
        {
          teststarts.push(start);
          testends.push( parseFloat(temp[j].props.timeStart) );
          teststarts.push( parseFloat(temp[j].props.timeEnd));
          testends.push(end);
          keep = false;
          surround = true;
        }
      }
      if(keep)
      {
        blanks = [start,end,...blanks]
      }
    }

    for(let i = 0; i < blanks.length; i+=2 )
    {
        temp = [...temp, <Appointment key={"b"+i} name=" - " color="white"   timeStart={blanks[i]} timeEnd={blanks[i+1]} day={props.day} thandle={props.thandle} ftime={props.ftime}/> ]   
    }
    
    temp.sort(function(a,b){
    return parseFloat(a.props.timeStart)-parseFloat(b.props.timeStart)})    

    let h = window.innerHeight*.94;

  return ( 
      <div style={{display : "block", width : "100%",height : h }}>  
        {temp}
      </div>
      )
}

export default DaySchedule;
