import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const ChatText = (props) => {
  return (
    <Grid
      key={props.key}
      item
      sx={{
        p: "24px",
        width: "100%",
        background: props.left ? "#F7F7F8" : "#FFFFFF",
        color: props.left ? "#374251" : "#343541",
        borderBottom: "1px solid #d9d9e3",
      }}
    >
      <Grid
        container
        spacing={2}
        //justifyContent={props.left ? "flex-start": "flex-end" }
      >
        <Grid item>
          <Avatar
            src={
              props.left
                ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            }
          />
        </Grid>
        <Grid item flex={1}>
          <Typography variant='body1' sx={{ whiteSpace: "pre-line" }}>
            {props.content}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatText;
