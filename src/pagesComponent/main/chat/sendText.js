import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const classes = {
  button: {
    width: "44px",
    height: "44px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textField: {
    height: "44px",
    borderRadius: "8px",
    border: "2px solid #D0D5DD",
    fontSize: "16px",
    padding: "0 14px",
    flex: 1,
    minWidth: 0,
  },
};
const SendText = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    //send message to server

    props.onSuccess({
      id: new Date().toDateString(),
      content: inputValue,
      left: false,
    });
    setInputValue("");
  };
  return (
    <Grid container style={{ padding: "24px", gap: "12px" }}>
      <Grid item style={{ flex: "1", minWidth: 0, display: "flex" }}>
        <TextField
          fullWidth
          multiline
          minRows={1}
          maxRows={2}
          variant='outlined'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  disableTouchRipple
                  disableRipple
                  sx={{ background: "transparent" }}
                  onClick={onSubmit}
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.3307 1.66663L9.16406 10.8333M18.3307 1.66663L12.4974 18.3333L9.16406 10.8333M18.3307 1.66663L1.66406 7.49996L9.16406 10.8333'
                      stroke='#000'
                      stroke-width='1.67'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SendText;
