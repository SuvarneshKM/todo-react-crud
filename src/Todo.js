import './Todo.css'
import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { useState } from 'react';
import db from './firebase';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Update the ToDo</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Need To Do ⏲" />
                </ListItem>
                <EditIcon className="update" onClick={e => setOpen(true)} />
                <DeleteForeverIcon className="delete" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </List>
        </>
    )
}

export default Todo