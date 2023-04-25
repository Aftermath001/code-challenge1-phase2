
import './App.css';

import MyForm from './Components/myForm';
import NavBar from './Components/NavBar';   
import TransactionTable from './Components/transactionList';

function App() {
  return(
   <div className='App'>
    <NavBar/>
    <TransactionTable/>
     
     <MyForm/>
   </div>

  )


}

export default App;
