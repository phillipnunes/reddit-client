import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import DrawerMUI from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Avatar, Grid} from "@mui/material";

const drawerWidth = '50%';

function Drawer({ children, posts }: {children: any, posts: []}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    const now = new Date()

    // @ts-ignore
    const diff = Math.abs(now - date)
    const dateInDays = Math.ceil(diff / (1000 * 3600))

    return dateInDays
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {posts?.map((post: any) => {
          const { id, title, author, created_utc, thumbnail, url, num_comments } = post?.data
          return (
            <>
              <ListItem button key={id} style={{
                flexDirection: 'column',
              }}>
                <Grid container xs={12}>
                  <Grid item md={11} >
                    <Typography mb={1}>{`Posted by ${author} ${formatDate(created_utc)} hours ago`}</Typography>
                  </Grid>
                  <Grid item md={1}>
                    <Typography mb={1}>Unread</Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} alignItems='center'>
                  <Grid item md={2}>
                    <Avatar src={thumbnail} alt="Post image" sx={{ width: 56, height: 56 }} />
                  </Grid>
                  <Grid item md={10}>
                    <ListItemText primary={title} />
                  </Grid>
                </Grid>
                <Grid container xs={12}>
                  <Typography mt={1}>{`${num_comments} comments`}</Typography>
                </Grid>
              </ListItem>
              <Divider />
            </>
          )
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth})` },
          ml: { sm: `${drawerWidth}` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <DrawerMUI
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </DrawerMUI>
        <DrawerMUI
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </DrawerMUI>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Drawer;
