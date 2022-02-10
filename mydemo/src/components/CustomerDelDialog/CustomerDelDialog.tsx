import React,{memo} from 'react';
import { Dialog,DialogTitle,DialogContent,DialogActions,Button,DialogContentText} from "@mui/material";

interface ICustomerDelDialogProp {
  open:boolean;
};

export const CustomerDelDialog = memo((props:ICustomerDelDialogProp) => {
  const {open} = props;
  return (
    <Dialog open={open} >
      <DialogTitle>
         Alert
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Disagree</Button>
        <Button>Agree</Button>
      </DialogActions>
    </Dialog>
  );
});