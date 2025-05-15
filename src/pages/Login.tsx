import React from "react";
import { TextField, Button, Container, Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Login:React.FC = () =>{

const Nnavigate = useNavigate();
const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault();
    console.log("Inicio de sesión exitoso");
    Nnavigate("/dashboard");  //Redirigir a la pagina de inicio despues del inicio de sesion
};

 return(
    <Container maxWidth="sm">  
        <Box sx={{mt:8, textAlign:"center"}}>
            <Typography variant="h4" gutterBottom>
                Iniciar Sesión
            </Typography>
            
            <Box component= "form" noValidate sx={{mt:2}} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Correo electronico"
                    margin="normal"
                    type="email"
                ></TextField>



                <TextField
                    fullWidth
                    label="Contraseña"
                    margin="normal"
                    type="password"
                    required
                ></TextField>

                <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{mt:3}}
                type="submit"
                >Ingresar</Button>

            </Box>

            <Box sx={{mt:2}}></Box>
            <Typography variant="body2">
                ¿No tienes una cuenta? {' '}
                <Link component="button"
                variant="body2"
                onClick={()=> Nnavigate('/register')} >
                Registrate aqui</Link>
                


            </Typography>

        </Box>

    </Container>



 )

};

export default Login;