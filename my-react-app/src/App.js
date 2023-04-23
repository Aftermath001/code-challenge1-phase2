
import './App.css';
import TransactionList from './transactionList';
import MyForm from './myForm';
    

function App() {
  return(
   <div className='App'>
     <TransactionList/>
     <form>
      <h1>Form Input</h1>
      <div className='myForm'>
      <label>date</label>
      <input type="date" name ="Date" placeholder='Date'/>
      <label>Description</label>
      <input type="text" name ="Description" placeholder='Description'/>
      <label>category</label>
      <input type="text" name ="category" placeholder='catergory'/>
      <label>Amount</label>
      <input type="number" name ="amount" placeholder='amount'/>
      </div>
      
      <button input type='Submit'>Submit</button>



      
     </form>
     {/* <MyForm/> */}
   </div>

  )


}

export default App;
