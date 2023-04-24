import React, { useState, useEffect } from "react";
import './transactions.css';
function TransactionList () {
    const [column,setColumn]= useState([]);
  const [transactions,setTransactions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/db.json")
          .then(response => response.json())
          .then(data=>  {
              setColumn(Object.keys(data.transactions[0]))
              setTransactions(data.transactions)
          })
          },[]);

    
      return (
        <div>
          <table>
            <thead>
              <tr>
                {column.map((c,i)=>(
                  <th keys={i}>{c}</th>
                  
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction,i)=>(
                <tr key={i}>
                  <td key={transaction.id}>{transaction.id}</td>
                  <td key={transaction.date}>{transaction.date}</td>
                  <td key={transaction.description}>{transaction.description}</td>
                  <td key={transaction.category}>{transaction.category}</td>
                  <td key={transaction.amount}>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
              }

export default TransactionList;