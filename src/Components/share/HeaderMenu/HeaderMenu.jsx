import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu'
import clsx from 'clsx';

const drawerWidth = 240;
function HeaderMenu() {
    
  const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    }))
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
        console.log(open)
    }
    return (
        
        <AppBar 
            position="fixed" 
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
        >
            <Toolbar>
                <IconButton 
                    color="inherit"
                    arial-label="open drawer"
                    edge="start"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Inventory System
                </Typography>
            </Toolbar>
            <SideMenu openMenu={open} openMenuFunc={setOpen}/>
        </AppBar>
        
    )
}

export default HeaderMenu