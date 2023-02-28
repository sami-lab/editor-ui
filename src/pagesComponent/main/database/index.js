import React, { useState } from "react";
import {
  Drawer,
  Grid,
  Tabs,
  Tab,
  Typography,
  useTheme,
  Divider,
  IconButton,
} from "@mui/material";
import SidebarMenu from "../navigator/sidebarMenu";
import { Resizable } from "re-resizable";
import "../navigator/scroll.css";
const sampleDatabases = [
  {
    id: "1",
    label: "Nousowl usage",
  },
  {
    id: "2",
    label: "Admin access key",
    subMenu: [
      {
        id: "2.1",
        label: "KEY1_cacaaedf21546",
        subMenu: [
          {
            id: "2.1.1",
            label: "Cutomer",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Databases limit extender",
  },
  {
    id: "4",
    label: "History organizer",
  },
];

const sampleCustomers = [
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
  {
    id: "varsdge25415",
    type: "Aa",
    label: "QUERY_ID",
  },
];
export default function Sidebar({ drawerWidth, open }) {
  const theme = useTheme();
  const [databaseHeight, setDatabaseHeight] = useState("20vh");
  const [customersHeight, setCustomersHeight] = useState("20vh");

  const [selectedPin, setSelectedPin] = useState(0);
  const [databaseName, setDatabaseName] = useState("Access_History");
  const [databaseList, setDatabaseList] = useState(sampleDatabases);
  const [databaseActiveItem, setDatabaseActiveItem] = useState();

  const [customers, setCustomer] = useState(sampleCustomers);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "87.7px",
          pb: "100px",
        },
      }}
      variant='persistent'
      anchor='right'
      open={open}
    >
      <Grid container direction='column'>
        <Resizable
          size={{ width: "100%", height: databaseHeight }}
          enable={{
            right: false,
            left: false,
            top: false,
            bottom: true,
          }}
          className='scrollable-element'
          style={{
            overflowY: "auto",
          }}
          maxHeight={"70vh"}
          onResizeStop={(e, direction, ref, d) => {
            setDatabaseHeight((w) => w + d.height);
          }}
        >
          {/* tabs */}
          <Grid item sx={{ width: "100%" }}>
            <Tabs
              value={0}
              onChange={(event, newValue) => {}}
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              textColor='inherit'
              aria-label='full width tabs example'
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Tab
                label={
                  <Typography
                    variant='body2'
                    sx={{
                      fontWeight: 500,
                      color: "rgba(0, 0, 0, 0.54)",
                    }}
                  >
                    Database
                  </Typography>
                }
              />
            </Tabs>
          </Grid>
          {/* selectedPin */}
          <Grid item sx={{ mt: "22px", px: "16px" }}>
            <Grid container sx={{ gap: "25px" }}>
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
                  my PinNed
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
                  Team’s PinNed
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* selectedPin */}
          <Grid item sx={{ mt: "4px", px: "16px", pb: "24px" }}>
            <Typography
              variant='body1'
              fontSize={15}
              sx={{ lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)" }}
            >
              {databaseName}
            </Typography>
          </Grid>
        </Resizable>
        {/* divider */}
        <Grid item sx={{ width: "100%" }}>
          <Divider />
        </Grid>
        {/* menus */}
        <Resizable
          size={{ width: "100%", height: customersHeight }}
          enable={{
            right: false,
            left: false,
            top: false,
            bottom: true,
          }}
          className='scrollable-element'
          style={{
            overflowY: "auto",
          }}
          maxHeight={"70vh"}
          onResizeStop={(e, direction, ref, d) => {
            setCustomersHeight((w) => w + d.height);
          }}
        >
          <Grid item sx={{ mt: "22px", pb: "24px", px: "8px" }}>
            <SidebarMenu
              items={databaseList}
              activeItem={databaseActiveItem}
              onItemSelect={(item) => setDatabaseActiveItem(item)}
            />
          </Grid>
        </Resizable>
        {/* divider */}
        <Grid item sx={{ width: "100%" }}>
          <Divider />
        </Grid>
        {/* contomers */}

        <Grid item sx={{ pt: "24px", px: "16px", width: "100%" }}>
          <Grid
            container
            spacing={1}
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid item>
              <Typography
                variant='small'
                sx={{ color: "#757575", fontWeight: 700 }}
              >
                CUSTOMER
              </Typography>
            </Grid>
            <Grid item>
              <IconButton sx={{ p: 0 }}>
                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.44683 11.9718L0.528076 11.0531L5.5812 5.99995L0.528076 0.946826L1.44683 0.0280762L6.49995 5.0812L11.5531 0.0280762L12.4718 0.946826L7.4187 5.99995L12.4718 11.0531L11.5531 11.9718L6.49995 6.9187L1.44683 11.9718Z'
                    fill='black'
                  />
                </svg>
              </IconButton>
            </Grid>
          </Grid>
          {customers.map((c, i) => (
            <Grid
              container
              spacing={1}
              alignItems='center'
              justifyContent='space-between'
              sx={{ mt: i === 0 ? "21px" : "12px" }}
              key={i}
            >
              <Grid item>
                <Typography
                  variant='body2'
                  sx={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 400 }}
                >
                  <span style={{ marginRight: "15px" }}>{c.type}</span>
                  {c.label}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='small'
                  sx={{
                    opacity: 0.5,
                    color: "rgba(0, 0, 0, 0.87)",
                    fontWeight: 400,
                  }}
                >
                  {c.id}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Drawer>
  );
}
