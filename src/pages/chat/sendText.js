import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

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
    <Grid container style={{ gap: "12px" }}>
      <Grid item style={{ flex: "1", minWidth: 0, display: "flex" }}>
        <TextField
          placeholder='Start a New Chat'
          fullWidth
          multiline
          minRows={1}
          maxRows={2}
          variant='outlined'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: "12px",

            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
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
