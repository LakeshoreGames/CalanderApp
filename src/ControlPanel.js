import React from 'react';
import './ControlPanel.css';

class ControlPanel extends React.Component {
        constructor(props)
        {
            super(props)
            this.state={
                addHandle : props.addHandler,
                starth : 7,
                startm : 0,
                endh : 8,
                endm : 0,
                name : "description",
                col : "rgb(240,230,220)",
                day : 0
            }
           
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
        }
    

    handleSubmit(event)
    {
        event.preventDefault();
        this.state.addHandle(this.state.day, this.state.starth,this.state.startm,this.state.endh,this.state.endm,this.state.name,this.state.col)
    }
    handleChange(event)
    {
       this.setState({ [event.target.name] : event.target.value});     
    }
 
    render (){
    
    return (
    <div style={{display:"inline-block",width:"30%", height : "100%"}}>
         <form onSubmit={this.handleSubmit} style={{display:"block", height : "100%"}}>
      		<grid className="controlgrid">
			<p className="he"> Add Appointment </p>			
			<input type="submit" className="su" value="Submit"/>
			<textarea className="te" name="name" value={this.state.name} onChange={this.handleChange}> </textarea>			
                <div className="bu">
				        <grid className="buttongrid">
								<select className="s1" name="starth" value={this.state.starth} onChange={this.handleChange}>
                                    <option value="7">  7 </option>
                                    <option value="8">  8 </option>
                                    <option value="9">  9 </option>
                                    <option value="10"> 10 </option>
                                    <option value="11"> 11 </option>
                                    <option value="12"> 12 </option>
                                    <option value="13"> 1 </option>
                                    <option value="14"> 2 </option>
                                    <option value="15"> 3 </option>
                                    <option value="16"> 4 </option>
                                    <option value="17"> 5 </option>
                                    <option value="18"> 6 </option>
                                    <option value="19"> 7 </option>
                                    <option value="20"> 8 </option>
                                </select>
								
								<select className="s2" name="startm" value={this.state.startm} onChange={this.handleChange}>
									<option value="0"> :00 </option>
									<option value=".25"> :15 </option>
									<option value=".5"> :30 </option>
									<option value=".75"> :45 </option>
								</select>

								<p className="dash"> - </p>

								<select className="s3" name="endh" value={this.state.endh} onChange={this.handleChange}>
                                    <option value="7">  7 </option>
                                    <option value="8">  8 </option>
                                    <option value="9">  9 </option>
                                    <option value="10"> 10 </option>
                                    <option value="11"> 11 </option>
                                    <option value="12"> 12 </option>
                                    <option value="13"> 1 </option>
                                    <option value="14"> 2 </option>
                                    <option value="15"> 3 </option>
                                    <option value="16"> 4 </option>
                                    <option value="17"> 5 </option>
                                    <option value="18"> 6 </option>
                                    <option value="19"> 7 </option>
                                    <option value="20"> 8 </option>
                                </select>
								
								<select className="s4" name="endm" value={this.state.endm} onChange={this.handleChange}>
									<option value="0"> :00 </option>
									<option value=".25"> :15 </option>
									<option value=".5"> :30 </option>
									<option value=".75"> :45 </option>
								</select>
								
								 <input className="cl" name="col" type="color" value={this.state.col} onChange={this.handleChange}/>
								
								<div className="space"> </div>
								
								<select className="dy" name="day" value={this.state.day} onChange={this.handleChange}>
									<option value="0"> Mon </option>
									<option value="1"> Tues </option>
									<option value="2"> Wed </option>
									<option value="3"> Thu </option>
									<option value="4"> Fri </option>
									<option value="5"> Sat </option>
									<option value="6"> Sun </option>
								</select>
								
				        </grid>
			    </div>
		   </grid>
        </form>
    </div>
    )}
}

export default ControlPanel;

