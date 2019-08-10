import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Badge
} from '@material-ui/core';
import basketballImg from '../img/basketball.jpg';

export default function RoomCard(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Basketball"
                    height="200"
                    image={basketballImg}
                    title="Basketball"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.sport}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.game_date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.game_location_address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}