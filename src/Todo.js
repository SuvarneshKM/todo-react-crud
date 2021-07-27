import './Todo.css'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react';


function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Need To Do ⏲"  />
            </ListItem>
        </List>
    )
}

export default Todo