import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Budget from "./Component/Budget";
import { AppProvider } from "./Context/AppContext";


function App() {
  return (
    <AppProvider>
   <div className="App">
      <Budget/>
    </div>
    </AppProvider>
 
  );
}

export default App;
