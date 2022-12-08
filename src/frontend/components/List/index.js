import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import ListItemButton from '@mui/material/ListItemButton';
import { List, ListItem, ListItemText, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

const TodoList = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/todos`)
    .then(res => {
      console.log(res.data);
      setTodos(res.data)
    })
  }, [])


  return (
    <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
    {todos.map((value) => {
      const labelId = `checkbox-list-label-${value}`;
      return (
          <ListItem
            key={value.id}
           >
            <ListItemText id={labelId} primary={`${value.description}`} secondary={`${value.status}`}/>
            <Button>Delete</Button>
          </ListItem>
      );
    })}
  </List>
  );
};

export default TodoList;