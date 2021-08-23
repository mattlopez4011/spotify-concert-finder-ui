import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {useLocation} from "react-router";
import {BrowserRouter, Link, useHistory} from "react-router-dom";
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

// ===== Styles
import {makeStyles} from "@material-ui/core/styles";
import {Toolbar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    homeLink: {
        paddingRight: '1em',
        display: "flex",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
}));

const Navbar = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();

    console.log("history: ", history)
    console.log("location: ", location)

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    {/*Home page Link*/}
                    <Link className={`${classes.link}  ${classes.homeLink}`} to="/">
                        <HomeIcon/> Home
                    </Link>

                    {/*Users Link*/}
                    <BrowserRouter forceRefresh={true}>
                        <Link className={`${classes.link} ${classes.homeLink}`} to="/users">
                            <PeopleIcon/> Users
                        </Link>
                    </BrowserRouter>

                    {/*Fake User page Link*/}
                    <BrowserRouter forceRefresh={true}>
                        <Link className={`${classes.link} ${classes.homeLink}`} to="/12345/profile">
                            <PersonIcon/> Fake User Page
                        </Link>
                    </BrowserRouter>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
