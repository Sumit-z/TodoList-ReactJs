import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, deleteTodo }) => {
  return (
    <div className="task-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          deleteTodo={deleteTodo}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
