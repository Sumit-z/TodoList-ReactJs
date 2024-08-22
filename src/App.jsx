import AppHeading from "./components/AppHeading";
import AppTodoInput from "./components/AppTodoInput";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleTodoInput = (todoName, todoDate) => {
    const newTodoItem = [...todoItems, { name: todoName, date: todoDate }];
    setTodoItems(newTodoItem)
  };

  const handleDeleteItem = (todoItemName) =>{
        const newTodoItem = todoItems.filter((item) => item.name !== todoItemName)
        setTodoItems(newTodoItem)
  }

  return (
    <center>
      <div className="main-container">
        <AppHeading />
        <div className="todo-container">
          <AppTodoInput addTodo={handleTodoInput} />
          <TodoItems deleteTodo={handleDeleteItem} todoItems={todoItems} />
        </div>
      </div>
    </center>
  );
}

export default App;
