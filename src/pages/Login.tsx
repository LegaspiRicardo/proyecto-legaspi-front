import React from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

const Login:React.FC = () =>{
 return(
    <Container maxWidth="sm">  
        <Box sx={{mt:8, textAlign:"center"}}>
            <Typography variant="h4" gutterBottom>
                Iniciar Sesión
            </Typography>
            
            <Box component= "form" noValidate sx={{mt:2}}>
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
                >Ingresar</Button>

            </Box>
        </Box>

    </Container>

 )

};

export default Login;