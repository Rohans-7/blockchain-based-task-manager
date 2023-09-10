import {useState,useEffect} from "react";
import Navigation from "../components/Navigation";
const ViewAllTasks=()=>{
    const[taskList,setTaskList]=useState([])

    useEffect(()=>{
        const allTasks=async()=>{
            try{
                const res=await fetch("http://localhost:3000/api/ethereum/view-all-task",{
                    method:"GET",
                    headers:{
                        "content-type":"application/json"
                    }
                })
                const data=await res.json();
                if(data.status===200){
                    console.log(data.taskList);
                    setTaskList(data.taskList);  
                }
            }catch(error){
                console.error(error);
            }
        }
        allTasks();
    },[])
    return<>
    <Navigation/>
    </>
}

export default ViewAllTasks;