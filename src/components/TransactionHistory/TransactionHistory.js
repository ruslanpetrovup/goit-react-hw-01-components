import React from 'react';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table class={style.transactionHistory}>
  <thead className={style.title}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={style.conten}>
    {items.map(({id,type,amount,currency}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
    </table>

    )
}
export default TransactionHistory