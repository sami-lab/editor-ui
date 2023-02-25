import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const sampleMyPins = [{}];
export default function Sidebar0() {
  const theme = useTheme();
  const [selectedPin, setSelectedPin] = useState(0);
  return (
    <Grid container sx={{ px: "8px" }}>
      {/* pins */}
      <Grid item sx={{ mt: "22px" }}>
        <Grid container sx={{ pl: "12px", gap: "5px" }}>
          <Grid item>
            <Typography
              variant='small'
              sx={{
                lineHeight: "36px",
                fontWeight: 500,
                textTransform: "uppercase",
                cursor: "pointer",
                color:
                  selectedPin === 0
                    ? theme.palette.primary.main
                    : "rgba(0, 0, 0, 0.26)",
              }}
              onClick={() => setSelectedPin(0)}
            >
              my PinNed (1)
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='small'
              sx={{
                lineHeight: "36px",
                fontWeight: 500,
                textTransform: "uppercase",
                cursor: "pointer",
                color:
                  selectedPin === 1
                    ? theme.palette.primary.main
                    : "rgba(0, 0, 0, 0.26)",
              }}
              onClick={() => setSelectedPin(1)}
            >
              Team’s PinNed (0)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
