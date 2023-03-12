import React, { useState } from "react";
import { Button, Grid, IconButton, Stack, useTheme } from "@mui/material";
import Header from "../../reusable/header";
import Navigator from "../../pagesComponent/main/navigator";
import Editor from "../../pagesComponent/main/editor/";
import Results from "../../pagesComponent/main/results/";
import Database from "../../pagesComponent/main/database/";
import ChatBox from "../../pagesComponent/main/chat";

import { Resizable } from "re-resizable";

export default function index() {
  const theme = useTheme();
  const navigatorMinWidth = 356;
  const databaseMinWidth = 356;
  const databaseMinHeight = 250;
  const [navigatorWidth, setNavigatorWidth] = React.useState(navigatorMinWidth);
  const [databaseWidth, setDatabaseWidth] = React.useState(databaseMinWidth);
  const [resultsHeight, setResultsHeight] = React.useState(databaseMinHeight);

  const [showNavigator, setShowNavigator] = useState(true);
  const [showEditor, setShowEditor] = useState(true);
  const [showResult, setShowResult] = useState(true);
  const [showDatabase, setShowDatabase] = useState(true);

  const showHideTabs = (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems='center'
      sx={{
        background: "rgba(0, 0, 0, 0.03)",
        p: "7px 4px",
        border: "1px solid #0000001F",
      }}
    >
      {/* button */}
      <Grid item>
        <Grid container gap={"6px"}>
          <Grid item>
            <Button
              startIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='10'
                  fill='none'
                  viewBox='0 0 12 10'
                >
                  <path
                    fill={showNavigator ? "#fff" : theme.palette.primary.main}
                    d='M0 10V8.75h12V10H0zm0-4.375v-1.25h12v1.25H0zM0 1.25V0h12v1.25H0z'
                  ></path>
                </svg>
              }
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: showNavigator ? "#fff" : theme.palette.primary.main,
                background: showNavigator
                  ? theme.palette.primary.main
                  : "transparent",
                "&:hover": {
                  color: showNavigator ? "#fff" : theme.palette.primary.main,
                  background: showNavigator
                    ? theme.palette.primary.main
                    : "transparent",
                },
                px: "20px",
              }}
              onClick={() => setShowNavigator((s) => !s)}
            >
              Navigator
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  fill='none'
                  viewBox='0 0 12 12'
                >
                  <path
                    fill={showEditor ? "#fff" : theme.palette.primary.main}
                    d='M11.086 3.102L10.02 4.168 7.832 1.981 8.898.914a.556.556 0 01.41-.164c.165 0 .301.055.41.164l1.368 1.367c.11.11.164.246.164.41 0 .165-.055.301-.164.41zM.75 9.062L7.203 2.61l2.188 2.188-6.454 6.453H.75V9.063z'
                  ></path>
                </svg>
              }
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: showEditor ? "#fff" : theme.palette.primary.main,
                background: showEditor
                  ? theme.palette.primary.main
                  : "transparent",
                "&:hover": {
                  color: showEditor ? "#fff" : theme.palette.primary.main,
                  background: showEditor
                    ? theme.palette.primary.main
                    : "transparent",
                },
                px: "20px",
              }}
              onClick={() => setShowEditor((s) => !s)}
            >
              Editor
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='10'
                  fill='none'
                  viewBox='0 0 12 10'
                >
                  <path
                    fill={showResult ? "#fff" : theme.palette.primary.main}
                    d='M4 7.781L11.063.72l.937.937-8 8L.281 5.938 1.22 5 4 7.781z'
                  ></path>
                  <path
                    fill={showResult ? "#fff" : theme.palette.primary.main}
                    d='M4 7.781l-.354.354.354.353.354-.353L4 7.78zM11.063.72l.353-.354-.354-.353-.353.353.354.354zm.937.937l.354.354.353-.354-.353-.353-.354.353zm-8 8l-.354.354.354.354.354-.354L4 9.656zM.281 5.938l-.353-.354-.354.354.354.353.353-.353zM1.22 5l.353-.353-.353-.354-.354.354L1.22 5zm3.135 3.135l7.062-7.063-.707-.707-7.063 7.063.708.707zm6.355-7.063l.937.938.708-.707-.938-.938-.707.707zm.937.23l-8 8 .708.708 8-8-.708-.707zm-7.292 8L.634 5.585l-.706.707 3.718 3.719.708-.707zm-3.72-3.01l.938-.938-.707-.707-.937.937.707.707zm.231-.938l2.781 2.78.708-.706-2.782-2.781-.707.707z'
                  ></path>
                </svg>
              }
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: showResult ? "#fff" : theme.palette.primary.main,
                background: showResult
                  ? theme.palette.primary.main
                  : "transparent",
                "&:hover": {
                  color: showResult ? "#fff" : theme.palette.primary.main,
                  background: showResult
                    ? theme.palette.primary.main
                    : "transparent",
                },
                px: "20px",
              }}
              onClick={() => setShowResult((s) => !s)}
            >
              Results
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='10'
                  fill='none'
                  viewBox='0 0 10 10'
                >
                  <path
                    fill={showDatabase ? "#fff" : theme.palette.primary.main}
                    d='M5 4.445c-1.49 0-2.697-.227-3.618-.681C.46 3.31 0 2.796 0 2.222c0-.583.46-1.1 1.382-1.548C2.303.224 3.509 0 5 0c1.49 0 2.697.225 3.618.674C9.54 1.123 10 1.639 10 2.222c0 .574-.46 1.088-1.382 1.542-.921.454-2.127.68-3.618.68zm0 2.777c-1.352 0-2.523-.203-3.514-.61C.496 6.203 0 5.712 0 5.138V3.75c0 .361.174.674.52.938.348.263.779.481 1.292.652.514.172 1.06.297 1.64.375.578.08 1.094.118 1.548.118.463 0 .981-.039 1.556-.118a9.435 9.435 0 001.631-.368c.514-.166.945-.382 1.292-.646.347-.263.521-.58.521-.95v1.388c0 .574-.495 1.065-1.486 1.472-.99.408-2.162.611-3.514.611zM5 10c-1.352 0-2.523-.204-3.514-.611C.496 8.982 0 8.491 0 7.917v-1.39c0 .362.174.674.52.938.348.264.779.482 1.292.653.514.171 1.06.296 1.64.375.578.079 1.094.118 1.548.118.463 0 .981-.04 1.556-.118a9.435 9.435 0 001.631-.368c.514-.167.945-.382 1.292-.646.347-.264.521-.58.521-.951v1.389c0 .574-.495 1.065-1.486 1.472C7.524 9.796 6.352 10 5 10z'
                  ></path>
                </svg>
              }
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: showDatabase ? "#fff" : theme.palette.primary.main,
                background: showDatabase
                  ? theme.palette.primary.main
                  : "transparent",
                "&:hover": {
                  color: showDatabase ? "#fff" : theme.palette.primary.main,
                  background: showDatabase
                    ? theme.palette.primary.main
                    : "transparent",
                },
                px: "20px",
              }}
              onClick={() => setShowDatabase((s) => !s)}
            >
              Database
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* search and download */}
      <Grid item>
        <Stack
          direction='row'
          alignItems='center'
          gap='7px'
          sx={{ p: "7px 4px" }}
        >
          <IconButton sx={{ p: 0 }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='none'
              viewBox='0 0 16 16'
            >
              <path
                fill='#000'
                d='M14.583 15.48L9.104 10a4.591 4.591 0 01-1.458.844 5.158 5.158 0 01-1.771.302c-1.5 0-2.77-.52-3.813-1.563C1.022 8.542.5 7.285.5 5.813c0-1.473.52-2.73 1.563-3.771C3.103 1 4.367.479 5.854.479 7.326.48 8.58 1 9.614 2.042c1.035 1.041 1.553 2.298 1.553 3.77 0 .598-.098 1.174-.292 1.73A5.287 5.287 0 0110 9.104l5.5 5.459-.917.916zM5.854 9.895c1.125 0 2.083-.4 2.875-1.198a3.95 3.95 0 001.188-2.885 3.95 3.95 0 00-1.188-2.886C7.938 2.13 6.98 1.73 5.854 1.73c-1.139 0-2.107.4-2.906 1.198-.799.799-1.198 1.76-1.198 2.886 0 1.125.4 2.086 1.198 2.885.799.799 1.767 1.198 2.906 1.198z'
              ></path>
            </svg>
          </IconButton>
          <div
            style={{
              width: "24px",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              transform: "rotate(90deg)",
            }}
          />
          <IconButton sx={{ p: 0 }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='16'
              fill='none'
              viewBox='0 0 17 16'
            >
              <path
                fill='#000'
                d='M8.5 11.714a.702.702 0 01-.264-.048.729.729 0 01-.24-.168L4.38 7.88a.663.663 0 01-.204-.515.748.748 0 01.228-.515.703.703 0 01.515-.216c.2 0 .372.072.515.216l2.348 2.372v-8.17A.698.698 0 018.5.333a.698.698 0 01.719.72v8.169L11.59 6.85a.703.703 0 01.515-.216c.2 0 .371.072.515.216a.703.703 0 01.215.515c0 .2-.072.372-.215.515l-3.618 3.618a.729.729 0 01-.24.168.702.702 0 01-.263.048zm-6.23 3.953a1.38 1.38 0 01-1.006-.431 1.38 1.38 0 01-.43-1.007v-2.707a.698.698 0 01.718-.719.698.698 0 01.719.719v2.707h12.458v-2.707a.698.698 0 01.719-.719.698.698 0 01.719.719v2.707c0 .384-.144.719-.432 1.007a1.38 1.38 0 01-1.006.43H2.271z'
              ></path>
            </svg>
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
  return (
    <Grid container direction='column'>
      <Grid item style={{ width: "100%" }}>
        <Header />
      </Grid>
      {/* table */}
      <Grid
        item
        style={{
          width: "100%",
          height: "calc(100vh - 87.7px)",
        }}
      >
        <Grid container wrap='nowrap' style={{ height: "100%" }}>
          {/* for sidebar */}
          {showNavigator && (
            <Grid item style={{ display: "flex" }}>
              <Resizable
                style={{ zIndex: 1100 }}
                size={{ width: navigatorWidth, height: "100%" }}
                enable={{ right: true, left: false, top: false, bottom: false }}
                onResizeStop={(e, direction, ref, d) => {
                  setNavigatorWidth((w) => w + d.width);
                }}
              >
                <Navigator drawerWidth={"inherit"} open={showNavigator} />
              </Resizable>
            </Grid>
          )}
          {/* for editor, results */}
          <Grid
            item
            sx={{
              display: "flex",
              flex: 1,
              overflowX: "auto",
              overflowY: "hidden",
              maxHeight: "calc(100vh - 87.7px)",
            }}
          >
            <Grid
              container
              direction={"column"}
              flexWrap='nowrap'
              sx={{ height: "100%", width: "100%" }}
            >
              {/* editor */}
              {showEditor && (
                // <Grid item sx={{ width: "100%", flex: 1, overflowY: "auto" }}>
                <Editor resultsHeight={resultsHeight} />
                // {/* <ChatBox /> */}
                // </Grid>
              )}
              {/* hide and show */}
              <Grid item sx={{ width: "100%" }}>
                {showHideTabs}
              </Grid>
              {showResult && (
                <Grid item sx={{ width: "100%" }}>
                  <Resizable
                    style={{ zIndex: 1000 }}
                    size={{ width: "100%", height: resultsHeight }}
                    enable={{
                      right: false,
                      left: false,
                      top: true,
                      bottom: false,
                    }}
                    minHeight='50px'
                    maxHeight={showEditor ? "60vh" : "calc(100vh - 87.7px)"}
                    onResizeStop={(e, direction, ref, d) => {
                      setResultsHeight((w) => w + d.height);
                    }}
                  >
                    <Results
                      resultsHeight={resultsHeight}
                      showEditor={showEditor}
                    />
                  </Resizable>
                </Grid>
              )}
            </Grid>
          </Grid>
          {showDatabase && (
            <Grid item sx={{ display: "flex" }}>
              <Resizable
                style={{ zIndex: 1000 }}
                size={{ width: databaseWidth, height: "100%" }}
                enable={{ right: false, left: true, top: false, bottom: false }}
                onResizeStop={(e, direction, ref, d) => {
                  setDatabaseWidth((w) => w + d.width);
                }}
              >
                <Database drawerWidth={"inherit"} open={showDatabase} />
              </Resizable>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
