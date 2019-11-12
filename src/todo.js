import React from 'react';
import './index.css';
import img_Unlocked from './unlocked.png';
import img_Locked from './locked.png';
import img_Plus from './plus.png';
import img_Trash from './trash.png';


class ToDo extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      str : props.todoinfo,
      pos : (props.num*3.5)+"%",
      handle : props.handle,
      subHandle : props.subHandle,
      delHandle : props.delHandle,
      id : props.id,
      sub : props.sub,
      col : props.col,
      done : props.done,
      group : props.group,
      day : props.day,
      locked : false
    }
    this.toggle = this.toggle.bind(this);
    this.addSub = this.addSub.bind(this);
    this.changeSub = this.changeSub.bind(this);
    this.lock = this.lock.bind(this);
    this.del = this.del.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.col !== nextProps.col)
    {
      return {
        col : nextProps.col
      };
    }
    else if(prevState.pos !== ((nextProps.num*3.5)+"%"))
    {
      return {
        pos : ((nextProps.num*3.5)+"%")
      };
    }
    else
    {
      return null;
    }
   
  }

  toggle()
  {
    this.state.handle(1,this.state.day,this.state.id,!this.state.done )
    this.setState({ done : !this.state.done })
  }

  addSub()
  {
    this.state.subHandle(this.state.day, this.state.col, this.state.group, "true", 0, " - " )
  }

  changeSub(event)
  {
    this.setState({ [event.target.name] : event.target.value});  
    if(event.target.name === "str")
    {
      this.state.handle(0,this.state.day,this.state.id,event.target.value )
    }
    else
    {
      this.state.handle(2,this.state.day,this.state.id,event.target.value )
    }
    
    this.state.handle()
  }

  lock()
  {
    this.state.handle(3,this.state.day,this.state.id,!this.state.locked )
    this.setState({ locked : !this.state.locked })
  }

  del()
  {
    this.state.delHandle(this.state.day,this.state.id)
  }

  render()
  {
    return (
      this.state.sub ?
      <div>
      <div style={{margin : "0",   padding : "0" , position : "absolute", top : this.state.pos,  display : "inline-block", backgroundColor: "rgb(245, 241, 229)", boxSizing : "border-box", borderStyle : "none" , height : "3.5%", width : "10%"  }}>
      </div> 
      <div style={{margin : "0",  padding : "0"   , position : "absolute", top :  this.state.pos, left : "10%",  display : "inline-block", backgroundColor: "white", boxSizing : "border-box", borderStyle : "none" , height : "3.5%", width : "90%"  }}>
        <div style={{ margin : "0",  padding : "0"  , display : "inline-block", height : "100%",width : "100%",position:"relative", backgroundColor :  this.state.col}}>
            <input type="text" value={this.state.str} onChange={this.changeSub} name="str"
            style={{display : "inline-block", backgroundColor :  this.state.col, border : "none",
            paddingLeft : "0.6vw", fontSize : "85%",fontWeight : "350",  margin : "0", width :"80%", boxSizing : "border-box"}}  />
            
            <input type="checkbox" style={{ display : "inline-block", width :"10%",  height : "49%"}} checked={ this.state.done} onChange={this.toggle}/>   
        </div>       
      </div>
      </div>:
      <div style={{position : "absolute",width : "100%",height :"3.5%", top : this.state.pos}}>
        <div className="todoLayout" style={{ margin : "0",  padding : "0",  width : "100%", backgroundColor : this.state.col}}>
            
            <input className="todoName" type="text" value={this.state.str} onChange={this.changeSub}  name="str"
             style={{display : "inline-block", backgroundColor :  this.state.col, border : "none", paddingTop : "10%",
             paddingLeft : "0.6vw", fontSize : "85%",fontWeight : "800",  margin : "0", width :"100%", boxSizing : "border-box"}}  />         
            
           <div className="todoDone">
             <input type="checkbox" checked={ this.state.done} onChange={this.toggle}
              style={{ border : "solid", borderWidth : "1px", boxSizing :"border-box",
              backgroundColor : this.state.col, margin : 0, width : "100%", top :"40%", position : "absolute",objectPosition : "center" , objectFit : "contain"}}/>
           </div>

           <div className="todoAdd"  onClick={this.addSub} >
                <img src={img_Plus}alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>             
           </div>  
           
           <div  className="todoCol">
               <input type="color" name="col" value={this.state.col} onChange={this.changeSub} 
               style={{ border : "solid", borderWidth : "1px", boxSizing :"border-box",
                backgroundColor : this.state.col, margin : 0, width : "100%",  bottom : "0%", position : "absolute",objectPosition : "bottom" , objectFit : "contain"}}/>
           </div>

           <div className="todoLock"  onClick={this.lock} >
               {
                this.state.locked?
                <img src={img_Locked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>:
                <img src={img_Unlocked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%", height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
               }
           </div> 

           <div className="todoDel"  onClick={this.del}>
                    <img src={img_Trash} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
           </div> 
            
        </div>       
      </div>
    );
    }
}

export default ToDo;
//style={{margin : "0",  padding : "0"  , position : "absolute", top : this.state.pos,  display : "inline-block", backgroundColor: "white", boxSizing : "border-box", borderStyle : "none" , borderColor : "lightgrey" , height : "5%", width : "100%"  }}