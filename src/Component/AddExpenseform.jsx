import React from "react";
import { AppContext } from "../Context/AppContext";
import {v4 as uuid} from "uuid"


function AddExpemseform(){
    const {dispatch} = React.useContext(AppContext)
    const [name , setName] = React.useState("")
    const [cost , setCost] = React.useState("")

    function Handlesubmit(event){
        event.preventDefault()
        
        const expense = {
            id : uuid(),
            name : name,
            cost : parseInt(cost), 
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload:expense 
        })
    }
    return(
        <form onSubmit={Handlesubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                    type="text" 
                    required
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input 
                    required 
                    type="text" 
                    className="form-control" 
                    id="cost"
                    value={cost}
                    onChange={e=>setCost(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-sm mt-3">
                <button type="submit" className="btn btn-primary ">
                    Save
                </button>
            </div>
        </form>
    )
}

export default AddExpemseform