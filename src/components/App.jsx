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
import IconButton from './TodoList/IconButton';
import { ReactComponent as AddIcon } from './icons/plus-321.svg';

import Modal from './TodoList/Modal';
// import { FormContainer } from './Form/FormContainer';
// import Clock from './Clock/Clock';
// import Tabs from './Tabs/Tabs';
// import tabs from './tabs.json';

const TODOS_KEY_LOCALE_STORAGE = 'todos_storage';

class App extends Component {
state = {
  todos: initialTodos,
  filter: '',
  showModal: false,
};


componentDidMount() {
  const todosValueStorage = JSON.parse(localStorage.getItem(TODOS_KEY_LOCALE_STORAGE));

  if(todosValueStorage) {
    this.setState({
      todos: todosValueStorage,
    })
  }
};

componentDidUpdate(prevProps, prevState) {
  if(this.state.todos !== prevState.todos) {
    localStorage.setItem(TODOS_KEY_LOCALE_STORAGE, JSON.stringify(this.state.todos))
  };
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

  this.toggleModal();
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
};

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }))
};

render() {
  const { todos, filter, showModal } = this.state;
  const quantityTodos = todos.length;
  const quantityCompletedTodos = this.getCompletedTodoCount();
  const visibleTodos = this.getVisibleTodos();

  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions()}/> */}
      {/* <Clock /> */}
      {/* <Tabs items={tabs}/> */}
      {/* <button 
      type='button'
      onClick={this.toggleModal}
      >Open Modal</button> */}
      {showModal && (
      <Modal onClose={this.toggleModal}>
        <TodoEditor onSubmit={this.addTodo}/>
        </Modal>)}
      <IconButton onClick={this.toggleModal} aria-label="Add Todo" >
        <AddIcon width="20px" height="20px" fill="#fff" />
      </IconButton>
      <>
        <div>
          <p>Total quantity todos: {quantityTodos}</p>
          <p>Quantity finished todos: {quantityCompletedTodos}</p>
        </div>

      <Filter 
      value={filter} 
      onChange={this.changeFilter} />

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