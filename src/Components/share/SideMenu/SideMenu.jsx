import { Drawer, IconButton } from '@material-ui/core'
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft } from '@material-ui/icons'
import CssBaseline from '@material-ui/core/CssBaseline';
import IconsGroups from '../../IconsGroup';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
            transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9) + 1,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    
   
}))



function SideMenu(props) {
    // const theme = useTheme();
    const classes = useStyles();
    const handleDrawerClose = () => { 
        openMenuFunc(false)
        console.log(openMenu)
    }
    
    const {openMenu, openMenuFunc} = props;
  
    
    return (
    <div className={classes.root}>
        <CssBaseline />
        <Drawer 
            variant="persistent" 
            anchor="left"
            open={openMenu}
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeft />
                </IconButton>
            </div>
            <Divider />
            <IconsGroups />
            <Divider />
        </Drawer>
    </div>
    )
}

export default SideMenu