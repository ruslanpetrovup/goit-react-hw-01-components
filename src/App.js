import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/user.json';
import statisticalData from './components/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/friends.json';
import FriendList from './components/FriendsList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/transactions.json';

const App = () => (
  <>
    {/* Профиль */}
    <Profile avatar={user.avatar}
    name={user.name}
    tag={user.tag} 
    location={user.location} 
    stats={user.stats} />
    
    {/* Статистика */}
    <Statistics title="Upload stats"
    stats={statisticalData} />
    
    {/* Друзья */}
    <FriendList friends={friends} />
    
    {/* Банк счет */}
    <TransactionHistory items={transactions}/>
    </>
)
export default App