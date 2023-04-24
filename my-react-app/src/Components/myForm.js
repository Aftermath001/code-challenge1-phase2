import { useState } from "react";
import React from "react";
// import ReactDOM from "react-dom/client";

function MyForm() {
    const [data, setData] = useState({
      date:"",
      description:"",
      category:"",
      amount:""
    })
    

    function handleSubmit(e){
       const newData ={...data}
       newData[e.target.id] = e.target.value
       setData (newData)
       console.log(newData)
   }
   fetch("http://localhost:3000/db.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((newData) => (newData));

 return(
    <form onSubmit ={(e)=> handleSubmit(e)}>
      <h1>Form Input</h1>
      <div className='myForm'>
      <label>date</label>
      <input onChange={(e)=>handleSubmit(e)} id ="date" value ={data.date} type="date" name ="date" placeholder='Date'/>
      <label>Description</label>
      <input onChange={(e)=>handleSubmit(e)} id ="description" value ={data.description} type="text" name ="description" placeholder='Description'/>
      <label>category</label>
      <input onChange={(e)=>handleSubmit(e)} id ="category" value ={data.category} type="text" name ="category" placeholder='catergory'/>
      <label>Amount</label>
      <input onChange={(e)=>handleSubmit(e)} id ="amount" value ={data.amount} type="number" name ="amount" placeholder='amount'/>
      </div>
      
      <button input type='ubmit'>Submit</button>



      
     </form>
 )

}
export default MyForm;