import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Header from "../../reusable/header";
export default function index() {
  return (
    <Grid container direction='column'>
      <Grid item style={{ width: "100%" }}>
        <Header />
      </Grid>
      {/* table */}
      <Grid item style={{ width: "100%", marginTop: "20px" }}></Grid>
    </Grid>
  );
}
