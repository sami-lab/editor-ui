import {
  Avatar,
  Button,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
export default function Index() {
  const sideBarWidth = 356;
  const [showSidebar, setShowSidebar] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const sidebar = (
    <Drawer
      sx={{
        width: sideBarWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          padding: "36px",
          width: sideBarWidth,
          boxSizing: "border-box",
          background: "#000",
          color: "#fff",
        },
      }}
      variant='persistent'
      anchor='left'
      open={showSidebar}
    >
      <Grid container direction='column'>
        {/* logo */}
        <Grid
          item
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src='/dev/logo_light.png'
            style={{ width: "180px", height: "47px" }}
          />
        </Grid>
        <Grid item sx={{ mt: "44px" }}>
          <Button
            fullWidth
            size='large'
            variant='outlined'
            startIcon={<AddIcon />}
            sx={{
              justifyContent: "flex-start",
              color: "inherit",
              borderColor: "inherit",
            }}
          >
            New Chat
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const profileMenuID = "profile-menu";
  const settingMenu = (
    <Menu
      sx={{ mt: "45px" }}
      id={profileMenuID}
      keepMounted
      //MenuListProps={{ onMouseLeave: () => setAnchorElUser(null) }}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign='center'>Logout</Typography>
      </MenuItem>
    </Menu>
  );
  return (
    <Grid container wrap='nowrap'>
      {sidebar}
      <Grid item sx={{ width: showSidebar ? `${sideBarWidth}` : 0 }} />
      {/* for main */}
      <Grid
        item
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <Grid
          container
          direction={"column"}
          sx={{ padding: { md: "32px 32px 40px 139px", xs: "22px 30px" } }}
        >
          {/* header */}
          <Grid item sx={{ width: "100%" }}>
            <Grid
              container
              justifyContent={{ xs: "space-between", md: "flex-end" }}
            >
              {/* logo */}
              <Grid item sx={{ display: { xs: "initial", md: "none" } }}>
                <img
                  src='/dev/logo.svg'
                  style={{ width: "180px", height: "47px" }}
                />
              </Grid>
              {/* user */}
              <Grid item>
                <Grid container sx={{ gap: "10px" }}>
                  {/* user menu */}
                  <Grid item>
                    {settingMenu}
                    <Grid
                      container
                      alignItems='center'
                      gap='10px'
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, cursor: "pointer" }}
                      aria-owns={anchorElUser ? profileMenuID : undefined}
                      aria-haspopup={anchorElUser ? true : false}
                    >
                      <Grid item>
                        <Avatar
                          alt='Name'
                          src='/dev/user.svg'
                          style={{ width: "36px", height: "36px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        sx={{
                          display: { md: "initial", xs: "none" },
                        }}
                      >
                        <Typography variant='subtitle2'>Alexey</Typography>
                      </Grid>

                      <KeyboardArrowDownIcon
                        sx={{
                          display: { md: "initial", xs: "none" },
                        }}
                      />
                    </Grid>
                  </Grid>
                  {/* toggler */}
                  <Grid item>
                    <IconButton
                      aria-label='show more'
                      aria-haspopup='true'
                      onClick={() => setShowSidebar(true)}
                      color='inherit'
                      sx={{
                        display: { xs: "initial", md: "none" },
                        padding: 0,
                      }}
                    >
                      <DehazeIcon size='large' color='primary' />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
