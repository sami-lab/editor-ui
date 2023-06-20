import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./Google";
export default function Index() {
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: "100vh", background: "#A9CBFF" }}
    >
      {/* main */}
      <Grid item md={5} sm={10} xs={11}>
        <Grid container direction='column' alignItems='center'>
          {/* logo */}
          <Grid item sx={{ mt: { md: "10px", xs: "28px" } }}>
            <img
              src='/dev/logo.svg'
              style={{ width: "257px", height: "67px" }}
            />
          </Grid>
          {/* login form */}
          <Grid
            item
            sx={{
              mt: "28px",
              width: "100%",
              background: "#fff",
              borderRadius: "20px",
              padding: { md: "40px", sm: "20px", xs: "10px" },
            }}
          >
            <Grid container direction='column'>
              {/* heading */}
              <Grid item sx={{ width: "100%", mt: "15px" }}>
                <Typography
                  variant='h5'
                  align='center'
                  sx={{ fontWeight: 700, fontSize: { md: "30px", xs: "24px" } }}
                >
                  Login To Get Started
                </Typography>
              </Grid>
              {/* email */}
              <Grid item sx={{ width: "100%", mt: "35px" }}>
                <TextField
                  placeholder='Email Address'
                  fullWidth
                  variant='outlined'
                  value={data.email}
                  onChange={(e) =>
                    setData((d) => {
                      return { ...d, email: e.target.value };
                    })
                  }
                  sx={{
                    backgroundColor: "#F0F0F0",
                    borderRadius: "50px",

                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Grid>
              {/* password */}
              <Grid item sx={{ width: "100%", mt: "13px" }}>
                <TextField
                  type='password'
                  placeholder='Password'
                  fullWidth
                  variant='outlined'
                  value={data.password}
                  onChange={(e) =>
                    setData((d) => {
                      return { ...d, password: e.target.value };
                    })
                  }
                  sx={{
                    backgroundColor: "#F0F0F0",
                    borderRadius: "50px",

                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Grid>
              {/* forget password */}
              <Grid item sx={{ width: "100%", mt: "13px" }}>
                <Grid
                  container
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Grid item>
                    <FormControlLabel
                      label='Remember Me'
                      control={
                        <Checkbox
                          size='small'
                          checked={data.rememberMe}
                          onChange={(e) =>
                            setData((d) => {
                              return {
                                ...d,
                                rememberMe: e.target.checked,
                              };
                            })
                          }
                        />
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Link
                      href='/forgetPassword'
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant='body2' sx={{ color: "#213BC2" }}>
                        Forgot Password?
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              {error.status && (
                <Grid item style={{ marginTop: "1em", width: "100%" }}>
                  <Alert severity='warning'>{error.message}</Alert>
                </Grid>
              )}
              {/* login */}
              <Grid item sx={{ width: "100%", mt: "24px" }}>
                <Button
                  fullWidth
                  size='large'
                  sx={{
                    py: "12px",
                    background: "#A9CBFF",
                    color: "#000",
                    borderRadius: "50px",
                    "&:hover": {
                      background: "#A9CBFF",
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
              {/* google */}
              <Grid item sx={{ width: "100%", mt: "14px" }}>
                <GoogleLogin />
              </Grid>
              {/* dont have account */}
              <Grid item style={{ marginTop: "24px" }}>
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: "#616161",
                  }}
                  align='center'
                >
                  Don’t Have an Account?{" "}
                  <Link href='/signup'>
                    <a
                      style={{
                        color: "#213BC2",
                        fontWeight: "600",
                      }}
                    >
                      Sign Up
                    </a>
                  </Link>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
