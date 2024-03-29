import React, { useState } from "react";
import { makeStyles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"; 


import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"
import green from "@mui/material/colors/green"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import AntsNatureLogo from "./img/AntsNature-Logo.png"
import { Container, Grid } from "@mui/material";


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Navigation() {
    
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {createItem("QR Reader", 1, "/qrreader")}
            {createItem("Einstellungen", 1, "/setting")}

          </List>
          <Divider />
          <List>
            {createItem("AGB", 1, "/agb")}
            {createItem("Impressum", 1, "/impressum")}
            {createItem("Datenschutz", 1, "/datenschutz")}
            
          </List>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component="a" href="/setting"> 
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    
    return (
        
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="sm">
            <Grid container spacing={1} sx={{mt:1}}>
              <Grid xs={4} > 
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick = {toggleDrawer('left', true)}
                >
                  <MenuIcon />
                </IconButton>
              
              </Grid>


              <Grid xs={4}>
                <Button size="large" component= "a" color="inherit" href="/" >
                  <Box component="img" sx={{flexGrow: 1, justifyContent:"center", width: "90%"}}
                              alt="Antsnature Logo"
                              src={AntsNatureLogo}
                          />
                </Button>
              </Grid>


              <Grid xs={4}  sx={{verticalAlign:"middle", justifyContent:"end"}}>
                <Button color="inherit">Login</Button>
              </Grid>

            </Grid>
          </Container>
        </Toolbar>
        </AppBar>
    </Box>
    );
  }

  function createItem(text:string, index:number, url:string) {
    let listItem =(<ListItem key={text} disablePadding>
                <ListItemButton component="a" href={url}> 
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>)

return listItem
  }






// react.school/material-ui
// const useStyles:any = makeStyles((theme):any => ({
//   menuButton: { marginRight: theme.spacing(2)},
//   title: { flexGrow: 1 },
//   customColor: { backgroundColor: green[500] /*or hex code, this is normal CSS background-color*/ },
//   customHeight: { minHeight: 200 },
//   offset: theme.mixins.toolbar
// }));

// export function ButtonAppBar() {
//   const classes = useStyles();
//   const [example, setExample] = useState("primary");
//   const isCustomColor = example === "customColor";
//   const isCustomHeight = example === "customHeight";
//   return (
//     <React.Fragment>
//       <AppBar
//         //color={isCustomColor || isCustomHeight ? "primary" : example}
//         className={`${isCustomColor && classes.customColor} ${
//           isCustomHeight && classes.customHeight
//         }`}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             AppBar
//           </Typography>
//           <IconButton color="inherit" onClick={() => setExample("default")}>
//             1
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             2
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("secondary")}>
//             3
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("transparent")}>
//             4
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("customColor")}>
//             5
//           </IconButton>
//           <IconButton
//             color="inherit"
//             onClick={() => setExample("customHeight")}
//           >
//             6
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//       <Typography>
//         This content doesn't appear below the AppBar because we added an
//         additional Toolbar component above, this is the recommended approach.{" "}
//       </Typography>
//       <Typography>
//         Change the AppBar example by clicking on one of the numbers above.
//       </Typography>
//       <Typography>
//         <ul>
//           <li> 1: color: default </li>
//           <li> 2: color: primary </li>
//           <li> 3: color: secondary </li>
//           <li> 4: color: transparent </li>
//           <li> 5: custom color class </li>
//           <li> 6: custom height class </li>
//         </ul>
//       </Typography>
//     </React.Fragment>
//   );
// }
