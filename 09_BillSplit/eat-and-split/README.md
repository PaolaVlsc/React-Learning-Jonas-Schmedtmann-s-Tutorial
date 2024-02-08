

# Eat-and-Split

Eat-and-Split is a React application that helps friends split their meal costs. It allows users to add friends, record the cost of each friend's meal, and calculate how much each friend owes.
 <div align="center">
 <img src="https://github.com/PaolaVlsc/React-Learning-Jonas-Schmedtmann-s-Tutorial/blob/main/09_BillSplit/eat-and-split/image.png" width=50% />
</div>

## Features

- **Add New Friend**: Click the "Add New Friend" button to open a form and add a new friend to the list. Fill in the friend's name and image URL.

- **Select Friend**: Click on a friend in the list to select them. The selected friend will be highlighted, and you can split bills with them.

- **Split Bill**: After selecting a friend, you can split a bill with them. Enter the bill value, your expense, and choose who is paying the bill (you or the selected friend).

- **Balance Display**: The app displays the current balance with each friend. If they owe you money, it's displayed in green; if you owe them money, it's displayed in red.

## Components

### 1. `App` Component
The main component that renders the entire application. Manages state for adding new friends, the friends list, and the selected friend.

### 2. `FriendsList` Component
Displays the list of friends in the sidebar. Each friend is rendered using the `Friend` component.

### 3. `Friend` Component
Represents an individual friend in the list. Displays their image, name, and balance. Allows you to select the friend.

### 4. `FormAddNewFriend` Component
A form for adding a new friend. Includes fields for the friend's name and image URL.

### 5. `FormSplitBill` Component
A form for splitting a bill with the selected friend. Includes fields for the bill value, your expense, and who is paying the bill.

### 6. `Button` Component
A simple button component used throughout the application.

## Usage

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/react-friends-split-bill.git
   ```

2. Install dependencies.
   ```bash
   cd react-friends-split-bill
   npm install
   ```

3. Run the application.
   ```bash
   npm start
   ```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the application.
 
