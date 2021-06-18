import React from "react";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } = {} }) => {
  console.log(confirmed, recovered, deaths, lastUpdate);
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justify="center">
        <Card className={styles.infected}>
          <CardContent>
            <Typography>Infected</Typography>
            <Typography>{confirmed.value}</Typography>
            <Typography>{lastUpdate}</Typography>
            <Typography>Number of active cases from COVID-19.</Typography>
          </CardContent>
        </Card>
        <Card className={styles.recovered}>
          <CardContent>
            <Typography>Recovered</Typography>
            <Typography>{recovered.value}</Typography>
            <Typography>{lastUpdate}</Typography>
            <Typography>Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Card>
        <Card className={styles.deaths}>
          <CardContent>
            <Typography>Deaths</Typography>
            <Typography>{deaths.value}</Typography>
            <Typography>{lastUpdate}</Typography>
            <Typography>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Info;
