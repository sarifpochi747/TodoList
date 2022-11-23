import DataContext from "../DataContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect, useContext } from "react"
import {v4 as uuidv4} from "uuid"

function Form()
{
    const {setData,setSelectStatus} = useContext(DataContext)
    const [btnStatus,setBtnStatus] = useState(true)
    const [inputText,setInputText] = useState("");
    const btnSubmit= (event)=>{
        event.preventDefault();
        const initData ={
            complete:false,
            todo:inputText,
            id:uuidv4(),
        }
        
        // combine prevData+newData
        setData(prevData => {
            return [...prevData,initData]
        })
        setInputText("")
    }
    useEffect(()=>{
        if(inputText.length >0)
        {
            setBtnStatus(false)
        }
        else
        {
            setBtnStatus(true)
        }
    },[btnStatus,inputText])
    return(
        <form onSubmit={btnSubmit}>
            <input type={"text"} className="todo-input" value={inputText}onChange={(event) =>{
                setInputText(event.target.value)
            }}/>
            <button type="submit" className="todo-submit"  disabled={btnStatus}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className="select">
                <select name="todo-list"  onChange={(event)=>{
                    setSelectStatus(event.target.value);
                }}>
                    <option value={"all"}>ALL</option>
                    <option value={"complete"}>Complete</option>
                    <option value={"uncomplete"}>Uncomplete</option>

                </select>
            </div>
        </form>
     
    )

    
}

export default Form