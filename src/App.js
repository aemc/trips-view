import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { trips } from './__mocks__/trips';

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {trips.map(trip => {
        return (
          <Card>
            some card here
          </Card>
        )
      })}
    </div>
  );
}

export default App;
