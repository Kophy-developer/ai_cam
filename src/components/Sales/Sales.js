import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";

import MonthlySales from "./MonthlySales";
import SalesOverTime from "./SalesOverTime";
import AppHeader from "../Routes/AppHeader";

function Sales() {
  return (
    <div>
      <AppHeader page={"Sales"} />
      <Grid container spacing={3} sx={{ padding: "20px" }}>
        {/* Left side */}
        <Grid item container spacing={4} xs={8}>
          <Grid item xs={4}>
            <Paper sx={{ height: "200px", p: 2 }}>
              <MonthlySales />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ height: "200px", p: 2 }}>Section 2</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ height: "200px", p: 2 }}>Section 3</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: "550px", pl: 2 }}>
              <SalesOverTime />
            </Paper>
          </Grid>
        </Grid>

        {/* Right side */}
        <Grid item container spacing={3} xs={4}>
          <Grid item xs={12}>
            <Paper sx={{ height: "300px", p: 2 }}>Section 5</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: "400px", p: 2 }}>Section 6</Paper>
          </Grid>
        </Grid>
      </Grid>

      {/* <MonthlySales />
      <SalesOverTime /> */}
    </div>
  );
}

export default Sales;
