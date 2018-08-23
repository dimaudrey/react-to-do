import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Workout', isCompleted: true },
        { description: 'Do Bloc checkpoint React To-Do: States and Prop', isCompleted: false },
        { description: 'Purchase a t-shirt', isCompleted: false },
        { description: 'Eat ice-cream', isCompleted: true }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted= { todo.isCompleted } />
          )}
       </ul>
      </div>
    );
  }
}

export default App;
