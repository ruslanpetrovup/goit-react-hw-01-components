import React from 'react';
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul class={style.friendList}>
          {friends.map(({isOnline,avatar,name,},index) => (
            <li key={index} class={style.item}>
                  <span class={ isOnline ? style.status : style.offline}></span>
          <img class={style.avatar} src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
