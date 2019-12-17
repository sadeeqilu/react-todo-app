import React, {
  Component
} from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn react",
        completed: false
      },
      {
        id: 2,
        title: "Rest",
        completed: false
      },
      {
        id: 3,
        title: "Sleep",
        completed: false
      },
    ],
  }

      markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }) });
      }

      delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      }


  render() {
    return (
      <div className="App">
      <div className="Container">
        <Header />
        <AddTodo />
        <Todos todos = {
          this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
      </div>
    );
  }

}

export default App;
