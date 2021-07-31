import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
    })

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