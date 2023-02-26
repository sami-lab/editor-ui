import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Header from "../../reusable/header";
import Sidebar from "../../pagesComponent/main/sidebar/sidebar";
export default function index() {
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
          <Grid item>
            <Sidebar drawerWidth={drawerWidth} open={showSideBar} />
          </Grid>
          {/* for editor, results */}
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
