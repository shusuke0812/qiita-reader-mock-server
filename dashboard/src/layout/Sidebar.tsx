import {
  DashboardOutlined,
  HttpOutlined,
  ListAltOutlined,
  SettingsOutlined,
} from '@mui/icons-material';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 'none',
        },
      }}
    >
      <Toolbar />

      <List sx={{ px: 2 }}>
        <ListItemButton selected>
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <HttpOutlined />
          </ListItemIcon>
          <ListItemText primary="Mock API" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ListAltOutlined />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;