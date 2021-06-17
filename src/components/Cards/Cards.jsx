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
        <Card>
          <CardContent>
            <Typography
              className={styles.infected}
              cardTitle="Infected"
              value={confirmed.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of active cases from COVID-19."
            ></Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              className={styles.recovered}
              cardTitle="Recovered"
              value={recovered.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of recoveries from COVID-19."
            ></Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              className={styles.deaths}
              cardTitle="Deaths"
              value={deaths.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of deaths caused by COVID-19."
            ></Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Info;
