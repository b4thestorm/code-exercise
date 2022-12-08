import React, {useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Formik, Form } from "formik";
import { Box, TextField, Typography, Button} from '@material-ui/core';
import axios from 'axios';
import TodoList from '../components/List'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '1236px'
  },
  formField: {
    height: '64px',
    width: '325px',
  },
  submitButton: {
    marginLeft: '50px',
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/todos`)
    .then(res => {
      setTodos(res.data)
    })
  })


  const submitForm = (data) => {
    axios.post(`http://localhost:4000/todo`, {data})
    .then(res => {
      console.log(res.data);
    })
  }

  return (
     <Box className={classes.container}>
        <Typography variant="h1" >TodoList</Typography>
        <Formik
         initialValues={{ description: "", status: "active"}}
          onSubmit={(values) => {
            console.log('hey there', values)
            submitForm(values)
          }}
        >
        {({ values, errors, handleChange, handleSubmit}) => (
        <Form >
          <TextField
            id="filled-hidden-label-small"
            name="description"
            onChange={handleChange}
            placeholder={'write todo here'}
            size="small"
            className={classes.formField}
          />
          <Button variant="outlined" className={classes.submitButton} onClick={handleSubmit}>Add Todo</Button>
        </Form>
        )}
       </Formik>
       {todos ? (<TodoList items={todos} />) : ( 
          <Typography>No Todos Yet</Typography>
        )}
    </Box>
  );
};

export default HomePage;