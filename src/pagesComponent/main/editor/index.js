import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Button,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
const sampleFiles = [
  {
    id: uuidv4(),
    name: "Untitled-1",
    hide: false,
    content: "",
  },
  {
    id: uuidv4(),
    name: "Untitled-1",
    hide: false,
    content: "",
  },
  {
    id: uuidv4(),
    name: "Untitled-1",
    hide: false,
    content: "",
  },
];

export default function index() {
  const theme = useTheme();
  const [files, setFiles] = useState(sampleFiles);
  const [selectedFile, setSelectedFile] = useState(sampleFiles[0]);

  const removeFileHandler = (id) => {
    let selectedChange = false;
    let newF = files.map((f) => {
      if (f.id === id) {
        f.hide = true;
        if (selectedFile && selectedFile.id === id) {
          selectedChange = true;
        }
      }
      return f;
    });
    setFiles(newF);
    if (selectedChange) {
      let visibleFiles = newF.filter((x) => !x.hide);
      setSelectedFile(visibleFiles[0] ? visibleFiles[0] : undefined);
    }
  };
  const addFileHandler = () => {
    setFiles((s) => [
      ...s,
      {
        id: uuidv4(),
        name: "Untitled-1",
        hide: false,
        content: "",
      },
    ]);
  };

  const savedAtHandler = () => {};
  const saveHandler = () => {};
  const runHandler = () => {};
  return (
    <Grid container direction={"column"} style={{ height: "100%" }}>
      {/* tabs */}
      <Grid item sx={{ width: "100%" }}>
        <Tabs
          value={selectedFile.id}
          onChange={(event, newValue) => {
            let newF = files.find((x) => x.id === newValue);
            if (newF) {
              setSelectedFile(newF);
            }
          }}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          textColor='inherit'
          //variant='scrollable'
          scrollButtons='auto'
          aria-label='full width tabs example'
          sx={{ borderBottom: "1px solid #0000001F" }}
        >
          {files
            .filter((x) => !x.hide)
            .map((item) => (
              <Tab
                label={
                  <Stack direction='row' gap={"10px"} alignItems='center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='12'
                      fill='none'
                      viewBox='0 0 19 12'
                    >
                      <path
                        fill={
                          selectedFile.id === item.id
                            ? "#000000"
                            : "rgba(0, 0, 0, 0.87)"
                        }
                        d='M1.594 6.719a.698.698 0 01-.719-.72.698.698 0 01.719-.718h15.812a.698.698 0 01.719.719.698.698 0 01-.719.719H1.594zm0 5.03a.698.698 0 01-.719-.718.698.698 0 01.719-.719h10.062a.699.699 0 01.719.72.698.698 0 01-.719.718H1.594zm0-10.062A.698.698 0 01.875.97a.698.698 0 01.719-.72h15.812a.698.698 0 01.719.72.698.698 0 01-.719.718H1.594z'
                      ></path>
                    </svg>

                    <Typography
                      variant='body2'
                      sx={{
                        fontWeight: 500,
                        color:
                          selectedFile.id === item.id
                            ? "#000000"
                            : "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {item.name}
                    </Typography>

                    <IconButton
                      sx={{ p: 0 }}
                      onClick={() => removeFileHandler(item.id)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='11'
                        height='11'
                        fill='none'
                        viewBox='0 0 11 11'
                      >
                        <path
                          fill='#000'
                          d='M.281 10.594a.9.9 0 00.656.28.9.9 0 00.657-.28L5.437 6.75l3.844 3.844a.9.9 0 00.656.28.9.9 0 00.657-.28.9.9 0 00.281-.657.9.9 0 00-.281-.656L6.75 5.437l3.844-3.843a.9.9 0 00.281-.657.9.9 0 00-.281-.656A.9.9 0 009.938 0 .9.9 0 009.28.28L5.437 4.125 1.595.28A.9.9 0 00.937 0 .9.9 0 00.281.28.9.9 0 000 .937a.9.9 0 00.281.657l3.844 3.843L.281 9.281A.9.9 0 000 9.937a.9.9 0 00.281.657z'
                          opacity='0.5'
                        ></path>
                      </svg>
                    </IconButton>
                  </Stack>
                }
                value={item.id}
                key={item.id}
                sx={{
                  background:
                    selectedFile.id === item.id
                      ? "rgba(0, 0, 0, 0.03)"
                      : "transparent",

                  borderRight: "1px solid #0000001F",
                }}
              />
            ))}
          <Tab
            label={
              <Stack direction='row' gap={"10px"} alignItems='center'>
                <AddIcon
                  sx={{ fontSize: "1rem", fill: theme.palette.primary.main }}
                />

                <Typography
                  variant='body2'
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                  }}
                >
                  Add new{" "}
                </Typography>
              </Stack>
            }
            sx={{
              background: "transparent",
            }}
            onClick={addFileHandler}
          />
        </Tabs>
      </Grid>
      {/* save run  */}
      {selectedFile && (
        <Grid item sx={{ width: "100%" }}>
          <Grid
            container
            sx={{
              background: "rgba(0, 0, 0, 0.03)",
              p: "7px 20px",
            }}
            gap={"12px"}
          >
            <Grid item>
              <Button
                size='small'
                sx={{
                  width: { sm: "110px", xs: "90px" },
                  fontWeight: 500,
                  fontSize: "12px",
                  color: theme.palette.primary.main,
                  background: "#fff",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    background: "#fff",
                  },
                }}
                onClick={savedAtHandler}
              >
                SAVED AT
              </Button>
            </Grid>
            <Grid item>
              <Button
                size='small'
                sx={{
                  width: { sm: "110px", xs: "90px" },
                  fontWeight: 500,
                  fontSize: "12px",
                  color: theme.palette.primary.main,
                  background: "#fff",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    background: "#fff",
                  },
                  px: "20px",
                }}
                onClick={saveHandler}
              >
                SAVE
              </Button>
            </Grid>
            <Grid item>
              <Button
                size='small'
                sx={{
                  width: { sm: "110px", xs: "90px" },
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#fff",
                  background: theme.palette.primary.main,
                  "&:hover": {
                    background: theme.palette.primary.main,
                    color: "#fff",
                  },
                  px: "20px",
                }}
                onClick={runHandler}
              >
                RUN
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {/* editor */}
      {selectedFile && (
        <Grid item sx={{ width: "100%", flex: 1 }}>
          {/* <div contentEditable  style={{ height: "100%", border: 0 }} /> */}
          <TextField
            multiline
            value={selectedFile.content}
            sx={{
              height: "100%",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "100%",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
            }}
            onChange={(e) => {
              setFiles((fil) =>
                fil.map((f) => {
                  if (f.id === selectedFile.id) {
                    f.content = e.target.value;
                  }
                  return f;
                })
              );
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
