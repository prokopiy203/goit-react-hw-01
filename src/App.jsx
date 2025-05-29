import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendsList from "./components/FriendList/FriendList";
import "./App.css";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
