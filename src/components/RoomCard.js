import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Badge
} from '@material-ui/core';
import {
    Person
} from '@material-ui/icons';
import basketballImg from '../img/basketball.jpg';

export default function RoomCard() {
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
                        Basketball <Badge badgeContent={4} color="primary">
                        <Person />
                    </Badge>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Date
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Address
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}