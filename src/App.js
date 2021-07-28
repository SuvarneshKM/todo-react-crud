import React from 'react';
import { Button, FormControl, InputLabel, Input, Snackbar } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import MuiAlert from '@material-ui/lab/Alert';


function App() {
  
  //Alert Function
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(['Drink water', 'Drink coffee', 'run 10km']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setOpen(true);
    setTodos([...todos, input]);
    setInput('');
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <h1>ToDo App 🚀 </h1>
      <form>
        <FormControl>
          <InputLabel>⏩ Write A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Todo Added!
          </Alert>
        </Snackbar>
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