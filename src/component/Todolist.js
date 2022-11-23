import DataContext from "../DataContext"
import Items from "./Item"
import {useContext, useEffect, useState} from "react"



function Todolist()
{
    //ใช้ useContext เพื่อดึง data มาใช้งาน
    const{ data,setData,selectStatus }= useContext(DataContext)
    const [dataFilter,setDataFilter] = useState([])

    // function นี้ใช้งานเมื่มีการกด btn complete
    const complete_todo =(id)=>{
        setData(data.map(value => {
            if(value.id === id)
            {
                value.complete = true
            }
            return value
        }))
    }
    // function นี้ใช้งานเมื่มีการกด btn uncomplete
    const uncomplete_todo =(id)=>{
        setData(data.filter(value => {
            return value.id !== id
        }))
    }
    // เมื่อมีการกด select all ,complete ,uncomplete useEffect นี้ก็จะทำงาน
    useEffect(()=>{
        if(selectStatus === "complete")
        {
            setDataFilter(data.filter(value => {
                return value.complete === true;
            })) 
        }
        else if(selectStatus === "uncomplete")
        {
            setDataFilter(data.filter(value => {
                return value.complete === false;
            }))
        }
        else
        {
            setDataFilter(data.map(value => {
                return value
            }))
        }
    },[selectStatus,data,setDataFilter])
    
    return(
        <div>
            <ul>
                {dataFilter.map(x=>{
                    return <Items  {...x} key={x.id} complete_todo={complete_todo} uncomplete_todo={uncomplete_todo}/>
                })}
            </ul>
        </div>
    )
}

export default Todolist