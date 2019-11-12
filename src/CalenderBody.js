import React from 'react';
import DaySchedule from './DaySchedule'
import './index.css';
import ToDoList from './ToDoList'; 	

class CalenderBody extends React.Component {
        constructor(props)
        {
            super(props)
            this.state={
                toggles : props.flipped,
                appointments : props.scheduleData,
                toDos : props.toDoData,
                addA : props.addAfunc,
                addT : props.addTfunc,
                changeA : props.changeAfunc, 
                changeT : props.changeTfunc, 
                delA : props.delAfunc, 
                delT : props.delTfunc, 
                clrA : props.clearAfunc, 
                clrT : props.clearTfunc, 
                ftime : 0,
                AddDay : 0
            }
            this.changeToDo = this.changeToDo.bind(this)
            this.addAppointment = this.addAppointment.bind(this)
            this.addToDo = this.addToDo.bind(this)
            this.settime = this.settime.bind(this)
            this.changeAppointment = this.changeAppointment.bind(this)
            this.removeAppointment = this.removeAppointment.bind(this)
            this.removeToDo = this.removeToDo.bind(this)
        }
    
    toggleDay(id)
    {
     this.setState(prevState=>{
        let uptoggles = prevState.toggles
        for(let i=0 ; i< 7;i++)
        {
            if(i === id)
            {
                uptoggles[i] = !uptoggles[i];
            }
        }

        return{
            toggles : uptoggles
        }
        })
    }
    
    settime(num, day)
    {      
        if(this.state.ftime === 0)
        {
            this.setState({ftime : num, AddDay : day })
        }
        else if( day === this.state.AddDay)
        {
            num+=.25
            this.addAppointment(day, Math.floor(this.state.ftime), this.state.ftime-Math.floor(this.state.ftime),
             Math.floor(num), num-Math.floor(num), "Description" ,"rgb(240,230,220)"  )
             this.setState({ftime : 0})
        }
    }

    addAppointment(day, tsh, tsm, teh, tem,nm,col)
    {
        this.state.addA(day, tsh, tsm, teh, tem,nm,col)
    }

    changeAppointment(type, name, day, timestart)
    {
        this.state.changeA(type ,name, parseInt(day), timestart)
    }

    removeAppointment(day, timestart)
    {
        this.state.delA(day, timestart)
    }

    addToDo(day, col, group, sub, nm, desc)
    {
        this.state.addT(day, col, group, sub, nm, desc)
    }
   
    changeToDo(type, day, id, value)
    {
       this.state.changeT(type, day, id, value)
    }

    removeToDo(day, id)
    {
        this.state.delT(day, id)
    }

    render (){
    const seperators = "0.5%";
    return (
        <div style={{display : "block", height : "100%"}}> 
                 <div style={{display : "block", height : "5%"}}> 
                 <form action="http://lakeshoregames.co/">
                    <input type="submit" style={{height : "100%", width :"8%", right : "1%",float :"left"}} value="Home"/> 
                 </form>
                 <input type="button" style={{height : "100%", width :"10%", right : "1%",float :"right"} } onClick={() => this.state.clrA()} value="Clear Appointments"/> 
                 <input type="button" style={{height : "100%", width :"10%", right : "1%",float :"right"} } onClick={() => this.state.clrT()} value="Clear Tasks"/> 
                 </div>
                <div style={{display : "block", height : "95%"}}> 
                    
                    <div className="day" style={  !this.state.toggles[0]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>
                    
                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>                
                                <input type="button" style={{right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(0)} /> 
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 0 ?
                                    <DaySchedule schedule={this.state.appointments[0]} thandle={this.settime} day={0} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[0]} thandle={this.settime} day={0} ftime={0}  changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[0]} thandle={this.settime} day={0} ftime={0}  changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(0)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(0,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[0]}  parhandle={this.changeToDo} day={0} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>
      
                    <div className="day" style={  !this.state.toggles[1]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>

                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>  
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(1)} />               
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 1 ?
                                    <DaySchedule schedule={this.state.appointments[1]} thandle={this.settime} day={1} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[1]} thandle={this.settime} day={1} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[1]} thandle={this.settime} day={1} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(1)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(1,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[1]}  parhandle={this.changeToDo} day={1} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>                       
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>

                    <div className="day" style={  !this.state.toggles[2]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>
                        
                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>        
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(2)} />         
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 2 ?
                                    <DaySchedule schedule={this.state.appointments[2]} thandle={this.settime} day={2} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[2]} thandle={this.settime} day={2} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[2]} thandle={this.settime} day={2} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(2)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(2,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[2]}  parhandle={this.changeToDo} day={2} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>

                    <div className="day" style={  !this.state.toggles[3]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>
                
                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>   
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(3)} />              
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 3 ?
                                    <DaySchedule schedule={this.state.appointments[3]} thandle={this.settime} day={3} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[3]} thandle={this.settime} day={3} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[3]} thandle={this.settime} day={3} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }  
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(3)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(3,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[3]}  parhandle={this.changeToDo} day={3} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>

                    <div className="day" style={  !this.state.toggles[4]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>
                
                    <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>      
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(4)} />           
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 4 ?
                                    <DaySchedule schedule={this.state.appointments[4]} thandle={this.settime} day={4} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[4]} thandle={this.settime} day={4} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[4]} thandle={this.settime} day={4} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }  
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(4)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(4,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[4]}  parhandle={this.changeToDo} day={4} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>

                    <div className="day" style={  !this.state.toggles[5]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>

                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>                
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(5)} /> 
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 5 ?
                                    <DaySchedule schedule={this.state.appointments[5]} thandle={this.settime} day={5} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[5]} thandle={this.settime} day={5} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[5]} thandle={this.settime} day={5} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(5)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(5,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[5]}  parhandle={this.changeToDo} day={5} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>

                    <div style={{display : "inline-block", width : seperators}}></div>

                    <div className="day" style={  !this.state.toggles[6]? { transform : "rotateY(180deg)",position : "static", height : "100%",transition: "transform 0.6s", transformStyle: "preserve-3d",   perspective: "1000"}
                    :{ transform : "rotateY(0deg)",position : "static", height : "100%",transition: "transform 0.8s", transformStyle: "preserve-3d",   perspective: "1000px"} }>
                
                        <div style={{ transform : "rotateY(0deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>                
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(6)} /> 
                                {
                                this.state.ftime > 0?
                                    this.state.AddDay === 6 ?
                                    <DaySchedule schedule={this.state.appointments[6]} thandle={this.settime} day={6} ftime={this.state.ftime} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                    <DaySchedule schedule={this.state.appointments[6]} thandle={this.settime} day={6} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> :
                                <DaySchedule schedule={this.state.appointments[6]} thandle={this.settime} day={6} ftime={0} changeAtr={this.changeAppointment} delApp={this.removeAppointment}/> 
                                }   
                        </div> 

                        <div style={{ transform : "rotateY(180deg)",position : "absolute", height : "100%", width : "100%", backfaceVisibility: "hidden"}}>
                                <input type="button" style={ {right : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.toggleDay(6)} /> 
                                <input type="button" style={ {left : "1%" , position : "absolute",zIndex : "1"} } onClick={() => this.addToDo(6,"rgb(230,240,255)",Math.random(),0,0," - ")} /> 
                                <ToDoList toDoItems={this.state.toDos[6]}  parhandle={this.changeToDo} day={6} subHandle={this.addToDo} delHandle={this.removeToDo}/>
                        </div>
                    </div>
            </div>
        </div>
    )}
}

export default CalenderBody;
