import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  TextField,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";
import Customer from "./Customer";
import SentimentAnalysis from "../SentimentAnalysis";

function Customers() {
  // user's name
  const userName = "ukoo";

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #ccc",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 0, color: "black", fontWeight: "bold" }}
          >
            Customers
          </Typography>

          <Stack direction="row" spacing={0} alignItems="center">
            <TextField
              placeholder="Search..."
              size="medium"
              variant="standard"
              sx={{
                borderBottom: "1px solid",
                borderRadius: 0,
                minWidth: "30ch",
              }}
            />
            <IconButton color="disabled" aria-label="filter" sx={{ mr: 5 }}>
              <FilterListIcon />
            </IconButton>
          </Stack>

          <IconButton color="disabled" aria-label="notifications">
            <NotificationsIcon />
          </IconButton>

          <Typography variant="body1" sx={{ mr: 2, color: "black" }}>
            Welcome, {userName}
          </Typography>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
        </Toolbar>
      </AppBar>

      <div style={{}}>
        <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
          {/* Left side */}
          <Grid item>
            <Paper sx={{ height: "99%", p: 2 }}>
              <Customer />
            </Paper>
          </Grid>
          {/* Right side */}
          <Grid item xs={4} container direction="column" spacing={2}>
            <Grid item>
              <Paper sx={{ height: "90%", p: 2 }}>
                <SentimentAnalysis />{" "}
              </Paper>
            </Grid>
            <Grid item>
              <Paper sx={{ height: "90%", p: 2 }}>Section 3</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Customers;
