import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Formik, Form } from "formik";
import { Box, TextField, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formField: {
    height: '64px',
    width: '325px',
    marginRight: '50px',
  },
  submitButton: {
    marginLeft: '50px',
  }
}));

const HomePage = () => {
  const classes = useStyles();

  useEffect(() => {

  }, [])

  return (
     <Box className={classes.container}>
        <Formik
         initialValues={{ item: "", status: "active"}}
          onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          }}
        >
        {({ values, errors, handleChange, handleSubmit}) => (
        <Form onSubmit={handleSubmit}>
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
    </Box>
  );
};

export default HomePage;