import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={style.FriendListItemList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
