import React, { useState, useEffect } from "react";

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
            <th>
              <tr>
                {column.map((c,i)=>(
                  <th keys={i}>{c}</th>
                  
                ))}
              </tr>
            </th>
            <tb>
              {transactions.map((transaction,i)=>(
                <tr key={i}>
                  <td>{transaction.id}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tb>
          </table>
        </div>
      )
              }

export default TransactionList;