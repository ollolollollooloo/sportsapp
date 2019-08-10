import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import UseFormInput from '../customhooks/UseFormInput'
import {
  TextField,
  MenuItem
} from '@material-ui/core'
import axios from 'axios'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function Dashboard() {
  const classes = useStyles()

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const name = UseFormInput('');
  const game_date = UseFormInput('');
  const game_location_address = UseFormInput('');
  const number_of_players = UseFormInput('');
  const sport = UseFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //eg.name.value

    let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"
    let headers = {
        "Authorization": "Bearer "+localStorage.getItem("sportsapp-token")
    }

    let body = {
      "room_name": name.value,
      "sport": sport,
      "location_coordinates": 'cebu',
      "location_address": game_location_address.value,
      "game_date": game_date.value,
      "emails": "AleksanderAndersen@armyspy.com",
      "room_role": 'admin',
      "members": [],
      "number_of_players": 0,
      "owner_id": 1
    }

    axios.post(domain+"/room", {room:body}, {"headers": headers})
    .then(function (response) {
      window.location.replace("/room/1")
      console.log(response.data)
    }.bind(this)).catch(function (error) {
      console.log(error.response)
    }.bind(this))
  }

  return(
    <>
      <Paper className={classes.root}>
        <h1>  Rooms</h1>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Paper className={classes.root}>
        <h1>  My Rooms <Button variant="outlined" onClick={handleOpen} className={classes.button}>Create a room</Button></h1>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Room</h2>
            <p id="simple-modal-description">
              Be nice to other players.
            </p>
            <form onSubmit={handleSubmit}>
              <TextField
                {...name}
                id="name"
                label="Sports name"
                margin="normal"
                fullWidth
              />
              <TextField
                {...sport}
                id="standard-select-currency"
                select
                label="Sport"
                margin="normal"
                fullWidth
              >
                <MenuItem value="basketball">Basketball</MenuItem>
                <MenuItem value="badminton">Badminton</MenuItem>
                <MenuItem value="soccer">Soccer</MenuItem>
                <MenuItem value="tennis">Tennis</MenuItem>
                <MenuItem value="volleyball">Volleyball</MenuItem>
              </TextField>

              <TextField
                {...game_date}
                id="game_date"
                label="When will be the day of the game?"
                margin="normal"
                fullWidth
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                {...game_location_address}
                id="standard-select-currency"
                label="Where is this held?"
                margin="normal"
                fullWidth
              />

              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
            </form>
          </div>
        </Modal>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

