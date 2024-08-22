import { useState } from "react";

function AppTodoInput({ addTodo }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row my-input-row">
        <div className="col-4">
          <input
            id="todoTaskInput"
            type="text"
            placeholder="Enter the Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input 
          id="todoDateInput" 
          type="date" 
          value={todoDate}
          onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-success my-buttons"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodoInput;
