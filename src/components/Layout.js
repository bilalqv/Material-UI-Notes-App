import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import  AppBar  from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar  from '@material-ui/core/Avatar';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page:{
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width : drawerWidth,
        },
        drawerPaper:{
            width : drawerWidth,
        },
        root: {
            display: 'flex'
        },
        active:{
            background: '#f4f4f4'
        },
        title:{
            padding: theme.spacing(2)
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px )`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: '1'
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
    }
    
})

export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined />,
            path: '/create'
        }
    ]

    return (
        
        // Side drawer

        <div className={classes.root}>
            <AppBar
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Bilal
                    </Typography>
                    <Avatar src='/Photo.jpg' className={classes.avatar} />
                </Toolbar>
            </AppBar>

            <Drawer 
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title} >
                        Ninja Notes
                    </Typography>
                </div>

                {/* List Links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem 
                        button 
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                        > 
                            <ListItemIcon >{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem> 
                    ) )}
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
            </div>
        </div>
    )
}
