import style from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.avatarWrapper}>
      <div className={style.avatarBox}>
        <img className={style.avatarImg} src={avatar} alt={username} />
        <p className={style.avatarStyleDescriptionName}>{username}</p>
        <p className={style.avatarStyleDescription}>@{tag}</p>
        <p className={style.avatarStyleDescription}>{location}</p>

        <div className={style.boxAvatarTags}>
          <ul>
            <li>
              <span>Followers</span>
              <span className={style.avatarNumber}>{stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span className={style.avatarNumber}>{stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span className={style.avatarNumber}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
