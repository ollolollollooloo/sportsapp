import React from 'react';
import RoomCard from './RoomCard';
import {
    Grid,
    CircularProgress,
    Typography
} from '@material-ui/core';

export default function Rooms({ data, isLoading }) {
    if (isLoading) {
        return <div style={{textAlign: "center"}}><CircularProgress /></div>
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
        Rooms
      </Typography>
        <Grid container spacing={3}>
            {data && data.length ? (
                data.map((item, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                        <RoomCard {...item} />
                    </Grid>
                ))
            ) : 'No data'}
        </Grid>
        </div>
    )
}