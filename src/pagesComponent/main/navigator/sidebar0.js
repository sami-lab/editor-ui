import React, { useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Stack } from "@mui/system";
import SidebarMenu from "./sidebarMenu";
import { Resizable } from "re-resizable";
//import "./scroll.css";
const sampleMyPins = [
  {
    id: "1",
    label: "Example",
  },
];
const sampleTeamPins = [];

const sampleWorksheetItems = [
  {
    id: "1",
    label: "Item 1",
  },
  {
    id: "2",
    label: "Item 2",
    subMenu: [
      {
        id: "2.1",
        label: "Item 2.1",
      },
      {
        id: "2.2",
        label: "Item 2.2",
        subMenu: [
          {
            id: "2.2.1",
            label: "Item 2.2.1",
          },
          {
            id: "2.2.2",
            label: "Item 2.2.2",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Item 3",
  },
];

const addMenuOptions = ["New Folder", "New Worksheet"];

const moreMenuOptions = ["Rename", "Duplicate", "Delete", "Move"];
export default function Sidebar0() {
  const theme = useTheme();
  const [worksheetItemsHeight, setworksheetItemsHeight] = useState("25vh");

  const [selectedPin, setSelectedPin] = useState(0);
  const [searchPin, setSearchPin] = useState("");
  const [anchorElSearchAdd, setAnchorElSearchAdd] = useState(null);
  const [anchorElSearchMore, setAnchorElSearchMore] = useState(null);

  const [worksheetMyPins, setWorksheetMyPins] = useState(sampleMyPins);
  const [worksheetTeamPins, setWorksheetTeamPins] = useState(sampleTeamPins);
  const [worksheetItems, setWorksheetItems] = useState(sampleWorksheetItems);

  const [pinsActiveItem, setPinsActiveItem] = useState();
  const [worksheetActiveItem, setWorksheetActiveItem] = useState();

  return (
    <Grid container direction='column'>
      {/* <Resizable
        size={{ width: "100%", height: worksheetItemsHeight }}
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
          setworksheetItemsHeight((w) => w + d.height);
        }}
      > */}
      {/* pins tabs */}
      <Grid item sx={{ mt: "22px", px: "8px" }}>
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
              my PinNed ({worksheetMyPins.length})
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
              Team’s PinNed ({worksheetTeamPins.length})
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* serach */}
      <Grid item sx={{ mt: "15px", px: "8px" }}>
        <Grid container sx={{ pl: "12px" }}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              size='small'
              placeholder='Search'
              value={searchPin}
              onChange={(e) => setSearchPin(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon
                      sx={{
                        color: theme.palette.primary.text,
                        fontSize: "0.9rem",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <Stack direction={"row"} gap={"8px"}>
                    <Grid item>
                      <IconButton
                        onClick={(event) =>
                          setAnchorElSearchAdd(event.currentTarget)
                        }
                        sx={{ p: 0 }}
                      >
                        <AddIcon
                          sx={{
                            color: theme.palette.primary.text,
                            fontSize: "0.9rem",
                          }}
                        />
                      </IconButton>
                      <Menu
                        id='menu-appbar'
                        anchorEl={anchorElSearchAdd}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElSearchAdd)}
                        onClose={() => setAnchorElSearchAdd(null)}
                      >
                        {addMenuOptions.map((setting) => (
                          <MenuItem
                            key={setting}
                            onClick={() => setAnchorElSearchAdd(null)}
                          >
                            <Typography textAlign='center'>
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={(event) =>
                          setAnchorElSearchMore(event.currentTarget)
                        }
                        sx={{ p: 0 }}
                      >
                        <MoreHorizIcon
                          sx={{
                            color: theme.palette.primary.text,
                            fontSize: "0.9rem",
                          }}
                        />
                      </IconButton>
                      <Menu
                        id='menu-appbar'
                        anchorEl={anchorElSearchMore}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElSearchMore)}
                        onClose={() => setAnchorElSearchMore(null)}
                      >
                        {moreMenuOptions.map((setting) => (
                          <MenuItem
                            key={setting}
                            onClick={() => setAnchorElSearchMore(null)}
                          >
                            <Typography textAlign='center'>
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Grid>
                  </Stack>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* pins menu */}
      {selectedPin === 0 ? (
        <Grid item sx={{ mt: "22px", px: "8px" }}>
          <SidebarMenu
            items={worksheetMyPins}
            activeItem={pinsActiveItem}
            onItemSelect={(item) => setPinsActiveItem(item)}
          />
        </Grid>
      ) : (
        <Grid item sx={{ mt: "22px", px: "8px" }}>
          <SidebarMenu
            items={worksheetTeamPins}
            activeItem={pinsActiveItem}
            onItemSelect={(item) => setPinsActiveItem(item)}
          />
        </Grid>
      )}

      {/* </Resizable> */}
      <Grid item>
        <Divider />
      </Grid>

      <Grid item sx={{ mt: "22px", px: "8px" }}>
        <SidebarMenu
          items={worksheetItems}
          activeItem={worksheetActiveItem}
          onItemSelect={(item) => setWorksheetActiveItem(item)}
        />
      </Grid>
    </Grid>
  );
}
