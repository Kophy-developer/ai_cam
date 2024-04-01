import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  TextField,
  Stack,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";

const AppHeader = ({ page }) => {
  const userName = "ukoo";

  return (
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
          {page}
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
  );
};

export default AppHeader;
