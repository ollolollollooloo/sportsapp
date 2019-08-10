// import { useState } from 'react';
// import axios from 'axios'

// export default function GetRoom(initialValue) {
//     const [room, setValue] = useState(initialValue)

//     function handleChange(e) {

// 	    let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1"

// 	    let headers = {
// 	        "Authorization": "Bearer "+localStorage.getItem("sportsapp-token")
// 	    }

// 	    let id = 1

// 	    axios.get(domain+'/room/'+id+'/show', {}, {"headers": headers}).then(function (response) {
// 	      setValue(response.data);
// 	      console.log(response.data)
// 	    }).catch(function (error) {
// 	      console.log(error.response)
// 	    })
//     }

//     return {
//         room,
//         onChange: handleChange
//     }
// }