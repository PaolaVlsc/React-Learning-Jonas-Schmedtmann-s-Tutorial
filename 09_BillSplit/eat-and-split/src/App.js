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

function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

/**
 * Main component of the application.
 * Renders the sidebar with a list of friends and the form to add a new friend.
 * Handles friend selection and bill splitting.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  // State for friends and showAddFriend
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  // Function to handle adding a friend
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Function to toggle showAddFriend
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  // State for selectedFriend
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Function to handle friend selection
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Function to handle bill splitting
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {/* Render the FormSplitBill component if a friend is selected */}
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

/**
 * Renders a list of friends.
 * Handles friend selection and displays friend details.
 *
 * @param {Object[]} friends - The array of friends.
 * @param {Function} onSelection - The function to handle friend selection.
 * @param {Object} selectedFriend - The currently selected friend.
 * @returns {JSX.Element} The rendered FriendsList component.
 */
function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

/**
 * Renders a single friend item.
 * Displays friend details and handles friend selection.
 *
 * @param {Object} friend - The friend object.
 * @param {Function} onSelection - The function to handle friend selection.
 * @param {Object} selectedFriend - The currently selected friend.
 * @returns {JSX.Element} The rendered Friend component.
 */
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

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

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

/**
 * Renders a form to add a new friend.
 *
 * @param {Function} onAddFriend - The function to handle adding a new friend.
 * @returns {JSX.Element} The rendered FormAddFriend component.
 */
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handles form submission.
   * Adds a new friend with the provided name and image URL.
   * Resets the form fields.
   *
   * @param {Event} e - The form submission event.
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
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

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {}
