import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [{
        id: uuid.v4(),
        title: 'Learn react',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Rest',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Sleep',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return ( <
      Router >
      <
      div className = "App" >
      <
      div className = "Container" >
      <
      Header / >
      <
      AddTodo addTodo = {
        this.addTodo
      }
      / > <
      Todos todos = {
        this.state.todos
      }
      markComplete = {
        this.markComplete
      }
      delTodo = {
        this.delTodo
      }
      /> < /
      div > <
      /div> <
      /Router>
    );
  }
}

export default App;