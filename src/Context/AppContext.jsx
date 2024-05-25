import React from "react";

function Appreducer(state , action){
    switch(action.type){
        case "ADD_EXPENSE":
            return{
                ...state,
                expense : [...state.expense , action.payload],
            }
        case "DELETE_EXPENSE":
            return{
                ...state,
                expense : state.expense.filter(
                    (expense)=>expense.id !== action.payload)
            } 
            case "EDIT_BUDGET":
                return {
                    ...state,
                    budget: action.payload
                };
            
        default :
            return state
    }
}


const initialState = {
    budget : 7000,
    expense : [
        {id:12 , name:"Shopping" , cost:400},
        {id: 13 , name: "hospital", cost:200},
        {id: 14 , name: "car Service", cost:50},
    ]
}
console.log(initialState)

export const AppContext = React.createContext()

export function AppProvider({children}){
    const [state , dispatch] = React.useReducer(Appreducer , initialState)
    

    return(
        <AppContext.Provider value={{
            budget : state.budget,
            expense : state.expense,
            dispatch,
        }}>
            {children}
        </AppContext.Provider>
    )
}
