import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import EventsCard  from './EventsCard.tsx';

const StyledHeaderDiv = styled('div')`
  font-size:42px;
  font-family:Domine;
  font-weight:400;
  text-align:center;
  color:#58451E
`;
export default class Events extends Component {
    public render() {
        return (
            <>
                <StyledHeaderDiv>
                    Events
                </StyledHeaderDiv>
                <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={4}>
                    <EventsCard 
                        cardTitle="Beach Cleanup"
                        imagePath="/img/Elliot_Beach_Cleanup.jpg"
                        eventDate="14th May, 2022"
                        eventVenue="SATURDAY | GOA | 8 AM"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <EventsCard 
                        cardTitle="Sanjay Van Cleanup"
                        imagePath="/img/Sanjay_Van_Cleanup.jpg"
                        eventDate="15th May, 2022"
                        eventVenue="SATURDAY | DELHI | 8 AM"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <EventsCard 
                        cardTitle="Hebbal Lake Cleanup"
                        imagePath="/img/Hebbal_lake_Cleanup.jpg"
                        eventDate="16th May, 2022"
                        eventVenue="SATURDAY | BANGALORE | 8 AM"
                    />
                </Grid>
            </Grid>
            </>
        );
    }
}