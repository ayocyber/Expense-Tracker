import React from "react";
import { AppContext } from "../Context/AppContext";


function Budgetcom(){
    const {budget, dispatch} = React.useContext(AppContext)
    const [editBudget , setEditBudget] = React.useState(budget)
    const [change , setChange] = React.useState(true)
    

    function handleEdit(){
        setChange(prev => !prev)
        const newBudget = editBudget
        if(isNaN(newBudget) || newBudget <= 0){
            return 
        }
        dispatch({
            type : "EDIT_BUDGET",
            payload : editBudget
        })
    
    }
       


    return(
        <div className="alert alert-secondary d-flex justify-content-between align-item-center">
           {
            change ?  <span className="text-center">Budget : £{budget}</span> : 
            <div>
            <input
            value={editBudget} 
            type="number" 
            className="form-control"
            onChange={e=>setEditBudget(e.target.value)}
            />
           </div>
           }
           
           <button onClick={handleEdit} className="btn btn-primary"> {change ?" edit" : "save"}</button>
        </div>
    )
}

export default Budgetcom