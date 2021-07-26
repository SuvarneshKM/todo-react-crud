import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Drink water','Drink coffee','run 10km']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    console.log('👾','I am coming!!!');
    setTodos([...todos, input])
  }

  return (
    <div className="App">
      <h1>ToDo App 🚀 </h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
