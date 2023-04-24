
import './App.css';
import TransactionList from './Components/transactionList';
import MyForm from './Components/myForm';
import NavBar from './Components/NavBar';   

function App() {
  return(
   <div className='App'>
    <NavBar/>
    <TransactionList/>
     
     <MyForm/>
   </div>

  )


}

export default App;
