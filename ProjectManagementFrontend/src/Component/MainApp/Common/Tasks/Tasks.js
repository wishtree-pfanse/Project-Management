import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Box, Grid, Modal, Switch, Typography } from "@mui/material";
import moment from "moment";
import * as React from "react";
import axios from "axios";
import './Tasks.css'
const AddOrEditTask = React.lazy(() => import("../AddOrEditTask/AddOrEditTask"));

export default function Tasks(props){
  const [userInfo] = React.useState(props.userInfo?props.userInfo:null)
  const [taskCategory, setTaskCategory] = React.useState('allTask')
  const [dataToggler,setDataToggler] = React.useState(true);
  const [isPersonal, setIsPersonal] = React.useState(false);
  const [taskList, setTaskList] = React.useState([]);
  const [openTaskModal, setOpenTaskModal] = React.useState(false);
  const [project] = React.useState(props.project?props.project:null);
    const [isEditTaskPage,setIsEditTaskPage] = React.useState(false)
    const [editTaskPageInfo,setEditTaskPageInfo] = React.useState('')
    const handleClose = () => setOpenTaskModal(false); 
    const handleOpen = (isEdit,editTaskId) => {
      setEditTaskPageInfo(editTaskId?editTaskId:'');
      setIsEditTaskPage(isEdit)
      setOpenTaskModal(true);
    }
    const fetchTaskList =(taskListType)=>{
      setTaskCategory(taskListType)
    }
    const togglePersonalTask = (ev) =>{
      ev.preventDefault();
      ev.stopPropagation();
      if(!isPersonal)
        setTaskCategory('isPersonal')
      else if(isPersonal) 
        setTaskCategory('allTask')
      setIsPersonal(!isPersonal)
    }
    React.useEffect(()=>{
      props.setDataToHome(handleOpen)
    },[])
    React.useEffect(()=>{
      let url="";
      if(taskCategory==='allTask'){
        if(project) url = '/task/getAllTask/'+ project.id
        else url = '/task/getAllTask/null';
        axios.get(url).then((response)=>{
          setTaskList(response.data)
        })
      } else if(taskCategory){
        if(project) url = '/task/getTaskListByCategory/'+taskCategory+'/'+ project.id
        else url = '/task/getTaskListByCategory/'+taskCategory+'/null';
        axios.get(url).then((response)=>{
          setTaskList(response.data)
        })
      }
    },[taskCategory,dataToggler])
    const nextTransission=(taskId)=>{
      if(window.confirm('Do you realy want to change transission of this task?'))
      axios.put('/task/nextTransission/'+taskId).then(()=>{
        setDataToggler(!dataToggler)
      })
    }
    const deleteTask=(taskId)=>{
      if(window.confirm('Do you realy want to delete this task?'))
      axios.delete('/task/deleteTask/'+taskId).then(()=>{
        setDataToggler(!dataToggler)
      })
    }
    return(
        <Grid className="todoList" item xs={12}>
            <Grid className="taskCategory" item container xs={12}>
                <Grid className={taskCategory==="allTask" || taskCategory==="isPersonal"?"activeTaskList":""} onClick={()=>fetchTaskList(isPersonal?'isPersonal':'allTask')} item xs={2}>
                    { project?<h2>All task</h2>:<h2>{isPersonal?'Personal':'All task'} <Switch checked={!isPersonal} onClick={togglePersonalTask} size="small" /></h2>}
                </Grid>
                <Grid className={taskCategory==="todo"?"activeTaskList":""} onClick={()=>fetchTaskList('todo')} item xs={2}>
                    <h2>ToDo</h2>
                </Grid>
                <Grid className={taskCategory==="inprogress"?"activeTaskList":""} onClick={()=>fetchTaskList('inprogress')} item xs={2}>
                    <h2>In Progress</h2>
                </Grid>
                <Grid className={taskCategory==="review"?"activeTaskList":""} onClick={()=>fetchTaskList('review')} item xs={2}>
                    <h2>Review</h2>
                </Grid>
                <Grid className={taskCategory==="completed"?"activeTaskList":""} onClick={()=>fetchTaskList('completed')} item xs={2}>
                    <h2>Completed</h2>
                </Grid>
                <Grid className={taskCategory==="pending"?"activeTaskList":""} onClick={()=>fetchTaskList('pending')} item xs={2}>
                    <h2>Pending</h2>
                </Grid>
            </Grid>
            <Grid className="taskList" item xs={12}>
                {
                  taskList.map((task)=>(
                    <ListItem key={task._id}
                      secondaryAction={
                        <div>
                        <Tooltip title="Next Transission" placement="top">
                          <span>
                            <IconButton sx={{mr:'-5px'}} edge="end" onClick={()=>nextTransission(task._id)} disabled={task.transission==='completed'} label='changeTransission' aria-label="Transission">
                              <PublishedWithChangesIcon/>
                            </IconButton>
                          </span>
                        </Tooltip>
                        <Tooltip title="Delete Task" placement="top">
                          <span>
                            <IconButton sx={{mr:1}} edge="end" onClick={()=>deleteTask(task._id)} 
                            disabled={!(task.isPersonal || userInfo && (userInfo.role==='admin' || userInfo.role==='manager'))} 
                            label='changeTransission' aria-label="Transission">
                              <DeleteOutlineRoundedIcon/>
                            </IconButton>
                          </span>
                        </Tooltip>
                        </div>
                      }
                    >
                      <Tooltip title="Edit Task" placement="top">
                        <ListItemButton className="itemButton" onClick={()=>handleOpen(true, task._id)} sx={{pl:1,mr:"0"}}>
                          <ListItemIcon sx={{minWidth:"40px"}}>
                            <EditIcon/>
                          </ListItemIcon>
                          <ListItemText> 
                            <Grid container spacing={1}>
                              <Grid item xs={2}>
                                <Typography variant="inherit" noWrap>
                                  {task.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                {
                                task.project?
                                <Typography variant="inherit" noWrap>  
                                    <b>Project: </b>{task.project.title}
                                </Typography>
                                :<Typography variant="inherit">  
                                  <b>Own task</b>
                                </Typography>
                                }
                              </Grid>
                              <Grid className="taskDate" item xs={3}><b>Start:</b> {moment(task.startDate).format('MMM-DD-YYYY')} <b>End:</b> {moment(task.endDate).format('MMM-DD-YYYY')}</Grid>
                              <Grid sx={{textAlign:'right'}} item xs={3}>
                                {
                                  moment(task.endDate).isBefore(moment(),'date')?
                                    <ListItemText className="taskState">
                                      <Chip
                                      sx={{textTransform: "uppercase"}}
                                      className="pending"
                                      label='Pending'
                                      size="small"/>
                                    </ListItemText>
                                    :''
                                }
                                <ListItemText className="taskState">
                                  <Chip
                                    sx={{textTransform: "uppercase"}}
                                    className={task.transission}
                                    label={task.transission}
                                    size="small"/>
                                </ListItemText>  
                              </Grid>
                            </Grid> 
                          </ListItemText>
                          {/* <ListItemText secondary={"test"}/> */}                                                                              
                        </ListItemButton>
                      </Tooltip>
                        
                    </ListItem>
                  ))
                }
              </Grid>
              <Modal
                open={openTaskModal}
                onClose={handleClose}
                >
                <Box>
                  <AddOrEditTask isEditTask={isEditTaskPage} 
                    editTaskPageInfo={editTaskPageInfo} 
                    reRenderTask={setTaskCategory} 
                    handleClose={handleClose}
                    project={project}
                    {...props}/>
                </Box>
              </Modal>
            </Grid>
    )
}