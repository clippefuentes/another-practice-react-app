import React, { createContext, useReducer } from 'react'

export const TodoListContext = createContext();

const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { text: action.text, id: state.length+1}
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [
    { text: 'Task 1', id: 1 },
    { text: 'Task 2', id: 2 },
    { text: 'Task 3', id: 3 },
  ])

  // const addTodos = (newTodo) => {
  //   setTodos([
  //     ...todos,
  //     { text: newTodo, id: todos.length+1 }
  //   ])
  // }

  // const removeToDo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  return (
    <TodoListContext.Provider
      value={{ todos, dispatch }}
    >
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider