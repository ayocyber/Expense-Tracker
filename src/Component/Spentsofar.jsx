import React from "react";
import { AppContext } from "../Context/AppContext";


function Spentsofar(){
    const {expense} = React.useContext(AppContext)

    const totalExpense = expense.reduce((total , item)=>{
        return(total = total + item.cost)
    }, 0)
    return(
        <div className="alert alert-primary">
            <span>Spent so far : £{totalExpense}</span>
        </div> 
    )
}

export default Spentsofar