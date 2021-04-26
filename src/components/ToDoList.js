import React from 'react';
import { ThemeContext } from './../contexts/ThemeContext';

class ToDoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: '140px',
          textAlign: 'center'
        }}
      >
        <p className="item">Plan A</p>
        <p className="item">Plan B</p>
        <p className="item">Plan C</p>
      </div>
    )
  }
}

export default ToDoList