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
    {items.map(num => (
    <tr key={num.id}>
      <td>{num.type}</td>
      <td>{num.amount}</td>
      <td>{num.currency}</td>
    </tr>
    ))}
  </tbody>
    </table>

    )
}
export default TransactionHistory