import React from 'react';
import './index.css';
import img_Unlocked from './unlocked.png';
import img_Locked from './locked.png';
import img_Trash from './trash.png';

class Desc extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            name : props.str,
            bg : props.bg,
            fs : props.fs,
            cHandle : props.changeAtr,
            dHandle : props.delApp,
            lHandle : props.lockApp,
            time : props.time,
            day : props.day,
            locked  : props.locked,
            hor : props.hor

        }
        this.handleChange = this.handleChange.bind(this)
        this.togLock = this.togLock.bind(this)
        this.togDel = this.togDel.bind(this)
    }

    handleChange(event)
    {
        
        this.setState({ [event.target.name] : event.target.value});   
        let timecon =  this.state.time.split('-')[0].split(':')

        if(event.target.name === "name")
        {
            this.state.cHandle(1, event.target.value, this.state.day, parseFloat(timecon[0]) + (parseFloat(timecon[1])/60) )  
        }
        else
        {
            this.state.cHandle(0, event.target.value, this.state.day, parseFloat(timecon[0]) + (parseFloat(timecon[1])/60) )  
        }
    }

    togLock()
    {
        let timecon =  this.state.time.split('-')[0].split(':')
        this.state.cHandle( 2, !this.state.locked, this.state.day, parseFloat(timecon[0]) + (parseFloat(timecon[1])/60) ) 
        this.setState({ locked : !this.state.locked});   
    }

    togDel()
    {
        let timecon =  this.state.time.split('-')[0].split(':')
        this.state.dHandle( this.state.day, parseFloat(timecon[0]) + (parseFloat(timecon[1])/60) )
    }

  render ()
  {
      
      return (   
        (this.state.hor === 0)?
        <div className="appointLayout" style={{ backgroundColor : this.state.bg}}>
            <div  className="appointName">
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} 
                style={{paddingLeft : ".2vw", border : "none", boxSizing :"border-box", height : "100%" ,margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}/> 	
            </div>

            <div  className="appointTime">                
                <p style={{paddingLeft : ".2vw", paddingTop : ".2vh", border : "none", boxSizing :"border-box", margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}> 
                {this.state.time} </p>		                
            </div>

            <div  className="appointCol">
                <input type="color" name="bg" value={this.state.bg} onChange={this.handleChange} 
                style={{ border : "solid", borderWidth : "1px", boxSizing :"border-box",
                 backgroundColor : this.state.bg, margin : 0, width : "100%",  bottom : "0%", position : "absolute",objectPosition : "bottom" , objectFit : "contain"}}/>
            </div>

            <div  className="appointDel"  onClick={this.togDel}>
                     <img src={img_Trash} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
                
            </div>

            <div  className="appointLock"  onClick={this.togLock} >
                {
                 this.state.locked?
                 <img src={img_Locked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>:
                 <img src={img_Unlocked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%", height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
                }
            </div>
        </div>:
        (this.state.hor === 1)?
         <div className="appointLayout2" 
         style={{ backgroundColor : this.state.bg}}>
           
            <div  className="appointName">
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} 
                style={{paddingLeft : ".2vw", border : "none", boxSizing :"border-box", height : "100%" ,margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}/> 	
            </div>

            <div  className="appointTime">                
                <p style={{paddingLeft : ".2vw", paddingTop : ".2vh", border : "none", boxSizing :"border-box", margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}> 
                {this.state.time} </p>		                
            </div>

            <div  className="appointCol">
                <input type="color" name="bg" value={this.state.bg} onChange={this.handleChange} 
                style={{ border : "solid", borderWidth : "1px", boxSizing :"border-box",
                 backgroundColor : this.state.bg, margin : 0, width : "100%",  bottom : "0%", position : "absolute",objectPosition : "bottom" , objectFit : "contain"}}/>
            </div>

            <div  className="appointDel"  onClick={this.togDel}>
                     <img src={img_Trash} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
                
            </div>

            <div  className="appointLock"  onClick={this.togLock} >
                {
                 this.state.locked?
                 <img src={img_Locked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>:
                 <img src={img_Unlocked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%", height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
                }
            </div>
        </div>:
        <div className="appointLayout3" 
        style={{ backgroundColor : this.state.bg}}>
          
           <div  className="appointName">
               <input type="text" name="name" value={this.state.name} onChange={this.handleChange} 
               style={{paddingLeft : ".2vw", border : "none", boxSizing :"border-box", height : "100%" ,margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}/> 	
           </div>

           <div  className="appointTime">                
               <p style={{paddingLeft : ".2vw", paddingTop : ".2vh", border : "none", boxSizing :"border-box", margin : 0, fontSize : this.state.fs, backgroundColor : this.state.bg}}> 
               {this.state.time} </p>		                
           </div>

           <div  className="appointCol">
               <input type="color" name="bg" value={this.state.bg} onChange={this.handleChange} 
               style={{ border : "solid", borderWidth : "1px", boxSizing :"border-box",
                backgroundColor : this.state.bg, margin : 0, width : "100%",  bottom : "0%", position : "absolute",objectPosition : "bottom" , objectFit : "contain"}}/>
           </div>

           <div  className="appointDel"  onClick={this.togDel}>
                    <img src={img_Trash} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
               
           </div>

           <div  className="appointLock"  onClick={this.togLock} >
               {
                this.state.locked?
                <img src={img_Locked} alt="" style={{border : "none", boxSizing :"border-box", width : "100%" ,height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>:
                <img src={img_Unlocked} alt="" style={{border : "none", boxSizing :"border-box",  width : "100%", height : "100%", bottom : "0%", position : "absolute", objectPosition : "bottom" , objectFit : "contain"}}></img>
               }
           </div>
       </div>

    )};
}

export default Desc;
