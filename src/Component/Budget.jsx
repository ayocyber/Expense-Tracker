import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Budgetcom from "./Budgetcom";
import Reamaining from "./Remaining";
import Spentsofar from "./Spentsofar";
import Expense from "./Expense";
import AddExpemseform from "./AddExpenseform";

function Budget(){
    return(
        <div className="container">
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-sm">
                   <Budgetcom/>
                </div>
                <div className="col-sm">
                    <Reamaining/>
                </div>
                <div className="col-sm">
                    <Spentsofar/>
                </div>
                <div>
                    <h3 className="mt-3">Expense</h3>
                    <Expense/>
                </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="mt-3">
                <div className="col-sm ">
                    <AddExpemseform />
                </div>
            </div>
        </div>
    )
}

export default Budget