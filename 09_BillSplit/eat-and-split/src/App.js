import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// TODO: 04 Button component - optimize code
const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

// TODO: 01 App component - main
export default function App() {
  // State for adding new friend
  const [showAddNewFriend, setShowAddNewFriend] = useState(false);
  function handleShowAddNewFriend() {
    setShowAddNewFriend((show) => !show);
  }

  // State for friends list
  const [friends, setFriends] = useState(initialFriends);
  function handleUpdateListOnAdd(friend) {
    setFriends((friends) => [...friends, friend]); // spreading technique
    setShowAddNewFriend(false); // to close the form after adding a new friend
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddNewFriend && (
          <FormAddNewFriend onAddNewFriend={handleUpdateListOnAdd} />
        )}
        <Button onClick={handleShowAddNewFriend}>
          {!showAddNewFriend ? "Add New friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

// TODO: 02 FriendsList component (sidebar)
const FriendsList = ({ friends }) => {
  // get friends from local storage - not used anymore as we are uising a lift up state
  // const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

// TODO: 03 Friend component for each friend in the list
const Friend = ({ friend }) => {
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* implement the logic of the friend balance here  */}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* <button className="button">Select</button> */}
      <Button>Select</Button>
    </li>
  );
};

// TODO: 05 FormAddFriend component - to add a new friend
const FormAddNewFriend = ({ onAddNewFriend }) => {
  // states to get the current state of the input fields
  const [name, setName] = useState(""); // name of the friend
  const [image, setImage] = useState("https://i.pravatar.cc/48"); // image of the friend

  // handle the form submission
  const handleAddNewFriend = (e) => {
    e.preventDefault(); // prevent the page to refresh

    // if one of the field is empty
    if (!name || !image) {
      alert("Please fill in all the fields");
      return;
    }
    // create a new friend object
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);

    onAddNewFriend(newFriend); // add the new friend to the list
    // reset the form fields
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddNewFriend}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add friend</Button>
    </form>
  );
};

// TODO: 06 Second form
const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🕴️ Your expense </label>
      <input type="text" />

      <label> 🧑‍🤝‍🧑 X's expenses</label>
      <input type="text" disabled />

      <label> 🤔 Who is paying the bill </label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
