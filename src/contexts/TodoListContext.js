import React, { createContext, useState } from 'react'

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: 'Task 1', id: 1 },
    { text: 'Task 2', id: 2 },
    { text: 'Task 3', id: 3 },
  ])

  const addTodos = (newTodo) => {
    setTodos([
      ...todos,
      { text: newTodo, id: todos.length+1 }
    ])
  }

  const removeToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoListContext.Provider
      value={{ todos, addTodos, removeToDo }}
    >
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider