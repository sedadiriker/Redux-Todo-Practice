const initialState = {
    todoList: [{ id: new Date().getTime(), text: "Work hard", completed: false }],
}

const add = "ADD"
const del = "DEL"
const clr = "CLR"
const toggle = "TOGGLE"

export const addTodo = (payload)=> ({type:add,payload:payload})
export const clrTodo = ()=>({type:clr})
export const delTodo = (id) => ({type:del,payload:id})
export const toggleTodo = (id) => ({type:toggle,payload:id})


export const todoReducer = (state=initialState, {type,payload}) => {
  switch(type) {
    case add :
        return {
            todoList:[...state.todoList, {id: new Date().getTime(),text:payload,completed:false}]
        }
    
    case clr :
        return initialState
    
    case del :
        return {
            todoList:state.todoList.filter((todo) => todo.id !== payload)
        }
    
    case toggle :
        return {
            todoList:state.todoList.map((todo) => 
            todo.id === payload
            ? {...todo, completed:!todo.completed}
            : todo)
        }
    
    default: 
        return state
  }
}

