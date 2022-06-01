import React, { useState,useEffect, Component } from "react";
import { Link } from "react-router-dom";
import TaskAction from "./taskAction";

function Task(props) {
  
  const [task, setTask] = useState({completed : false})
  useEffect (()=> {}, []) 
  const {_id, task: title} = props.task

  let handleChange = (e) => {
     //  setTask({completed : true})
      if (e.target.checked === false){
        setTask({completed : false});
      }else {
       setTask({completed : true});
      }
    }
    return (

      <div className="container mb-3 mt-1">
        <div className="list-group">
          <label className="list-group-item d-flex gap-3">
              
            <input
              className="form-check-input flex-shrink-0 mt-3"
              type="checkbox" style={{width:"1.5em",height:"1.5em"}}
              onChange={(e) => handleChange(e)}  
            />
  
            <span className="pt-1 form-checked-content">
              <div className=""> <Link to={`/tasks/${_id}`}><strong >{title}</strong></Link> 
             {task.completed ? "" : <TaskAction/>}</div>
              <small className="d-block text-muted">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                2:00–2:30pm
              </small>
            </span>
            
          
           {/* <TaskAction/> */}
          </label>
         
        
        </div>
      </div>
    );
}

//  class Task extends Component {
//   constructor (props){
//     super(props);

//      this.state = {
//       completed : false
//      }
//   }
// //  const [task, setTask] = useState({completed : false})

//   handleChange = (e) => {
//   //  setTask({completed : true})
//    if (e.target.checked === false){
//      this.setState({completed : false});
//    }else {
//     this.setState({completed : true});
//    }
//  }

//  render () {
//    const {_id, task} = this.props.task
//    return (
   

//     <div className="container mb-3 mt-1">
//       <div className="list-group">
//         <label className="list-group-item d-flex gap-3">
            
//           <input
//             className="form-check-input flex-shrink-0 mt-3"
//             type="checkbox" style={{width:"1.5em",height:"1.5em"}}
//             onChange={(e) => this.handleChange(e)}  
//           />

//           <span className="pt-1 form-checked-content">
//             <div className=""> <Link to={`/tasks/${_id}`}><strong >{task}</strong></Link> 
//            {this.state.completed ? "" : <TaskAction/>}</div>
//             <small className="d-block text-muted">
//               <svg className="bi me-1" width="1em" height="1em"></svg>
//               2:00–2:30pm
//             </small>
//           </span>
          
        
//          {/* <TaskAction/> */}
//         </label>
       
      
//       </div>
//     </div>
//   );
//  }
  
// };


export default Task;

