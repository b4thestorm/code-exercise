import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Formik, Form } from "formik";
import { Box, TextField, Typography, Button} from '@material-ui/core';
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

  return (
     <Box className={classes.container}>
        <Typography variant="h1" >TodoList</Typography>
        <Formik
         initialValues={{ description: "", status: "active"}}
          onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          }}
        >
        {({ values, errors, handleChange, handleSubmit}) => (
        <Form onSubmit={handleSubmit} >
          <TextField
            id="filled-hidden-label-small"
            name="item"
            onChange={handleChange}
            placeholder={'write todo here'}
            size="small"
            className={classes.formField}
          />
          <Button variant="outlined" className={classes.submitButton}>Add Todo</Button>
        </Form>
        )}
       </Formik>
       <TodoList/>
    </Box>
  );
};

export default HomePage;