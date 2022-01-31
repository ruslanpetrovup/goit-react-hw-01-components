import React from 'react';
import style from './Profile.module.css';
import propTypes from 'prop-types';
import '../../style.css'

const Profile = ({ avatar, name, tag, location, stats}) => {
    return (
    <div className={style.profile}>
  <div className={style.description}>
    <img
        src={avatar}
      alt="Аватар пользователя"
      className={style.avatar}
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats__item}>
      <span className="label">Followers</span>
      <span className="quantity"> {stats.followers}</span>
    </li>
    <li className={style.stats__item}>
      <span className="label">Views</span>
      <span className="quantity"> {stats.views}</span>
    </li>
    <li className={style.stats__item}>
      <span className="label">Likes</span>
      <span className="quantity"> {stats.likes}</span>
    </li>
  </ul>
</div>
)
}
Profile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  stats: propTypes.array
}
export default Profile