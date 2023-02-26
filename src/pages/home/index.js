import React, { useState } from "react";
import { Button, Grid, Paper, useTheme } from "@mui/material";
import Header from "../../reusable/header";
import Sidebar from "../../pagesComponent/main/sidebar/sidebar";
export default function index() {
  const theme = useTheme();
  const drawerWidth = 356;
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <Grid container direction='column'>
      <Grid item style={{ width: "100%" }}>
        <Header />
      </Grid>
      {/* table */}
      <Grid item style={{ width: "100%" }}>
        <Grid container>
          {/* for sidebar */}
          {showSideBar && (
            <Grid item>
              <Sidebar drawerWidth={drawerWidth} open={showSideBar} />
            </Grid>
          )}
          {/* for editor, results */}
          <Grid item sx={{ flex: 1 }}>
            {/* hide and show */}
            <Grid
              container
              justifyContent={"space-between"}
              sx={{
                background: "rgba(0, 0, 0, 0.03)",
                p: "7px 4px",
                border: "1px solid #0000001F",
              }}
            >
              {/* button */}
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
                        fill={showSideBar ? "#fff" : theme.palette.primary.main}
                        d='M0 10V8.75h12V10H0zm0-4.375v-1.25h12v1.25H0zM0 1.25V0h12v1.25H0z'
                      ></path>
                    </svg>
                  }
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    color: showSideBar ? "#fff" : theme.palette.primary.main,
                    background: showSideBar
                      ? theme.palette.primary.main
                      : "transparent",
                    "&:hover": {
                      color: showSideBar ? "#fff" : theme.palette.primary.main,
                      background: showSideBar
                        ? theme.palette.primary.main
                        : "transparent",
                    },
                    px: "20px",
                  }}
                  onClick={() => setShowSideBar((s) => !s)}
                >
                  Navigator
                </Button>
              </Grid>
              {/* search and download */}
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
