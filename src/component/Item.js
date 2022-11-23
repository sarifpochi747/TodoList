import DataContext from "../DataContext"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck,faTrash} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"

function Items(props)
{
    const {complete,todo,id} = props;
    const completeStatus = (complete)?"complete":"uncomplete";
    
    

    return(
        <div className="todo">
            {/* text */}
            <li className="todo-item" id={completeStatus}>{todo}</li>
            {/* //icon Check */}
            <div className="btn-icon">
                
                <button type="button" className="complete-btn" onClick={()=>{
                    props.complete_todo(id)
                }} >
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
                {/* //icon check */}
                <button type="button" className="uncomplete-btn" onClick={()=>{
                    props.uncomplete_todo(id)
                }}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    )
};

export default Items