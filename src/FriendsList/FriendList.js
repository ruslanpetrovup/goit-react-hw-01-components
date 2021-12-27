import React from 'react';
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul class={style.friendList}>
          {friends.map(num => (
              <li class={style.item}>
                  <span class={ num.isOnline ? style.status : style.offline}></span>
          <img class={style.avatar} src={num.avatar} alt={num.name} width="48" />
          <p class="name">{num.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
