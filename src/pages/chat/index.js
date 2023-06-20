import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import AddIcon from "@mui/icons-material/Add";
import ErrorIcon from "@mui/icons-material/Error";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckIcon from "@mui/icons-material/Check";
import SendText from "./sendText";
import AlertDialog from "./alertDialog";
import { Resizable } from "re-resizable";

const sampleData = [
  {
    id: "477",
    name: "Abbott - Pacocha",
    industry: "IT",
    city: "Colorado Springs",
    state: "CO",
    segment: "Enterpise",
    ownerId: 7,
  },
  {
    id: "478",
    name: "Abbott - Pacocha",
    industry: "IT",
    city: "Colorado Springs",
    state: "CO",
    segment: "Enterpise",
    ownerId: 7,
  },
  {
    id: "479",
    name: "Abbott - Pacocha",
    industry: "IT",
    city: "Colorado Springs",
    state: "CO",
    segment: "Enterpise",
    ownerId: 7,
  },
];
export default function Index() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const sideBarMinWidth = 356;
  const [sideBarWidth, setSideBarWidth] = React.useState(sideBarMinWidth);

  const [showSidebar, setShowSidebar] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [showOpenChats, setShowOpenChats] = useState(false);
  const [showRecentClosedChats, setShowRecentClosedChats] = useState(false);
  const [chatAbout, setShowChatAbout] = useState(false);
  const [showQuery, setShowQuery] = useState("");

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (matchesSM) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [matchesSM]);
  const sidebar = (
    <SwipeableDrawer
      sx={{
        width: "inherit",
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          padding: "36px",
          width: { md: "inherit", xs: "80%" },
          boxSizing: "border-box",
          background: "#000",
          color: "#D8D6D6",
        },
      }}
      variant={matchesSM ? "temporary" : "persistent"}
      anchor='left'
      open={showSidebar}
      onClose={() => setShowSidebar(false)}
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
        {/* new Chats */}
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
              textTransform: "none",
            }}
            onClick={() => {}}
          >
            New Chat
          </Button>
        </Grid>
        {/* open chats */}
        <Grid item sx={{ mt: "44px" }}>
          <Grid
            container
            justifyContent='space-between'
            wrap='nowrap'
            sx={{ cursor: "pointer" }}
            onClick={() => setShowOpenChats((c) => !c)}
          >
            <Grid item>
              <Grid container gap='15px'>
                <Grid item>
                  <img src='/dev/comment.png' />
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>Open Chats</Typography>
                  <Typography variant='body2' sx={{ color: "#8B8585" }}>
                    0 Chats
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {showOpenChats ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Grid>
          </Grid>
        </Grid>
        {/*Recently Closed Chats */}
        <Grid item sx={{ width: "100%", mt: "30px" }}>
          <Grid
            container
            justifyContent='space-between'
            wrap='nowrap'
            sx={{ cursor: "pointer" }}
            onClick={() => setShowRecentClosedChats((c) => !c)}
          >
            <Grid item>
              <Grid container gap='15px'>
                <Grid item>
                  <img src='/dev/comment.png' />
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Recently Closed Chats
                  </Typography>
                  <Typography variant='body2' sx={{ color: "#8B8585" }}>
                    2 Chats
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {showRecentClosedChats ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Grid>
          </Grid>
          {/* nested elements */}
          {showRecentClosedChats && (
            <Grid
              container
              direction='column'
              sx={{
                mt: "20px",
                pl: "20px",
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              }}
            >
              <Grid item sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  size='large'
                  variant='contained'
                  startIcon={
                    <FiberManualRecordOutlinedIcon
                      sx={{ fill: "#ADB3CB", width: "10px", height: "10px" }}
                    />
                  }
                  sx={{
                    justifyContent: "flex-start",
                    color: "#000000",
                    borderColor: "#A9CBFF",
                    background: "#A9CBFF",
                    textTransform: "none",
                    ":hover": {
                      background: "#A9CBFF",
                    },
                  }}
                  onClick={() => {
                    setShowChatAbout(true);
                  }}
                >
                  List my top 10 accounts
                </Button>
              </Grid>

              <Grid item sx={{ width: "100%", mt: "13px" }}>
                <Grid
                  container
                  wrap='nowrap'
                  justifyContent='space-between'
                  gap='15px'
                  sx={{
                    border: "1px solid #4E5057",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                >
                  <Grid item>
                    <Grid container wrap='nowrap' gap='15px'>
                      <Grid item>
                        <FiberManualRecordOutlinedIcon
                          sx={{
                            fill: "#ADB3CB",
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant='body2'
                          sx={{ color: "#8B8585", lineHeight: "23px" }}
                        >
                          Which of my industries generated the most revenue last
                          year?
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#A9CBFF",
                        color: "#000000",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        padding: "8px",
                        fontSize: "12px",
                      }}
                    >
                      2
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </SwipeableDrawer>
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

  const examplesQuestions = [
    `"List my top 10 accounts"`,
    `"Which of my industries generated the most revenue last year?"`,
    `"What was my average revenue per salesperson?" `,
  ];
  const examplesCapabilities = [
    `Access and perform calculations across multiple data sources`,
    "Build off previous messages in a chat and allows user feedback",
    `Human help capabilities to ensure fast and accurate responses`,
  ];

  const exampleActions = (
    <Grid
      container
      direction='column'
      justifyContent='center'
      sx={{ height: "100%" }}
    >
      {/* headings */}
      <Grid item sx={{ width: "100%" }}>
        <Grid container sx={{ gap: "70px" }}>
          {/* example heading */}
          <Grid item sx={{ flex: 1 }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              gap='23px'
            >
              {/* icon */}
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#EBE9F5",
                    color: "#000000",
                    width: { md: "90px", xs: "70px" },
                    height: { md: "90px", xs: "70px" },
                    borderRadius: "50%",
                    padding: "6px",
                  }}
                >
                  <img src='/dev/file.png' />
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h4' fontWeight='600'>
                  Examples
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Capabilities heading */}
          <Grid item sx={{ flex: 1, display: { md: "initial", xs: "none" } }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              gap='23px'
            >
              {/* icon */}
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#EBE9F5",
                    color: "#000000",
                    width: { md: "90px", xs: "70px" },
                    height: { md: "90px", xs: "70px" },
                    borderRadius: "50%",
                    padding: "6px",
                  }}
                >
                  <img src='/dev/file.png' />
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h4' fontWeight='600'>
                  Capabilities
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* questions */}
      <Grid item sx={{ width: "100%" }}>
        {examplesQuestions.map((item, i) => (
          <Grid
            container
            key={i}
            sx={{ gap: "70px", mt: i === 0 ? "32px" : "24px" }}
          >
            {/* examplesQuestions */}
            <Grid item sx={{ flex: 1, display: "flex" }}>
              <Grid
                container
                wrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                gap='15px'
                sx={{
                  height: "100%",
                  border: "1px solid #D5D5D5",
                  borderRadius: "10px",
                  padding: { md: "31px 40px", xs: "15px" },
                  cursor: "pointer",
                }}
              >
                <Grid item>
                  <Typography variant='subtitle1' fontSize='20px'>
                    {item}
                  </Typography>
                </Grid>
                <Grid item>
                  <EastOutlinedIcon />
                </Grid>
              </Grid>
            </Grid>
            {/* examplesCapabilities */}
            <Grid
              item
              sx={{
                flex: 1,
                display: "flex",
                display: { md: "initial", xs: "none" },
              }}
            >
              <Grid
                container
                wrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                gap='15px'
                sx={{
                  height: "100%",
                  border: "1px solid #D5D5D5",
                  borderRadius: "10px",
                  padding: { md: "31px 40px", xs: "15px" },
                  cursor: "pointer",
                }}
              >
                <Grid item>
                  <Typography variant='subtitle1' fontSize='20px'>
                    {examplesCapabilities[i]}
                  </Typography>
                </Grid>
                <Grid item>
                  <EastOutlinedIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* mobile capabilities */}
      <Grid
        item
        sx={{
          width: "100%",
          mt: "50px",
          display: { md: "none", xs: "initial" },
        }}
      >
        {/* heading */}
        <Grid container justifyContent='center' alignItems='center' gap='23px'>
          {/* icon */}
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#EBE9F5",
                color: "#000000",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              <img src='/dev/file.png' />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='h4' fontWeight='600'>
              Capabilities
            </Typography>
          </Grid>
        </Grid>
        {examplesCapabilities.map((item, i) => (
          <Grid
            key={i}
            container
            wrap='nowrap'
            justifyContent='space-between'
            alignItems='center'
            gap='15px'
            sx={{
              border: "1px solid #D5D5D5",
              borderRadius: "10px",
              padding: { md: "31px 40px", xs: "15px" },
              cursor: "pointer",
              mt: i === 0 ? "32px" : "24px",
            }}
          >
            <Grid item>
              <Typography variant='subtitle1' fontSize='20px'>
                {item}
              </Typography>
            </Grid>
            <Grid item>
              <EastOutlinedIcon />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  const renderQuery = (
    <Grid contatiner component={Paper} sx={{ p: "20px", mt: "15px" }}>
      Query
    </Grid>
  );
  const renderChart = (
    <Grid contatiner component={Paper} sx={{ p: "20px", mt: "15px" }}>
      Chart
    </Grid>
  );
  const px = { md: "0px 32px 0px 89px", xs: "0px 30px" };

  const tableHeadSx = {
    background: "#A9CBFF",
  };
  const topTenUsers = (
    <Grid
      container
      gap='22px'
      sx={{
        height: "100%",
        mb: "50px",
        mt: "25px",
      }}
    >
      {/* logo */}
      <Grid item>
        <img src='/dev/favicon.png' />
      </Grid>
      <Grid item sx={{ flex: 1 }}>
        <Typography variant='subtitle1' fontSize='20px' sx={{ mt: "10px" }}>
          To find out how many accounts you have, you can use the following
          query
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            mt: "10px",
            borderRadius: "10px",
            maxHeight: "340px",
            overflowY: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead sx={tableHeadSx}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Segment</TableCell>
                <TableCell>Owner ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.industry}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.segment}</TableCell>
                  <TableCell>{row.ownerId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* view or download CSV */}
        <Grid container gap='10px' alignItems='center' sx={{ mt: "20px" }}>
          <Grid item>
            <ErrorIcon />
          </Grid>
          <Grid item>
            <Typography variant='body2'>
              Only 1000 rows are shown,{" "}
              <span style={{ color: "#213BC2" }}>Click here</span> to view or
              download CSV
            </Typography>
          </Grid>
        </Grid>
        {/* Show Query  Show Chart */}
        <Grid container gap='15px' sx={{ mt: "15px" }}>
          <Grid item>
            <Button
              color='inherit'
              size='small'
              sx={{
                color: "#000",
                background: showQuery === true ? "#A9CBFF" : "#DCDCDC",
                padding: "10px 20px",
                textTransform: "none",
              }}
              onClick={() => setShowQuery((q) => (q === true ? "" : true))}
            >
              Show Query
            </Button>
          </Grid>
          <Grid item>
            <Button
              color='inherit'
              size='small'
              sx={{
                color: "#000",
                background: showQuery === false ? "#A9CBFF" : "#DCDCDC",
                padding: "10px 20px",
                textTransform: "none",
              }}
              onClick={() => setShowQuery((q) => (q === false ? "" : false))}
            >
              Show Chart
            </Button>
          </Grid>
        </Grid>
        {showQuery === true && renderQuery}
        {showQuery === false && renderChart}
        <Alert
          sx={{ mt: "25px", width: "fit-content", alignItems: "center" }}
          severity='error'
          action={
            <Button
              color='inherit'
              size='small'
              sx={{
                color: "#fff",
                background: "#F0671A",
                padding: "10px 20px",
                textTransform: "none",
              }}
            >
              Human Help
            </Button>
          }
        >
          We are not confident in this answer, but recommended verification
        </Alert>
      </Grid>
    </Grid>
  );

  const userMenu = (
    <Grid container alignItems='center' sx={{ gap: "10px" }}>
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
  );

  return (
    <Grid container wrap='nowrap' sx={{ minHeight: "100vh" }}>
      <AlertDialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
        message='Max Open Chats Reached for Current Plan'
        description='Please end a previous chat or upgrade your plan.'
        buttonText='Upgrade Plan'
      />

      {/* for sidebar */}
      <Grid item style={{ display: "flex" }}>
        <Resizable
          style={{ zIndex: 1100 }}
          size={{ width: showSidebar ? `${sideBarWidth}` : 0, height: "100%" }}
          enable={{ right: true, left: false, top: false, bottom: false }}
          onResizeStop={(e, direction, ref, d) => {
            setSideBarWidth((w) => w + d.width);
          }}
        >
          {sidebar}
        </Resizable>
      </Grid>
      {/* for main */}
      <Grid
        item
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        {chatAbout ? (
          <Grid
            container
            direction={"column"}
            sx={{
              padding: { md: "32px 0px 40px 0px", xs: "22px 0px" },
              height: "100%",
            }}
          >
            {/* header */}
            <Grid item sx={{ width: "100%", p: px }}>
              <Grid container gap='15px' justifyContent='space-between'>
                <Grid item sx={{ flex: 1 }}>
                  <Grid container wrap='nowrap' gap='31px' alignItems='center'>
                    <img src='/dev/comment_black.png' />
                    <Typography
                      variant='subtitle1'
                      fontWeight='500'
                      sx={{ color: "#000" }}
                    >
                      Chat about List my top 10 accounts
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>{userMenu} </Grid>
              </Grid>
            </Grid>
            {/* divider */}
            <Grid
              item
              sx={{ width: "100%", borderTop: "1px solid #DDD7D7", mt: "40px" }}
            />
            {/* avatar */}
            <Grid item sx={{ width: "100%", p: px, mt: "19px" }}>
              <Grid container alignItems='center' gap='24px'>
                <Grid item>
                  <Avatar
                    alt='Name'
                    src='/dev/user.svg'
                    style={{ width: "46px", height: "46px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' fontSize='20px'>
                    List my top 10 accounts
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* center */}
            <Grid
              item
              sx={{
                width: "100%",
                flex: 1,
                mt: { md: "20px", xs: "40px" },
                p: px,
                background: "#F0F0F0",
              }}
            >
              {topTenUsers}
            </Grid>
            {/* input */}
            <Grid item sx={{ mt: "20px", p: px }}>
              <Typography variant='body2'>
                Need Human Help In query?{" "}
                <span style={{ color: "#213BC2" }}>Click here</span>
              </Typography>
              <Grid container gap={"15px"} sx={{ mt: "5px" }}>
                <Grid item sx={{ flex: 1 }}>
                  <SendText onSuccess={() => {}} />
                </Grid>
                <Grid item sx={{ display: "flex" }}>
                  <Button
                    color='inherit'
                    startIcon={<CheckIcon />}
                    sx={{
                      height: "100%",
                      color: "#fff",
                      background: "#1ADB73",
                      padding: "10px 20px",
                      textTransform: "none",
                    }}
                  >
                    End Chat
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            direction={"column"}
            sx={{
              padding: { md: "32px 0px 40px 0px", xs: "22px 0px" },
              height: "100%",
            }}
          >
            {/* header */}
            <Grid item sx={{ width: "100%", p: px }}>
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
                <Grid item>{userMenu}</Grid>
              </Grid>
            </Grid>
            {/* center */}
            <Grid
              item
              sx={{
                width: "100%",
                flex: 1,
                mt: { md: "10px", xs: "40px" },
                p: px,
              }}
            >
              {exampleActions}
            </Grid>
            {/* input */}
            <Grid item sx={{ mt: "20px", p: px }}>
              <SendText onSuccess={() => {}} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
