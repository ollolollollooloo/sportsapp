import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableRow,TableBody, TableCell, TableHead, Paper, Table, Button} from '@material-ui/core';
import axios from 'axios'

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

const rooms = []

function getRoom(){
  const rooms = []


  let id = window.location.pathname.split('/')[2]

  let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"

  let headers = {
     "Authorization": "Bearer "+localStorage.getItem("sportsapp-token")
  }

  axios.get(domain+'/room/'+id+'/show', {"headers": headers}).then(function (response) {
    console.log(response.data)
    const rooms = response.data[0].rooms
  }).catch(function (error) {
    console.log(error.response)
  })

  return rooms
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
  const g = getRoom()
  console.log(g)

  const handleSubmit = (e) => {
      const rooms = []


      let id = window.location.pathname.split('/')[2]

      let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"

      let headers = {
         "Authorization": "Bearer "+localStorage.getItem("sportsapp-token")
      }

      axios.get(domain+'/room/'+id+'/show', {"headers": headers}).then(function (response) {
        console.log(response.data)
        const rooms = response.data[0].rooms
      }).catch(function (error) {
        console.log(error.response)
      })

  }
  
  return(
    <Paper className={classes.root}>
      <h1>&nbsp;{rooms.room_name}</h1>
      Address: {rooms.game_location_address} <br/>
      Sport: {rooms.basketball} <br/>
      Date: {rooms.august} <br/>

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

