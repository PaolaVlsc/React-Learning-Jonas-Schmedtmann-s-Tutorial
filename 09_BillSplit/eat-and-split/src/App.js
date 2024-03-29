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

  // State for selected friend
  const [selectedFriend, setSelectedFriend] = useState(null); // no object at all at init
  function handleSelection(friend) {
    // setSelectedFriend(friend); ( this does not close it)
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    // close the other form if it is open
    setShowAddNewFriend(false);
  }

  function handleSplitBill(value) {
    // update the balance of the selected friend
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    // to close the form after splitting the bill
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddNewFriend && (
          <FormAddNewFriend onAddNewFriend={handleUpdateListOnAdd} />
        )}
        <Button onClick={handleShowAddNewFriend}>
          {!showAddNewFriend ? "Add New friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

// TODO: 02 FriendsList component (sidebar)
const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  // get friends from local storage - not used anymore as we are uising a lift up state
  // const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

// TODO: 03 Friend component for each friend in the list
const Friend = ({ friend, onSelection, selectedFriend }) => {
  // FIXME: optional chaining
  // state for the selected friend
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li key={friend.id} className={isSelected ? "selected" : ""}>
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
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
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
const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  // states
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : ""; // not state because we dont type anything

  // handle the form submission - to split the bill
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
