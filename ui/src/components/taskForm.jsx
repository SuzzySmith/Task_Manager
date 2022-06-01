import { Link } from "react-router-dom";
import React, { Component } from "react";
import { withRouter, connectApi } from "./lib/function";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // task: {
        task: "",
        task_date: "",
        note: "",
        completed: false,
      // },
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let action = this.props.action;
    let response
    // let { id } = this.props.match.params;
    switch (action) {
      case "add":
        response = await connectApi("/tasks", "POST", this.state);
        if (response.success) {
          alert("Task saved");
        } else {
          alert(response.message);
        }

        break;
      case "edit":
        response = await connectApi("/tasks", "PUT", this.state);
        if (response.success) {
          alert("Task edited");
        } else {
          alert(response.message);
        }
        break;
      case "delete":
        response = await connectApi("/tasks", "DELETE", this.state);
        if (response.success) {
          alert("Task deleted");
        } else {
          alert(response.message);
        }
        break;

      default:
        break;
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    // console.log(value)
    this.setState({ ...this.state, [event.target.name]: value });
  };

  getFullDate = (date = null) => {
    let task_date = "";
    if (date) {
      task_date = new Date(date);
      const year = task_date.getFullYear();
    let month = task_date.getMonth();
    let day = task_date.getDate();
    if (day <= 9) {
      day = `0${day}`;
    }
    if (month <= 9) {
      month = `0${month + 1}`;
    }
    return `${year}-${month}-${day}`;
    }
    
  };

  async componentDidMount() {
    try {
      const { id } = this.props.router.params;
      const response = await connectApi("/tasks/" + id);
      console.log(response)
      if (response.sucess) {
        const task = { ...this.state, ...response.data };
        this.setState(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { task, task_date, note } = this.state;
// console.log(this.state.task)
    return (
      <form>
        <div>
          <Link className="mr-5" to="/">
            Tasklist
          </Link>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm">
            {this.props.action === "description" ? (
              <a type="button" className="btn btn-primary" href="/tasks/edit/1">
                Edit
              </a>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            name="task"
            placeholder="input your task..."
            onChange={(e) => this.handleChange(e)}
            value={task}
          />
        </div>

        <div className="mb-3 ">
          <label for="Date" className="col-form-label" >
            task_date
          </label>
          <input
            type="date"
            className="form-control"
            id="task_date"
            name="task_date"
            onChange={(e) => this.handleChange(e)}
            value={this.getFullDate(task_date)}
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            note
          </label>
          <textarea
            className="form-control"
            id="note"
            rows="3"
            placeholder="describe the task"
            onChange={(e) => this.handleChange(e)}
            name="note"
            value={note}
          ></textarea>
        </div>
        {this.props.action === "add" || this.props.action === "edit" ? (
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Add Task
          </button>
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default withRouter(TaskForm);
