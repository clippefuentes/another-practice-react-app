import React, { useState } from 'react';

const AddNewTodo = ({ addTodos }) => {
  const [todos, setTodos] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(todos);
    setTodos('');
  }

  return (
    <form>
      <label htmlFor='todo'>To Do</label>
      <input 
        type='text' id='todo'
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <input type='submit' onClick={handleSubmit}/>
    </form>
  )
}

export default AddNewTodo;