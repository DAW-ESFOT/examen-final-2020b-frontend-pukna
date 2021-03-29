import React, {useState} from 'react';
import {Button, Grid, InputAdornment, TextField} from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import Link from 'next/link'
import withoutAuth from "@/hocs/withoutAuth";
import {useAuth} from "@/lib/auth";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({

  userName: yup.string().required('Necesita un nombre de usuario'),
  name: yup.string().required('Ingrese su nombre'),
  lastname: yup.string().required('Ingrese su Apellido'),
  phone: yup.string().required('Ingrese su Teléfono'),
  province: yup.string().required('Ingrese provincia'),
  canton: yup.string().required('Ingrese canton'),
  sector: yup.string().required('Ingrese sector'),
  email: yup
      .string()
      .email("Ingrese un email válido")
      .required("Ingrese su email."),
  password: yup.string().required("Ingrese su clave"),
  password_confirmation: yup.string().required('Debe confirmar la contraseña'),
});

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  buttonWrapper: {
    textAlign: "center",
  },
  padd: {
    paddingLeft: 10
  }
}));

const Register = () => {
  const {register: doRegister} = useAuth();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setLoading(true);
    console.log('data', data)
    try {
      const userData = await doRegister(data)
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
  }
  return (
      <div>
        <Grid container style={{minHeight: '100vh'}}>
          <Grid item xs={12} sm={6}>
            <img
                src='https://picsum.photos/300/350'
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  alt: 'brand'
                }}
            />
          </Grid>

          <Grid container item xs={12} sm={6}
                alignItems='center'
                direction='column'
                justify='space-between'
                style={{padding: 10}}
          >
            <div/>
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: 200, minWidth: 400}}>
              <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={1} alignItems="center">
                  {/*<Grid xs={12} item>*/}
                  {/*  <TextField*/}
                  {/*      id='userName'*/}
                  {/*      name='userName'*/}
                  {/*      type='name'*/}
                  {/*      label='Nombre de usuario'*/}
                  {/*      ref={register}/>*/}
                  {/*</Grid>*/}
                  <Grid xs={12} item>
                    <TextField
                        id="name"
                        name="name"
                        type="name"
                        label="Nombre"
                        inputRef={register}
                        autoComplete="name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                  </Grid>
                  {/*<Grid xs={6} item>*/}
                  {/*  <TextField*/}
                  {/*      id="lastname"*/}
                  {/*      name="lastname"*/}
                  {/*      type="lastname"*/}
                  {/*      label="Apellido"*/}
                  {/*      inputRef={register}*/}
                  {/*      autoComplete="lastname"*/}
                  {/*      error={!!errors.lastname}*/}
                  {/*      helperText={errors.lastname?.message}*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  {/*<Grid xs={6} item>*/}
                  {/*  <TextField*/}
                  {/*      id="phone"*/}
                  {/*      name="phone"*/}
                  {/*      type="phone"*/}
                  {/*      label="Teléfono"*/}
                  {/*      inputRef={register}*/}
                  {/*      autoComplete="phone"*/}
                  {/*      error={!!errors.phone}*/}
                  {/*      helperText={errors.phone?.message}*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  {/*<Grid xs={12} item>*/}
                  {/*  <TextField*/}
                  {/*      id="province"*/}
                  {/*      name="province"*/}
                  {/*      type="province"*/}
                  {/*      label="Provincia"*/}
                  {/*      inputRef={register}*/}
                  {/*      autoComplete="province"*/}
                  {/*      error={!!errors.province}*/}
                  {/*      helperText={errors.province?.message}*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  {/*<Grid xs={6} item>*/}
                  {/*  <TextField*/}
                  {/*      id="canton"*/}
                  {/*      name="canton"*/}
                  {/*      type="canton"*/}
                  {/*      label="Canton"*/}
                  {/*      inputRef={register}*/}
                  {/*      autoComplete="canton"*/}
                  {/*      error={!!errors.canton}*/}
                  {/*      helperText={errors.canton?.message}*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  {/*<Grid xs={6} item>*/}
                  {/*  <TextField*/}
                  {/*      id="sector"*/}
                  {/*      name="sector"*/}
                  {/*      type="sector"*/}
                  {/*      label="Sector"*/}
                  {/*      inputRef={register}*/}
                  {/*      autoComplete="sector"*/}
                  {/*      error={!!errors.sector}*/}
                  {/*      helperText={errors.sector?.message}*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  <Grid xs={12} item>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Correo electrónico"
                        inputRef={register}
                        autoComplete="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Clave"
                        inputRef={register}
                        //autoComplete="current-password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        label="Confirmar clave"
                        inputRef={register}
                        //autoComplete="current-password"
                        error={!!errors.password_confirmation}
                        helperText={errors.password_confirmation?.message}
                    />
                  </Grid>

                  <Grid xs={12} item className={classes.buttonWrapper}>
                    <Button
                        name="submit"
                        variant="contained"
                        type="submit"
                        color="primary"
                        disabled={loading}
                    >
                      Registrarse
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {/*<div style={{height: 30}}/>*/}
              {/*<div style={{display: 'flex', justifyContent: 'space-between'}}>*/}
              {/*    <Button color='primary' variant='contained'>Guardar</Button>*/}
              {/*    <Button color='primary' variant='contained'><Link href='/'>Cancelar</Link></Button>*/}
              {/*</div>*/}

            </div>
            <div/>
          </Grid>
        </Grid>

      </div>
  );
};

export default withoutAuth(Register);