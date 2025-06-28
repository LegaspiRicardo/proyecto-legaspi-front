import React from "react";
import {Container, Typography, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select} from "@mui/material";
import axios from 'axios';
import {saveTask, getTasks, deleteTask} from '../utils/localDB.ts'

interface Task {
    id: number;
    title: string;
    status: string;
    pendingSync?: boolean; //Indica si la tarea esta pendiente de ser sincronizada
}

const Dashboard: React.FC = () => {

    const Dashboard: React .FC = (){
        
    }
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [open, setOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);


//obtener tareas (online y local)
    const fetchTasks = axync () => {
        const offlineTasks = await getTasks(); //Obtener las tareas de la base de datos

        if(checkConnection()){
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/tasks',{
                    headers: {Authorization: token}
                });    
                //Crear un conjunto de IDs de tareas sincronizadas
                const syncedTasks = new Set(response.data.map((task: Task) => task.id));  

                //Filtra las tareas locales que no estan sincronizadas
                const filteredOfflineTasks = offlineTasks.filter((task: Task) => !syncedTasks.has(task.id)); 
                
                //Supone que el backend devuelve un array de tareas
                setTasks([...response.data, ...filteredOfflineTasks]);
            } catch(error){
                setErrorMessage('Error al obtener las tareas: ');
            }
        } else{
            //Si no hay conexion, usar las tareas locales
            setTasks(offlineTasks);
        }

    }

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