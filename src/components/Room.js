import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableRow,TableBody, TableCell, TableHead, Paper, Table, Button} from '@material-ui/core';
import axios from 'axios'
import GetRoom from '../customhooks/GetRoom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(dire, sentinel) {
  return { dire, sentinel};
}

function getroom(e) {

 let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"

 let headers = {
     "Authorization": "Bearer "+localStorage.getItem("sportsapp-token")
 }

 let id = 1

 axios.get(domain+'/room/'+id+'/show', {}, {"headers": headers}).then(function (response) {
   console.log(response.data)
 }).catch(function (error) {
   console.log(error.response)
 })
}

const members = [
  createData('Test name', 'Test name'),
  createData('Test name', 'Test name'),
  createData('Test name', 'Test name'),
  createData('Test name', 'Test name'),
  createData('Test name', 'Test name')
];

export default function Room() {
  const classes = useStyles()

  getroom()

  return(
    <Paper className={classes.root}>
      <h1>Basketball game!</h1>
      Address: cebu <br/>
      Sport: Basketball <br/>
      Date: August 1, 2019 <br/>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((row,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">{row.dire}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="outlined" className={classes.button}>Join room</Button>
    </Paper>
  )
}

