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


const ErrorPage = (props) => {
    const classes = useStyles();


    return (
        <Container maxWidth={'xl'}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            xs=12 sm=6
                            <br/> <br/>
                            <img src="https://media.giphy.com/media/Ke8JKfxe83FpLrra71/source.gif?cid=ecf05e475r6ehmk6giottg77sh3n6qzd1tc6zxdppiffvl8n&rid=source.gif&ct=g" alt="404 error Gif"/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )

}

export default memo(ErrorPage);
