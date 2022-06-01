import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import TaskList from "./Tasklist/tasklist";
import TaskForm from "./taskForm";

function App() {
  
  return (
    <section className="row mt-5">
      <article className="col-md-6 offset-md-3 ">
        <Router>
          <Routes>
            <Route path="/" exact element={<TaskList />}/> 

            <Route path="/tasks" exact element={<TaskList />}/>
              
            <Route path="/tasks/add" element={<TaskForm action={"add"} />}/>
              
            <Route path="/tasks/edit/:id" element={ <TaskForm action={"edit"} />}/>
             
            <Route path="/tasks/:id" element={<TaskForm action={"description"} />}/>

            {/* <Route path="*" element={<NoMatch/>}/> */}

              
          </Routes>
        </Router>
      </article>
    </section>
  );
}

export default App;

