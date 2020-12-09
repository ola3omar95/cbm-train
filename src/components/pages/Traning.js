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

function Traning() {
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
                                            CBM Training
                                    </Typography>
                                    </Paper>
                                </>
                                <>
                                    <Paper className={ classes.paper }>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Full Stack Training (Student - Fresh Graduate)
                                </Typography>
                                        <h3>Minimum Requirements:</h3>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Checkbox defaultChecked color="secondary" />High School Diploma<br />
                                            <Checkbox defaultChecked color="secondary" />Basic Programming logic<br />
                                            <Checkbox defaultChecked color="secondary" />Good GPA<br />
                                            <Checkbox defaultChecked color="secondary" />Good In English<br />
                                            <Checkbox defaultChecked color="secondary" />Training Duration 3 months<br />
                                        </Typography><br />
                                        <AttachMoneyIcon style={ { fontSize: 30 } }></AttachMoneyIcon>  Cost $ 200
                                    <br /><br />
                                        <Button variant="contained">
                                            Enroll Now
                                    </Button>
                                    </Paper>
                                </>
                                <>
                                    <Paper className={ classes.paper }>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Senior Training Software Engineering Developer
                                </Typography>
                                        <h3>Minimum Requirements:</h3>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Checkbox defaultChecked color="secondary" />Minimum 3 Years Of Industry Experience<br />
                                            <Checkbox defaultChecked color="secondary" />Proficiency In English<br />
                                            <Checkbox defaultChecked color="secondary" />proven experience in software development.<br />
                                        </Typography>
                                        <h3>Skills Offers:</h3>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Checkbox defaultChecked color="secondary" />Perform Gap Analysis On Policies & Procedures<br />
                                            <Checkbox defaultChecked color="secondary" />Automate Tasks Through Application Tools & Steps<br />
                                            <Checkbox defaultChecked color="secondary" />Identify Different Types Of Measurement Software Projects<br />
                                            <Checkbox defaultChecked color="secondary" />Comibing sorbrqne Metrics foor deeper insisht
<br />
                                            <Checkbox defaultChecked color="secondary" />Develop Strategic Objectives & Measurable Results
<br />
                                            <Checkbox defaultChecked color="secondary" />Security Fusineering & Security Mquayref
<br />
                                            <Checkbox defaultChecked color="secondary" />Understanding The SMMI Process i
<br />
                                        </Typography><br />
                                        <AttachMoneyIcon style={ { fontSize: 30 } }></AttachMoneyIcon>  Cost $ 5500
                                    <br /><br />
                                        <Button variant="contained">
                                            Enroll Now
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
export default Traning;