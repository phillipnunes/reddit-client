import {useState} from 'react';
import {useDispatch} from "react-redux";
import {setSelected, removePost, removeAllPosts} from "../../actions/posts";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DrawerMUI from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from "./List";
import Header from './Header';
import {Button} from "@mui/material";

const drawerWidth = '50%';

function Drawer({ children, posts }: {children: any, posts: []}) {
  const dispatch = useDispatch()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickPost = (selected: object) => {
    dispatch(setSelected(selected))
  }

  const onRemove = (id: string) => {
    dispatch(removePost(id))
  }

  const onRemoveAll = () => {
    dispatch(removeAllPosts())
  }

  const drawer = (
    <div>
      <Toolbar>
        <Button onClick={() => onRemoveAll()} size="small" variant="contained" >Remove All</Button>
      </Toolbar>
      <Divider />
      <List posts={posts} onClick={onClickPost} onRemove={onRemove} />
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
      <Header onClick={handleDrawerToggle} />
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
