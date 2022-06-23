import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "react-google-charts";

const LineData = [
  ["x", ""],
  [319, 44],
  [318, 95],
  [317, 54.2],
  [316, 218],
  [315, 50],
  [314, 63.5],
  [313, 33.5],
  [312, 13],
  [311, 70],
  [310, 16.5],
  [309, 12],
  [308, 7.9],
  [307, 9]
];

const LineChartOptions = {
  hAxis: {
    title: "Cleanup drive no."
  },
  vAxis: {
    title: "Waste removed (in kilograms)"
  },
  series: {
    1: { curveType: "function" }
  }
};
const card1 = (
  <React.Fragment>
    <CardMedia
      component="img"
      height="140"
      image="https://64.media.tumblr.com/25d0747e35fe5fb29f752a15ad805ff5/tumblr_p90h62Ss9N1vcdauko1_1280.png"
      alt="website-cover"
    />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Hi there! We're a passionate bunch of humans on a mission to save the
        Earth. It is an earnest effort of active citizens to bring about change
        at the ground level. We've cleaned up more than 9 tons of
        non-biodegradable waste and we are on a mission to save the Earth who
        believe in Inclusive, Organic, and Decentralized Climate Action
      </Typography>
      <Typography sx={{ fontSize: 20 }}> #ThereIsNoEarthB </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardMedia
      component="img"
      height="140"
      image="/img/blue.jpg"
      alt="website-cover"
    />
    <CardContent>
      <Typography
        variant="h6"
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      >
        Connect with @ThereIsNoEarthB
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Link
            variant="h5"
            href="https://www.instagram.com/thereisnoearthb/?hl=en"
          >
            {" "}
            Instagram{" "}
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link variant="h5" href="https://www.facebook.com/thereisnoearthb/">
            {" "}
            FaceBook{" "}
          </Link>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Link variant="h5" href="https://www.linkedin.com/in/thereisnoearthb">
            {" "}
            LinkedIn{" "}
          </Link>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Link
            variant="h5"
            href="https://twitter.com/ThereIsNoEarthB?s=20&t=4qH8I81zGOL50U7XOy6vCA"
          >
            {" "}
            Twitter{" "}
          </Link>
        </Grid>
      </Grid>

      <div>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </div>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardMedia
      component="img"
      height="140"
      image="/img/noearthb.jpeg"
      alt="website-cover"
    />

    <CardActions>
      <p className="tweet"> <a style={{ color: '#234a8d' }} href={"https://twitter.com/intent/tweet?url=https://thereisnoearthb.org&text=I+stand+in+solidarity+with+@thereisnoearthb.&hashtags=ThereIsNoEarthB"} >tweet with #ThereIsNoEarthB </a></p>
    </CardActions>
  </React.Fragment>
);

export default function Home() {
  return (
    <div>
      <div className="centered">
        <Chart
          height={"410px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
      <div className="hi">
        <p> 11,031 </p>
      </div>
      <p className="hello"> People volunteered </p>

      <div className="hi">
        <p> 19,545.135 kg </p>
      </div>
      <p className="hello"> Amount of non-biodegradable waste in kg </p>

      <Box m={2} pt={3}>
        <Box sx={{ minWidth: 275, p: 10, m: 10 }} variant="contained">
          <Card variant="outlined" color="red">
            {card3}
          </Card>
        </Box>
        <span className="hi">
          {" "}
          <p> Who are we? </p>{" "}
        </span>
        <Helmet>
          <style>{"body { background-color: #E1D3B6; }"}</style>
        </Helmet>
        <Box sx={{ minWidth: 275, p: 10, m: 10 }} variant="contained">
          <Card variant="outlined" color="red">
            {card1}
          </Card>
        </Box>
        <span className="hi">
          <p> Keep up with the planet </p>
        </span>
        <Box sx={{ minWidth: 275, p: 10, m: 10 }} variant="contained">
          <Card variant="outlined" color="red">
            {card2}
          </Card>
        </Box>
      </Box>
    </div>
  );
}
