import React from "react";
import { AppContext } from "../Context/AppContext";



function Reamaining(){
    const {budget , expense} = React.useContext(AppContext)

    const totalExpenses = expense.reduce((total ,item)=> {
        return ( total + item.cost)
    },0)
    const alertType = totalExpenses > budget  ? "alert-danger" : "alert-success"
    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining £{budget - totalExpenses}</span>
        </div>
    )
}

export default Reamaining 