import React from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";


function Expense(){
    const [searchedText , setSearchText] = React.useState("")
    const {expense}  = React.useContext(AppContext)
    return(
        <ul className="list-group">
            <div className="mb-3">
            <input 
            type="text" 
            className="form-control "
            value={searchedText}
            onChange={(e)=>setSearchText(e.target.value)}
            placeholder="Type to search..."
            />
            </div>
            {expense.filter((item)=>{
                return searchedText.toLowerCase() === "" ? 
                item : 
                item.name.toLowerCase().includes(searchedText)
            }).map(expense=>{
                return(
                    <ExpenseItem
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost}
                    />
                )
            })}
        </ul>
    )
}

export default Expense