import React, { useState } from "react";
import { Drawer, Grid, Tabs, Tab, Typography, useTheme } from "@mui/material";
import SideBar0 from "./sidebar0";
import SideBar1 from "./sidebar1";
import SideBar2 from "./sidebar2";

const topTabs = [
  {
    label: "Worksheets",
    value: 0,
    component: <SideBar0 />,
  },
  {
    label: "Questions",
    value: 1,
    component: <SideBar0 />,
  },
  {
    label: "Models",
    value: 2,
    component: <SideBar0 />,
  },
];

export default function Sidebar({ drawerWidth, open }) {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "87.7px",
        },
      }}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <Grid container direction='column'>
        {/* tabs */}
        <Grid item sx={{ width: "100%" }}>
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            textColor='inherit'
            variant='fullWidth'
            aria-label='full width tabs example'
          >
            {topTabs.map((item) => (
              <Tab
                label={
                  <Typography
                    variant='body2'
                    sx={{
                      fontWeight: 500,
                      color:
                        selectedTab === item.value
                          ? theme.palette.primary.main
                          : "rgba(0, 0, 0, 0.54)",
                    }}
                  >
                    {item.label}
                  </Typography>
                }
                value={item.value}
                key={item.value}
                sx={{
                  borderBottom:
                    selectedTab === item.value
                      ? "3px solid rgba(0, 0, 0, 0.12)"
                      : "1px solid #0000001F",
                }}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          {topTabs.find((v) => v.value === selectedTab).component}
        </Grid>
      </Grid>
    </Drawer>
  );
}
