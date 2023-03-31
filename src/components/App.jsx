import React, { Component } from 'react';
import shortid from 'shortid';

// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
// import colorPickerOptions from 'components/ColorPicker/colorPickerOptions';
import TodoList from './TodoList/TodoList';
import initialTodos from './TodoList/todos.json';
import { TodoEditor } from './TodoList/TodoEditor';
import { Filter } from './TodoList/Filter';
// import { FormContainer } from './Form/FormContainerContainer';


class App extends Component {
state = {
  todos: initialTodos,
  filter: '',
};

deleteTodo = todoId => {
  this.setState(prevState => ({
    todos: prevState.todos.filter(todo => todo.id !== todoId),
  }));
};

toggleCompleted = todoId => {

  this.setState(prevState => ({
    todos: prevState.todos.map(todo => 
      todo.id === todoId 
      ? {...todo, completed: !todo.completed} 
      : todo
    )
  }))
};

addTodo = text => {

  const todo = {
    id: shortid.generate(),
    text,
    completed: false,
  };
  
  this.setState(({ todos }) => ({
    todos: [todo, ...todos],
  }));
};

changeFilter = e => {
  this.setState({
    filter: e.currentTarget.value
  })
};

getVisibleTodos = () => {
  const { todos, filter } = this.state;

  const normalizedFilter = filter.toLowerCase().trim();
  return todos.filter(todo => 
    todo.text.toLowerCase().includes(normalizedFilter));
};

getCompletedTodoCount = () => {
  const { todos } = this.state;
  return todos.filter(todo => todo.completed).length;
}

render() {
  const { todos, filter } = this.state;
  const quantityTodos = todos.length;
  const quantityCompletedTodos = this.getCompletedTodoCount();
  const visibleTodos = this.getVisibleTodos();

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

      <TodoEditor onSubmit={this.addTodo}/>

      <Filter value={filter} onChange={this.changeFilter} />

      <TodoList todos={visibleTodos} 
      onDeleteTodo={this.deleteTodo} 
      onToggleCompleted={this.toggleCompleted} /> 
      {/* <FormContainer /> */}
      </>
    </>
  );
};

};

export default App;