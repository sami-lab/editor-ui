import React, { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import TextsContainer from "./textsContainer";
import SendText from "./sendText";

const sampleData = [
  {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    left: false,
  },
  {
    id: 2,
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    left: true,
  },
  {
    id: 3,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    left: false,
  },
  {
    id: 4,
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    left: true,
  },
  {
    id: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    left: false,
  },
  {
    id: 6,
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    left: true,
  },
];
const ChatBox = () => {
  const [data, setData] = useState(sampleData);

  const onSuccess = (responseData) => {
    setData((d) => [...d, responseData]);
  };
  return (
    <>
      <Grid
        container
        direction='column'
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          sx={{
            maxHeight: "100%",
            minHeight: "150px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <TextsContainer data={data} />
        </Grid>
        <Divider />

        <SendText onSuccess={onSuccess} />
      </Grid>
    </>
  );
};

export default ChatBox;
