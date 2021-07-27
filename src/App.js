import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Drink water', 'Drink coffee', 'run 10km']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>ToDo App 🚀 </h1>
      <form>
        <FormControl>
          <InputLabel>⏩ Write A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;