import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '@material-ui/core/FormControl';
import '@material-ui/core/FormHelperText';
import '@material-ui/core/InputLabel';
import PasswordField from 'material-ui-password-field';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function SignIn() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            background: theme.palette.background.default,
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    }));
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={ { backgroundColor: '#f0f0f0' } } >
                    {/*<h5 style={ { color: 'black' } } className='sign-up'>Sign Up</h5>*/ }
                    <div className={ classes.root }>
                        <Grid container spacing={ 3 }>
                            <Grid item xs={ 12 }>
                                <Paper className={ classes.paper }>
                                    <AccountCircleIcon style={ { fontSize: 90 } } > </AccountCircleIcon>
                                    <div className={ classes.root }>
                                        <>
                                            <TextField
                                                id="standard-required"
                                                style={ { margin: 8, padding: 8 } }
                                                placeholder="Email"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={ {
                                                    shrink: true,
                                                } }
                                                variant="standard"
                                            />
                                            {/* <TextField
                                                id="outlined-full-width"
                                                label="Password"
                                                style={ { margin: 8 } }
                                                placeholder="*******"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={ {
                                                    shrink: true,
                                                } }
                                                variant="outlined"
                                            />*/}
                                            <PasswordField
                                                hintText="At least 8 characters"
                                                floatingLabelText="Enter your password"
                                                errorText="Your password is too short"
                                                id='outlined-password-input'
                                                placeholder='Password'
                                                fullWidth
                                                style={ { padding: 8 } } />
                                            <FormControlLabel
                                                control={ <Checkbox /> }
                                                label="Remmber me"
                                            />
                                        </>
                                    </div>
                                    <Box textAlign="right" m={ 1 }>
                                        <Link href="#" onClick={ preventDefault }>
                                            Forgot Your Password?
                                        </Link>
                                    </Box>
                                    {/*<Alert severity="error" >Forgot Your Password?</Alert>*/ }
                                    <br />
                                    <Button variant="contained"><Link href="#" onClick={ preventDefault }>
                                        Sign In
                                        </Link>
                                    </Button>
                                    <br /><br /><br />
                                    Or login with
                                    <br />
                                    <FacebookIcon style={ { fontSize: 50 } } color="primary" > </FacebookIcon>
                                    <InstagramIcon style={ { fontSize: 50 } } color="secondary" > </InstagramIcon>
                                    <LinkedInIcon style={ { fontSize: 50 } } color="primary" > </LinkedInIcon>
                                    <br /><br />
                                    Not a member?
                                    <Link to='/registeration' onClick={ preventDefault }>
                                        Signup now
                                    </Link>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Typography>

            </Container>
            <Footer />
        </>
    );
}
export default SignIn;
