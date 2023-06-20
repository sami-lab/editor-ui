import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export default function AlertDialog({
  open,
  onClose,
  message,
  description,
  buttonText,
  onSubmit,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogContent sx={{ position: "relative", padding: "34px" }}>
        <div style={{ position: "absolute", top: "20px", right: "24px" }}>
          <IconButton
            sx={{ background: "#F6F6F6", borderRadius: "50%" }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item sx={{ mt: "40px" }}>
            <ErrorOutlineIcon sx={{ fill: "#F0671A", fontSize: "4rem" }} />
          </Grid>
          {/* message */}
          <Grid item sx={{ mt: "14px" }}>
            <Typography variant='h4' fontWeight='700' align='center'>
              {message}
            </Typography>
          </Grid>
          {/* description */}
          <Grid item sx={{ mt: "18px" }}>
            <Typography variant='subtitle1' fontSize='20px' align='center'>
              {description}
            </Typography>
          </Grid>
          {/* button */}
          <Grid item sx={{ mt: "25px" }}>
            <Button
              variant='contained'
              size='large'
              sx={{
                background: "#1ADB73",
                color: "#fff",
                borderRadius: "50px",
                textTransform: "none",
                padding: "10px 30px",
                boxShadow: "none",
              }}
              onClick={onSubmit}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
