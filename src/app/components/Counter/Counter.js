import React, { useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonCounter: {
    margin: theme.spacing(1),
  },
  numbercounter: {
    display: "flex",
    alignItems: "center",
  },
  counterBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: "1px solid lightgrey",
  },
}));

export default function Counter({ count, incrementCount, decrementCount }) {
  const classes = useStyles();

  useEffect(
    function () {
      console.log("Cambió el count");
    },
    [count]
  );

  return (
    <div>
      <div className={classes.counterBody}>
        {count > 0 ? (
          <Button onClick={decrementCount} className={classes.buttonCounter}>
            -
          </Button>
        ) : (
          <Button
            onClick={decrementCount}
            className={classes.buttonCounter}
            disabled
          >
            -
          </Button>
        )}
        <p className={classes.numbercounter}>{count}</p>
        {count < 8 ? (
          <Button onClick={incrementCount} className={classes.buttonCounter}>
            +
          </Button>
        ) : (
          <Button
            onClick={incrementCount}
            className={classes.buttonCounter}
            disabled
          >
            +
          </Button>
        )}
      </div>
    </div>
  );
}
