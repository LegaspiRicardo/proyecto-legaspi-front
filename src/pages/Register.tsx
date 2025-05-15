import React from "react";
import { TextField, Button, Container, Box, Typography, Link} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const Nnavigate = useNavigate();

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault();
        //Aqui ira la logica para registrar al usuario
        console.log("Usuario registrado");
        navigate("/login");  //Redirigir a la pagina de inicio despues del registro

    };

    return(
        <Container maxWidth="sm" >
            <Box sx={{mt:8, textAlign:"center"}}>
                <Typography variant="h4" gutterBottom>
                    Registro
                </Typography>

                <Box component={"form"} noValidate sx={{mt:2}} onSubmit={handleRegister}>

                    <TextField
                        fullWidth
                        label="Nombre"
                        margin="normal"
                        type="text"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Correo Electronico"
                        margin="normal"
                        type="email"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Contraseña"
                        margin="normal"
                        type="password"
                        required
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt:3}}
                    >Ingresar</Button>

                </Box>
            </Box>

                        <Box sx={{mt:2}}></Box>
            <Typography variant="body2">
                ¿Ya tienes cuenta? {' '}
                <Link component="button"
                variant="body2"
                onClick={()=> Nnavigate('/')} >
                Inicia sesión aqui</Link>
                


            </Typography>
        </Container>
    



);

                    
};
export default Register;