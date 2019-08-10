import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UseFormInput } from '../customhooks';
import axios from 'axios';
import Rooms from './Rooms';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(url, options) {
      const response = await fetch(url, options);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }
    fetchData(url, options);
  }, []);

  return { data, loading };
};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    //eg.name.value

    let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"
    let headers = {
      "Authorization": "Bearer " + localStorage.getItem("sportsapp-token")
    }

    let body = {
      "room_name": name.value,
      "sport": "basketball",
      "location_coordinates": 'cebu',
      "location_address": game_location_address.value,
      "game_date": game_date.value,
      "emails": "AleksanderAndersen@armyspy.com",
      "room_role": 'admin',
      "members": [],
      "number_of_players": 0
    }

    axios.post(domain + "/room", { body }, { "headers": headers })
      .then(function (response) {
        window.location.replace("/room/1")
        console.log(response.data)
      }.bind(this)).catch(function (error) {
        console.log(error.response)
      }.bind(this))
  }

  const URL = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1/room";
  const options = {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("sportsapp-token")
    }
  }
  const rooms = useFetch(URL, options);

  return (
    <div>
      <Rooms {...rooms} />
    </div>
  )
}

