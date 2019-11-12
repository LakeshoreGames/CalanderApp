import React from 'react';
import ToDo from './todo'

function ToDoList (props)  {

  let tempsort = [];
  for(let i = 0; i < props.toDoItems.length; i++ )
  { 
      if(!props.toDoItems[i][6])
      {
          if(tempsort.length === 0)
          {
              tempsort = [...tempsort,props.toDoItems[i]]
          }
          else
          {
              for(let j = 0; j < tempsort.length; j++ )
              {                   
                  if(props.toDoItems[i][7] < tempsort[j][7])
                  {
                      tempsort.splice(j,0,props.toDoItems[i])
                      j =  tempsort.length;
                  }
                  else if(j === tempsort.length-1)
                  {
                      tempsort = [...tempsort,props.toDoItems[i]]
                      j =  tempsort.length;
                  }
              }
          }
      }    
  }
  let tempitems = tempsort;
  let splicenum = 0;
  for(let i = 0; i < tempsort.length; i++ )
  { 
      let subs = [];
      for(let j = 0; j < props.toDoItems.length; j++ )
      {         
          if(props.toDoItems[j][6])
          {
              if(props.toDoItems[j][5] === tempsort[i][5])
              {
                  
                  if(subs.length === 0)
                  {
                      subs = [...subs,props.toDoItems[j]]
                  }
                  else
                  {
                      for(let k = 0; k < subs.length; k++ )
                      {                   
                          if(props.toDoItems[j][7] < subs[k][7])
                          {
                              subs.splice(k,0,props.toDoItems[j])
                              k =  subs.length;
                          }
                          else if(k === subs.length-1)
                          {
                              subs = [...subs,props.toDoItems[j]]
                              k =  subs.length;
                          }
                      }
                  }
              }
          }
      }
      if(subs.length > 0)
      {
          let split1 = tempitems.slice(0,splicenum+1);
          let split2 = tempitems.slice(splicenum+1, tempitems.length)
          tempitems = [...split1,...subs,...split2]  
          splicenum += subs.length;
      }   
      splicenum++;
  }
 
  tempsort = tempitems;
  tempitems = [];

  for(let i = 0; i < tempsort.length; i++ )
  {
      let temptodo =  <ToDo num={i}
        key={tempsort[i][0]}
        id={tempsort[i][0]}
        todoinfo={tempsort[i][2]}
        done={tempsort[i][3]} 
        col ={tempsort[i][4]}
        sub={tempsort[i][6]}
        group={tempsort[i][5]}
        subHandle={props.subHandle}
        day={props.day}
        handle={props.parhandle}
        delHandle={props.delHandle}/>

      tempitems = [...tempitems,temptodo]
  }
        return (
            <div style={{display : "block", width : "100%",height : "100%",position:"absolute" }}>      
                     {tempitems}
            </div>
        );
    
}

export default ToDoList;
