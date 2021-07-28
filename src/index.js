import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile/Profile';
import user from './components/user.json';
import statisticalData from './components/statistical-data.json';
import Statistics from './Statistics/Statistics';
import friends from './components/friends.json';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './components/transactions.json';

ReactDOM.render(
    <>
    {/* Профиль */}
    <Profile avatar={user.avatar}
    name={user.name}
    tag={user.tag} 
    location={user.location} 
    followers={user.stats.followers} 
    views={user.stats.views} 
    likes={user.stats.likes} />
    
    {/* Статистика */}
    <Statistics title="Upload stats"
    stats={statisticalData} />
    <FriendList friends={friends} />
    
    {/* Банк счет */}
    <TransactionHistory items={transactions}/>
    </>,
    document.getElementById('root'))


