const TaskHeader = () => {
  return (
    // <div className="d-flex align-items-center">
    <div className="">
      {/* // Search input */}
      {/* <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </div> */}

      <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon">
          Yesterday
        </div>
        <input
          type="date"
          className="form-control"
          placeholder="Search..."
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
        <div className="input-group-text" id="btnGroupAddon">
          Tomorrow
        </div>
      </div>

      <br />

      <div className="container ">
        <div className="input-group justify-content-md-end">
          <div className="input-group-text " id="btnGroupAddon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
          {/* <button type="button" className="btn btn-primary">
            Add Task
          </button> */}
          <a href="/tasks/add" className="btn btn-primary">
            Add Task
          </a>
        </div>

        <div className="form-check">
          <input
            width="25px"
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Show all
          </label>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
