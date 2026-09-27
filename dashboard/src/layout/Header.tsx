import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600 }}
        >
          Qiita Mock Server
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography
          variant="body2"
          color="success.main"
          sx={{ fontWeight: 600 }}
        >
          ● Running
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;