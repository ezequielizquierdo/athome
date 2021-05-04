import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: '4vh',
    backgroundColor: '#f5f5f5',
    
  },

  button: {
      color: "#000000",
      letterSpacing: '0.5px',
      fontSize: '0.6rem',

  },

  group: {
    display: 'flex',
    borderRadius: '4px',
    width: `100%`,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

}));

export default function ButtonsNav() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <ButtonGroup
      className={classes.group}
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button onClick={() => history.push('/categories/escritorios')} className={classes.button}>Escritorios</Button>
        <Button onClick={() => history.push('/categories/sillas')} className={classes.button}>Sillas</Button>
        <Button onClick={() => history.push('/categories/sillones')} className={classes.button}>Sillones</Button>
        <Button onClick={() => history.push('/categories/accesorios')} className={classes.button}>Accesorios</Button>

      </ButtonGroup>
    </div>
  );
}
