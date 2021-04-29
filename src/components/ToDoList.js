import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';
import { TodoListContext } from './../contexts/TodoListContext'
import AddNewTodo from './AddNewTodo';

const  ToDoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext)
  const { todos, dispatch } = useContext(TodoListContext)
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('use effect', todos)
  }, [todos])

  const handleAddTodos = (todo) => {
    dispatch({ type: 'ADD_TODO', text: todo })
  }

  const handleRemoveTodos = (id) => {
    dispatch({ type: 'REMOVE_TODO', id: id })
  }


  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: '140px',
        textAlign: 'center'
      }}
    >
      {
        todos.length > 0 ? 
        (todos.map((todo) => {
          return (
            <p
              key={todo.id} className="item"
              onClick={() => handleRemoveTodos(todo.id)}
            >
              {todo.text}
            </p>
          )
        })) :
        <div> No Todos </div>
      }
      <button
        class="ui button primary"
        onClick={changeTheme}
      >
        Change Theme
      </button>

      <AddNewTodo addTodos={handleAddTodos} />
      <button onClick={() => setCount(count+1)}>Score: {count}</button>
    </div>
  )
}
// class ToDoList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: '140px',
//           textAlign: 'center'
//         }}
//       >
//         <p className="item">Plan A</p>
//         <p className="item">Plan B</p>
//         <p className="item">Plan C</p>
//         <button
//           class="ui button primary"
//           onClick={changeTheme}
//         >
//           Change Theme
//         </button>
//       </div>
//     )
//   }
// }

export default ToDoList