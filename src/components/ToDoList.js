import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';
import AddNewTodo from './AddNewTodo';

const  ToDoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const [todos, setTodos] = useState([
    { text: 'Task 1', id: 1 },
    { text: 'Task 2', id: 2 },
    { text: 'Task 3', id: 3 },
  ])

  const [count, setCount] = useState(0);
  const addTodos = (newTodo) => {
    setTodos([
      ...todos,
      { text: newTodo, id: todos.length+1 }
    ])
  }

  useEffect(() => {
    console.log('use effect', todos)
  }, [todos])

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
        todos.map((todo) => {
          return (
            <p id={todo.id} className="item">{todo.text}</p>
          )
        })
      }
      <button
        class="ui button primary"
        onClick={changeTheme}
      >
        Change Theme
      </button>

      <AddNewTodo addTodos={addTodos} />
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