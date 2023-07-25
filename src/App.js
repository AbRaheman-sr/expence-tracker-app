import React from "react";
import Expenses from "./components/Expenses/Expenses";

const expense = [{
  date : new Date(2023,5,10),
  tittle : "Car Insurance",
  amount: 299.00
},
{
  date : new Date(2023,6,20),
  tittle : "Home Expenses",
  amount: 199.00
},
{
  date : new Date(2023,7,30),
  tittle : "SIP ",
  amount: 599.00
}
]
function App (){
  
  return(
   <div>
    <h1>Let's Start</h1>
    <Expenses expense = {expense} />
   </div>
  )
}
export default App;