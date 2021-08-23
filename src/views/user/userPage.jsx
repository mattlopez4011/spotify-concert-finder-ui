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


const User = (props) => {
    const userId = props.match.params.id;
    const classes = useStyles();


    return (
        <Container maxWidth={'xl'}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            xs=12 sm=6
                            <br/> <br/>
                            <img src="https://media.giphy.com/media/nea1LCYl8r8k0/giphy.gif?cid=790b7611a5c253f4afb76e42330bc4d3ba49a27e7b0408a5&rid=giphy.gif&ct=g" alt="Gif"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            xs=12 sm=6
                            <br/> <br/>
                            <img src="https://media.giphy.com/media/9D37RaHngWP7ZmmsEt/giphy.gif?cid=ecf05e47ua85kzrchtf5w6d0c7fp7pqn3fpah8c4s7tlmmms&rid=giphy.gif&ct=g" alt="Heart Alan Walker Gif"/>
                        </Paper>
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

export default memo(User);
