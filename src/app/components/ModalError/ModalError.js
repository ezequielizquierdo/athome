import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import logo from "../../../assets/athome_black.png";
import error from "../../../assets/error.png";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    justifyContent: "space-evenly",
    top: "50%",
    left: "50%",
  },
  buttonFinish: {
    backgroundColor: "#8fbc8f",
    margin: "8px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#82ad82",
    },
  },
  contlogofooter: {
    display: "flex",
    justifyContent: "center",
  },
  logofooter: {
    display: "flex",
    width: "7vw",
  },
  contcheck: {
    display: "flex",
    justifyContent: "center",
  },
  check: {
    display: "flex",
    width: "7vw",
  },
  textconfirmation: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    gap: "1rem",
  },
}));

export default function ModalError({ onClick }) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    onClick();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.contlogofooter}>
        <img className={classes.logofooter} src={logo} alt="logo"></img>
      </div>

      <div className={classes.contcheck}>
        <img className={classes.check} src={error} alt="check"></img>
      </div>

      <div className={classes.textconfirmation}>
        <h1 id="simple-modal-title">Error!</h1>
        <p id="simple-modal-description">
          Tienes que completar todos los campos correctamente
        </p>

        <div className="modal-footer">
          <Button
            variant="contained"
            data-bs-dismiss="modal"
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Button
        type="submit"
        className={classes.buttonFinish}
        onClick={handleOpen}
      >
        Finalizar compra
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
