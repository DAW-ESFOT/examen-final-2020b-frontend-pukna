

import React, {useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core'
import Link from 'next/link'
import {useAuth} from "../lib/auth";
import withoutAuth from "@/hocs/withoutAuth";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

// ----------------------------------------------------------------
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Ingrese un email válido")
        .required("Ingrese su email."),
    password: yup.string().required("Ingrese su clave"),
});
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const {login} = useAuth();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        setLoading(true);
        console.log('data', data)
        try {
            const userData = await login(data)
            console.log("userData", userData);

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }

    };


    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Store
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth

                            autoFocus
                            id="email"
                            name="email"
                            type="email"
                            label="Correo electrónico"
                            inputRef={register}
                            autoComplete="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={register}
                            error={!!errors.password}
                            elperText={errors.password?.message}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                            name="submit"


                        >
                            inciar sesión
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {/*<Link href="#" variant="body2">*/}
                                {/*    Forgot password?*/}
                                {/*</Link>*/}
                            </Grid>
                            <Grid item>
                                <Link href={'/register'} variant="body2">
                                    {"No tienes cuenta? Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );


};

export default withoutAuth(Login);