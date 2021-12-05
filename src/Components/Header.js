import React, { Component } from 'react'

 class Header extends Component {
    constructor(props){
       super(props) 
       this.state = {
           newTask : ''
       }
    }
    
    handleChange=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
         
          
        })        
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.handleTask(this.state.newTask)
    }

    render() {
        return (
            <div className="app" align='right'>
                <div className="title">
        <form class-name="navbar-form navbar-left" role="search" onSubmit={(event)=>{this.handleSubmit(event)}} >
        <div class-name="form-group">
            <h1 className="font-weight-bold"> To-Do App!</h1>
            <p className="font-weight-bold">Add new To-Do</p>
        <input type="text" name="newTask" placeholder="Enter new task" width="100%" className="d-block col-12 form-control" required value={this.state.newTask} onChange={event=>this.handleChange(event)}/>
     <br></br>
        </div>
        <input type="submit"  style={{marginLeft : "px"}} className=" btn btn-outline-light add-btn" value="Add"/>
      </form>
     <br></br>
                    
            </div>
            </div>
        )
    }
}

export default Header
