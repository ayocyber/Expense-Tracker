import React from "react";
import { TiDelete } from "react-icons/ti"
import { AppContext } from "../Context/AppContext";

function ExpenseItem({id , name , cost}){
    const {dispatch} = React.useContext(AppContext)

    function HandleDelete(){
        dispatch({
            type : "DELETE_EXPENSE",
            payload : id
        })
    }
    return(
        <li className="list-group-item d-flex justify-content-between align-item-center">
            {name} 
            <div>
            <span class="badge rounded-pill text-bg-primary">
                £{cost}
            </span>
                <TiDelete size="1.5em" onClick={HandleDelete }></TiDelete>
            </div>
            
        </li>
    )
}

export default ExpenseItem