import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, Button} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({

}));

const TodoList = ( {items} ) => {
  const classes = useStyles();

  const deleteTodo = (id) => {
    var answer = prompt('Are you sure you want to delete this todo item')
    if (answer) {
      axios.delete(`http://localhost:4000/todo/${id}`)
      .then(() => 'todo was deleted');
    } else {
      console.log('....')
    }
  }


  return (
    <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
    {items.map((value) => {
      const labelId = `checkbox-list-label-${value}`;
      return (
          <ListItem
            key={value.id}
           >
            <ListItemText id={labelId} primary={`${value.description}`} secondary={`${value.status}`}/>
            <Button onClick={() => deleteTodo(value.id)}>Delete</Button>
          </ListItem>
      );
    })}
  </List>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
  items: []
};

export default TodoList;