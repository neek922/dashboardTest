import React from 'react';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle,
          IconButton,
          Typography,  } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import onAddColumn from './onAddColumn.js';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const _onAddColumn = () => {
    setOpen(false);
    onAddColumn();
  };
  
  return (
    <div>
      <IconButton variant="outlined" color="secondary" onClick={handleClickOpen}>
        <AddCircleOutlineIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Создать колонку</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="textFieldNameColumns"
            type="name"
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
           <Typography variant="body1" gutterBottom> Отменить </Typography> 
          </Button>
          <Button onClick={_onAddColumn} color="secondary">
            <Typography variant="body1" gutterBottom> Создать </Typography> 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}