import React, { Component } from "react";
import TaskNav from "./taskNav"
import TaskHeader from "./taskHeader"
import Task from "./task/task"

import {withRouter, connectApi} from "../lib/function"



class TaskList extends Component  {
    
       state = {
          tasks: []
        };
 
   
  async componentDidMount() {
    // let params = new URLSearchParams(this.props.router.location.search);
    const response = await connectApi("/tasks")
    console.log(response)
    if (response.sucess) {
        this.setState({
            tasks: response.data
        })
    }
}
   
render() {
    // console.log(this.state)
    return (
       <>
       {/* <TaskNav/> */}
       <TaskHeader/>
       {this.state.tasks.map((task) => (
           <Task key={task._id}  task={task}/>
    
       ))}
       </>

    )

}

}


export default TaskList;