import React from 'react';
import RoomCard from './RoomCard';
import {
    Grid
} from '@material-ui/core';

export default function Rooms(props) {
    console.log(props);
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <RoomCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RoomCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RoomCard />
                </Grid>
            </Grid>
        </div>
    )
}