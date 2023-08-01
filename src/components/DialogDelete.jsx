import React from "react";
// MUI Stuff
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Icons
import DeleteIcon from "@mui/icons-material/Delete";
// Actions
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const DialogDelete = ({ id, libelle, entrepots, setEntrepots }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "entrepots", id));
      setLoading(false);
      setEntrepots(entrepots.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      alert("Suppression: Something went wrong!");
      setLoading(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: 50 }}
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Voulez vous supprimer{" "}
          <Typography variant="span" fontWeight="bold">
            {libelle}
          </Typography>{" "}
          ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Notez que cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <LoadingButton
            onClick={() => handleDelete(id)}
            autoFocus
            loading={loading}
          >
            Supprimer
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogDelete;
