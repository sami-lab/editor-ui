import React, { useState, useRef } from "react";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const sampleRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function index({ resultsHeight, showEditor }) {
  const [results, setResults] = useState(sampleRows);

  return (
    <Grid
      container
      direction='column'
      sx={{
        background: "rgba(0, 0, 0, 0.03)",
        p: "17px 4px",
        border: "1px solid #0000001F",
      }}
    >
      {/* table */}
      <Grid item sx={{ width: "100%" }}>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: showEditor ? resultsHeight - 69 : "unset",
            overflowY: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* info */}
      <Grid item sx={{ width: "100%", mt: "13px" }}>
        <div>
          <Typography
            variant='small'
            align='center'
            sx={{
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width='21'
              height='20'
              viewBox='0 0 21 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.4844 7.00018V4.98456H9.51562V7.00018H11.4844ZM11.4844 15.0158V9.01581H9.51562V15.0158H11.4844ZM3.42188 2.96893C5.39062 1.00018 7.75 0.0158081 10.5 0.0158081C13.25 0.0158081 15.5938 1.00018 17.5312 2.96893C19.5 4.90643 20.4844 7.25018 20.4844 10.0002C20.4844 12.7502 19.5 15.1096 17.5312 17.0783C15.5938 19.0158 13.25 19.9846 10.5 19.9846C7.75 19.9846 5.39062 19.0158 3.42188 17.0783C1.48438 15.1096 0.515625 12.7502 0.515625 10.0002C0.515625 7.25018 1.48438 4.90643 3.42188 2.96893Z'
                fill='#2196F3'
              />
            </svg>
            Only up to 10,000 rows of the results are displayed. Please download
            the results for all of the rows.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
