import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import 'react-router-dom';

function Career() {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={ { backgroundColor: '#f0f0f0' } } >
                    <div className={ classes.root }>
                        <Grid container spacing={ 3 }>
                            <Grid item xs={ 12 }>
                                <>
                                    <Paper className={ classes.paper }>
                                        <Typography variant="h3" gutterBottom>
                                            CBM Career
                                        </Typography>
                                    </Paper>
                                </>
                                <>
                                    <Paper className={ classes.paper }>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Junior Position Software Engineering Developer
                                    </Typography>
                                        <h3>Minimum Requirements:</h3>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Checkbox defaultChecked color="secondary" />Bachelor Degree In Computer Science /Software Engineering<br />
                                            <Checkbox defaultChecked color="secondary" />Fresh or 1 Year Of Industry Experience<br />
                                            <Checkbox defaultChecked color="secondary" />Good GPA<br />
                                            <Checkbox defaultChecked color="secondary" />Good In English<br />
                                            <Checkbox defaultChecked color="secondary" />Excellent Programming Skills<br />
                                            <Checkbox defaultChecked color="secondary" />Training Duration 4 months<br />
                                        </Typography><br />
                                        <AttachMoneyIcon style={ { fontSize: 30 } }></AttachMoneyIcon>  Salary Per Month $ 150
                                        <br /><br />
                                        <Button variant="contained">
                                            Apply Now
                                        </Button>
                                    </Paper>
                                </>
                                <>
                                    <Paper className={ classes.paper }>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Senior Position Software Engineering Developer
                                    </Typography>
                                        <h3>Minimum Requirements:</h3>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Checkbox defaultChecked color="secondary" />Bachelor Degree In Computer Science /Software Engineering<br />
                                            <Checkbox defaultChecked color="secondary" />6 Years Of Industry Experience<br />
                                            <Checkbox defaultChecked color="secondary" />Good GPA<br />
                                            <Checkbox defaultChecked color="secondary" />3 Letters Of Recommendation<br />
                                            <Checkbox defaultChecked color="secondary" />Proficiency In English<br />
                                            <Checkbox defaultChecked color="secondary" />Excellent SDLC Kindly<br />
                                            <Checkbox defaultChecked color="secondary" />Lgacy Software Engineering & Develops<br />
                                            <Checkbox defaultChecked color="secondary" />Training Duration 12 months<br />
                                        </Typography><br />
                                        <AttachMoneyIcon style={ { fontSize: 30 } }></AttachMoneyIcon>  Salary Per Month $ 1000- $ 1300
                                        <br /><br />
                                        <Button variant="contained">
                                            Apply Now
                                        </Button>
                                    </Paper>
                                </>
                            </Grid>
                        </Grid>
                    </div>
                </Typography>
            </Container>
            <Footer />
        </>
    );
}
export default Career;