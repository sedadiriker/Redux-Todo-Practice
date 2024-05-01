import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clrTodo } from "../../store/todoReducer"

const TodoList = () => {
  const todolist = useSelector((state) => state.todoList)
  const dispatch = useDispatch()
  const handleClearList = () => {dispatch(clrTodo())}

  console.log(todolist)
  return (
    <div>
      <div>
        {todolist.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
