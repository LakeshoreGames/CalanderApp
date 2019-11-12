import React from 'react';
import CalenderBody from './CalenderBody';
import './index.css';

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      toDos : this.loadToDo(),
      schedule : this.loadSchedule()
    }

    this.loadSchedule = this.loadSchedule.bind(this)
    this.save = this.save.bind(this)

    this.addAppointment = this.addAppointment.bind(this)
    this.changeAppointment = this.changeAppointment.bind(this)
    this.removeAppointment = this.removeAppointment.bind(this)
    this.clearAppointments = this.clearAppointments.bind(this)

    this.addToDo = this.addToDo.bind(this)
    this.changeToDo = this.changeToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.clearToDos = this.clearToDos.bind(this)
  }

  
  loadSchedule()
  {
    if(localStorage.getItem('calender'))
    {
      let scheduleJson = JSON.parse( localStorage.getItem('calender') )
      return  scheduleJson
    }
    else
    {
      return [[],[],[],[],[],[],[]]
    }
  }

  loadToDo()
  {
    if(localStorage.getItem('calender'))
    {
      let toDosJson = JSON.parse( localStorage.getItem('todos') )
      return toDosJson
    }
    else
    {
      return [[],[],[],[],[],[],[]]
    }
  }

  save(){
    let caljson = JSON.stringify(this.state.schedule)
    let tdjson = JSON.stringify(this.state.toDos)

    localStorage.setItem('calender', caljson)
    localStorage.setItem('todos', tdjson)   
  }

  addAppointment(day, tsh, tsm, teh, tem,nm,col)
    {
        this.setState(prevState => {
            let aps = prevState.schedule
            let k = 0;
            for(let j = 0; j < aps[day].length; j++ )
            { 
                if(k < parseInt(aps[day][j][0]))
                {
                    k = parseInt(aps[day][j][0])
                }

                if((parseFloat(tsh)+parseFloat(tsm)) === aps[day][j][3])
                {
                  console.log("FAIL SAME")
                  return{
                    schedule : prevState.schedule
                  }
                }
                else if((parseFloat(tsh)+parseFloat(tsm)) > aps[day][j][3] && (parseFloat(tsh)+parseFloat(tsm)) < aps[day][j][4])
                {
                  console.log("FAIL START CONTAINED")

                  return{
                    schedule : prevState.schedule
                  }
                }
                
                if((parseFloat(teh)+parseFloat(tem)) > aps[day][j][3] && (parseFloat(teh)+parseFloat(tem)) < aps[day][j][4])
                {
                  console.log("FAIL END CONTAINED")

                  return{
                    schedule : prevState.schedule
                  }
                }

                if((parseFloat(tsh)+parseFloat(tsm)) < aps[day][j][3] && (parseFloat(teh)+parseFloat(tem)) > aps[day][j][4])
                {
                  console.log("FAIL SURROUND")

                  return{
                    schedule : prevState.schedule
                  }
                }

                if((parseFloat(tsh)+parseFloat(tsm)) >= (parseFloat(teh)+parseFloat(tem)))
                {
                  console.log("FAIL END BEFORE START")

                  return{
                    schedule : prevState.schedule
                  }
                }

            }
            console.log("success",(k+1)+"" , nm , col, parseFloat(tsh)+parseFloat(tsm), parseFloat(teh)+parseFloat(tem),false )
            aps[day] = [...aps[day], [(k+1)+"" , nm , col, parseFloat(tsh)+parseFloat(tsm), parseFloat(teh)+parseFloat(tem),false] ]
            return{
              schedule : aps
            }
        }) 
  }

  changeAppointment(type, value, day, timestart)
  {
    if(type === 0)
    {
      this.setState(prevState => {
        let aps = prevState.schedule
        for(let j = 0; j < aps[day].length; j++ )
        { 
            if(timestart === parseFloat(aps[day][j][3]))
            {
                aps[day][j][2] = value; 
            }
        }
          return({
            schedule : aps
          })

        })
    }
    else if(type === 1)
    {
      this.setState(prevState => {
        let aps = prevState.schedule
        for(let j = 0; j < aps[day].length; j++ )
        { 
            if(timestart === parseFloat(aps[day][j][3]))
            {
                aps[day][j][1] = value; 
            }
        }
          return({
            schedule : aps
          })

        })
    }
    else if(type === 2)
    {
    this.setState(prevState => {
      let aps = prevState.schedule
      for(let j = 0; j < aps[day].length; j++ )
      { 
          if(timestart === parseFloat(aps[day][j][3]))
          {
              aps[day][j][5] = value; 
          }
      }
        return({
          schedule : aps
        })

      })
    }
    this.save();
  }

  removeAppointment(day, timestart)
  {
      this.setState(prevState => {
        let aps = prevState.schedule
        for(let j = 0; j < aps[day].length; j++ )
        { 
            if(timestart === parseFloat(aps[day][j][3]))
            {
                aps[day].splice(j, 1) 
            }
        }
          return({
            schedule : aps
          })

        })
    
   
    this.save();
  }

  clearAppointments()
  {
    console.log("clear")
    this.setState(prevState => {
      let tds = prevState.schedule
    for(let i = tds.length-1; i > -1; i--)
    {
      for(let j = tds[i].length-1; j > -1; j-- )
      { 
          if(!tds[i][j][5])
          {
            tds[i].splice(j, 1) 
          }
      }
    }
    return({
      schedule : tds
    })

  })
  this.save();
  }


  addToDo(day, col, group, sub, nm, desc)
  {
      this.setState(prevState => {
          let tds = prevState.toDos
          let k = 0;
          for(let j = 0; j < tds[day].length; j++ )
          { 
              if(k < parseInt(tds[day][j][0]))
              {
                  k = parseInt(tds[day][j][0])
              }
          }

          tds[day] = [...tds[day], [(k+1)+"", day , desc , false , col,group,(sub === "true"), parseInt(nm),false] ]
          return{
              toDos : tds
          }
      }) 
  }

  changeToDo(type, day, id, value)
  {
    if(type === 0)//text
    {
      this.setState(prevState => {
        let tds = prevState.toDos
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(id === tds[day][j][0])
            {
                tds[day][j][2] = value; 
            }
        }
          return({
            toDos : tds
          })

        })
    }
    else if(type === 1)//done
    {
      this.setState(prevState => {
        let tds = prevState.toDos
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(id === tds[day][j][0])
            {
              tds[day][j][3] = value; 
            }
        }
          return({
            toDos : tds
          })

        })
    }
    else if(type === 2)//col
    {
      this.setState(prevState => {
        let tds = prevState.toDos
        let g;
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(id === tds[day][j][0])
            {
                tds[day][j][4] = value; 
                if(!tds[day][j][6])
                {
                  g = tds[day][j][5]
                }
            }
        }
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(g === tds[day][j][5])
            {
                if(tds[day][j][6])
                {
                  tds[day][j][4] = value; 
                }
            }
        }
          return({
            toDos : tds
          })

        })
    }
    else if(type === 3)//lock
    {
      this.setState(prevState => {
        let tds = prevState.toDos
        let g;
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(id === tds[day][j][0])
            {
                tds[day][j][8] = value; 
                if(!tds[day][j][6])
                {
                  g = tds[day][j][5]
                }
            }
        }
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(g === tds[day][j][5])
            {
                if(tds[day][j][6])
                {
                  tds[day][j][8] = value; 
                }
            }
        }
          return({
            toDos : tds
          })

        })
    }
    this.save();
  }

  removeToDo(day, id)
  {
      this.setState(prevState => {
        let tds = prevState.toDos
        let g;
        for(let j = 0; j < tds[day].length; j++ )
        { 
            if(id === tds[day][j][0])
            {
                g = tds[day][j][5]
                tds[day].splice(j, 1) 
            }
        }
        for(let j = tds[day].length-1; j > -1; j-- )
        { 
            if(g === tds[day][j][5])
            {
              tds[day].splice(j, 1) 
            }
        }
          return({
            toDos : tds
          })

        })
    
   
    this.save();
  }

  clearToDos()
  {
    console.log("clear")
    this.setState(prevState => {
      let tds = prevState.toDos
    for(let i = tds.length-1; i > -1; i--)
    {
      for(let j = tds[i].length-1; j > -1; j-- )
      { 
          if(!tds[i][j][8])
          {
            tds[i].splice(j, 1) 
          }
      }
    }
    return({
      toDos : tds
    })

  })
  this.save();
  }

  componentDidUpdate()
  {
    this.save()
  }

  render() {
    return(
    <div className='backdrop' >
        <CalenderBody flipped={[true,true,true,true,true,true,true]}  toDoData={this.state.toDos} scheduleData={this.state.schedule}
         addAfunc={this.addAppointment}
         addTfunc={this.addToDo}
         changeAfunc={this.changeAppointment}
         changeTfunc={this.changeToDo}
         delAfunc={this.removeAppointment}
         delTfunc={this.removeToDo}
         clearTfunc={this.clearToDos}
         clearAfunc={this.clearAppointments}/>
    </div>
    )
  };
}

export default App;
