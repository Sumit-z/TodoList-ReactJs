function TodoItem({todoName , todoDate , deleteTodo}) {
    
    const handleDeleteButtonClicked = () =>{
      deleteTodo(todoName)
    }
  
    return (
      <div className="container">
        <div className="row my-rows">
          <div className="col-4 tasks">{todoName}</div>
          <div className="col-4 tasks">{todoDate}</div> 
          <div className="col-2">
          <button type="button" className="btn btn-outline-danger my-buttons"
          onClick={handleDeleteButtonClicked}
          >Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;