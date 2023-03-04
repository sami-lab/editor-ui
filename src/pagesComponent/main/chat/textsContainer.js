import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import ChatText from "./chatText";

const TextsContainer = (props) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.data]);
  return (
    <Grid container direction='column'>
      {props.data.map((d) => (
        <ChatText key={d.id} left={d.left} content={d.content} />
      ))}

      <div ref={bottomRef} />
    </Grid>
  );
};

export default TextsContainer;
