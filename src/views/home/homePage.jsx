import React, {memo} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";


// ===== Styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = (props) => {
    const classes = useStyles();


    return (
        <Container maxWidth={'xl'}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            xs=12
                            <br/>
                            <br/>
                            <img src="https://media.giphy.com/media/xTiQywlOn0gKyz0l56/giphy.gif?cid=ecf05e47oadutylfmxnfv66b0f02uerh9hdbng3qytm24jjz&rid=giphy.gif&ct=g" alt="Calendar Gif"/>
                            <br/>
                            <img src="https://media.giphy.com/media/V0SDwIXMLFH3O/giphy.gif?cid=ecf05e47zp7bn22dt4ws709whtikfm2rngezoj4qr3opxo1q&rid=giphy.gif&ct=g" alt="Concert Gif"/>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )

}

export default memo(Home);
