import React from 'react';
import './ControlPanel.css';

class ToDoAdd extends React.Component {
        constructor(props)
        {
            super(props)
            this.state={
                addhandle : props.addHandler,
                sub : false,
                num : 0,
                head : "Group",
                desc : "description",
                col : "rgb(240,230,220)",
                day : 0
            }
           
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
        }
    

    handleSubmit(event)
    {
        event.preventDefault();
        this.state.addhandle(this.state.day, this.state.col,this.state.head,this.state.sub,this.state.num,this.state.desc)
    }
    handleChange(event)
    {
       this.setState({ [event.target.name] : event.target.value});     
    }
 
    render (){
   
    return (
    <div style={{display:"inline-block", width:"30%", height : "100%"}}>
         <form onSubmit={this.handleSubmit} style={{display:"block", height : "100%"}}>
      		<grid className="controlgrid">
			<p className="he">  Add Task </p>			
			<input type="submit" className="su" value="Submit"/>
			<textarea className="te" name="desc" value={this.state.desc} onChange={this.handleChange}>        </textarea>			
                <div className="bu">
                    <grid className="taskgrid">
                                <select className="t2" name="sub" value={this.state.sub} onChange={this.handleChange}>
									<option value="false"> Item </option>
									<option value="true"> Sub-Item </option>
								</select>
								
                                <input className="t1" name="head" type="text" value={this.state.head} onChange={this.handleChange}/>


								<select className="t4" name="num" value={this.state.num} onChange={this.handleChange}>
                                    <option value="1">  1 </option>
                                    <option value="2">  2 </option>
                                    <option value="3">  3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                    <option value="6"> 6 </option>
                                    <option value="7"> 7 </option>
                                    <option value="8"> 8 </option>
                                    <option value="9"> 9 </option>
                                    <option value="10"> 10 </option>
                                    <option value="11"> 11 </option>
                                    <option value="12"> 12 </option>
                                    <option value="13"> 13 </option>
                                    <option value="14"> 14 </option>
                                    <option value="15"> 15 </option>
                                    <option value="16"> 16 </option>
                                    <option value="17"> 17 </option>
                                    <option value="18"> 18 </option>
                                    <option value="19"> 19 </option>
                                    <option value="20"> 20 </option>
                                </select>
								
								
								 <input className="t3" name="col" type="color" value={this.state.col} onChange={this.handleChange}/>
								
								
								<select className="t5" name="day" value={this.state.day} onChange={this.handleChange}>
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

export default ToDoAdd;

