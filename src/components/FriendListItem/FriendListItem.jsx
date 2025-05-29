import clsx from "clsx";
import style from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.FriendListItemBox}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(style.status, isOnline ? style.online : style.offline)}
      >
        {isOnline}
      </p>
    </div>
  );
}
