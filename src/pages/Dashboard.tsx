import React from "react";
import {Container, Typography, List, ListItem, ListItemText, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {

    const navigate = useNavigate();


    const tasks = [
        {id:1, title: "Tarea 1", status: 'Pendiente'},
        {id:2, title: "Tarea 2", status: 'Pendiente'},
        {id:3, title: "Tarea 3", status: 'Completado'},
        
    ];
    
    const handleEdit = (task: {id:number; title:string; status:string}) =>{
        navigate("/edit-task", {state: {task}});
    };

    return(
        <Container maxWidth="md" >
            <Typography variant="h4" gutterBottom sx={{mt: 4}}>
                Tablero de Tareas
            </Typography>
            <List>
                {tasks.map((task) => 
                (
                    <ListItem key={task.id} divider>
                        <ListItemText 
                            primary={task.title} 
                            secondary={`Estado: ${task.status}`}
                        />

                        <Button variant='contained' color="secondary" onClick={()=> handleEdit(task)}>
                            Editar
                        </Button>

                        

                    </ListItem>
                ))}

            </List>



        </Container>
    )


};

export default Dashboard;