# React Steps App

This is a simple React application that demonstrates a step-by-step process with previous and next buttons. It includes state management using the `useState` hook and showcases the use of React components and styling.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-steps-app.git
   ```

2. Change directory to the project folder:

   ```bash
   cd react-steps-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Open the application in your web browser.
2. Click the "Next" button to navigate through the steps.
3. Click the "Previous" button to go back to the previous step.
4. Click the close button (X) to toggle the visibility of the steps.

### 1. Step Navigation

Upon opening the application in your web browser, you'll see a step-by-step process with three steps:

- Step 1: "Learn React ⚛️"
- Step 2: "Apply for jobs 💼"
- Step 3: "Invest your new income 🤑"

The current step is highlighted in a different color, and the corresponding message is displayed below the step numbers.

### 2. Next and Previous Buttons

- **Next Button:**
  - Clicking the "Next" button will advance to the next step in the process.
  - If you are on the last step (Step 3), clicking "Next" will have no effect.

- **Previous Button:**
  - Clicking the "Previous" button will go back to the previous step in the process.
  - If you are on the first step (Step 1), clicking "Previous" will have no effect.

### 3. Toggle Steps Visibility

- **Close Button (X):**
  - There is a close button (X) positioned at the top right corner of the application.
  - Clicking the close button will toggle the visibility of the entire steps section.
  - When closed, the steps section is hidden, and the close button can be clicked again to show the steps.

## Styling

The styling of the application is done using CSS and follows a clean and modern design. The main styling file is located at `src/index.css`.

## Code Structure

- `src/App.js`: Contains the main React component for the application.
- `src/index.js`: Renders the main React component to the root HTML element.

## Dependencies

- React
- ReactDOM
 
## Author

Paola Velasco 
