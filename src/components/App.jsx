import React, { Component } from 'react';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from 'components/ColorPicker/colorPickerOptions';
import TodoList from './TodoList/TodoList';
import initialTodos from './TodoList/todos.json';


class App extends Component {
state = {
  todos: initialTodos,
};

deleteTodo = todoId => {
  this.setState(prevState => ({
    todos: prevState.todos.filter(todo => todo.id !== todoId),
  }));
};


render() {
  const { todos } = this.state;
  
  const quantityTodos = todos.length;
  const quantityCompletedTodos = todos.filter(todo => todo.completed).length;
  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions()}/> */}
      <>
        <div>
          <p>Total quantity todos: {quantityTodos}</p>
          <p>Quantity finished todos: {quantityCompletedTodos}</p>
        </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> 
      </>
    </>
  );
};

};

export default App;