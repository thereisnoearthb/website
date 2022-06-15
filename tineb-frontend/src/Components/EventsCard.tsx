import React, { Component } from "react";
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@material-ui/core";
import Add from '@mui/icons-material/Add';

export interface IEventsCardsProps{
    cardTitle: string;
    imagePath: string;
    eventDate: string;
    eventVenue: string;
}

export default class EventsCard extends Component<IEventsCardsProps> {

    public render() {
        return (
            <>
                <Card style={{borderStyle:'solid'}}>
                    <CardHeader
                        title={this.props.cardTitle}
                        action={
                            <IconButton style={{color:'white'}}>
                              <Add />
                            </IconButton>
                          }
                        style={{color:'white', backgroundColor:'#234A8D', textAlign:'center', fontWeight: 700, fontSize:'25px' }}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={process.env.PUBLIC_URL + `${this.props.imagePath}`}
                        alt={this.props.cardTitle}
                        style={{objectFit:'inherit'}}
                    />
                    <CardContent style={{backgroundColor:"#FFA800"}}>
                        <Typography align="center" style={{fontStyle:'bold'}}>
                            <b> 
                                {this.props.eventDate}
                                <br />
                                {this.props.eventVenue}
                            </b>
                        </Typography>
                    </CardContent>
                </Card>
                
            </>
        );
    }
}