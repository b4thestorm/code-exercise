import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

const TodoList = ( {items} ) => {
  const classes = useStyles();
  return (
    <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
    {items.map((value) => {
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

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
  items: []
};

export default TodoList;