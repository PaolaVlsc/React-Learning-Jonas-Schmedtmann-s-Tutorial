import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
    <StarRating size={24} color="red" className="test" />
    <StarRating
      messages={["Terrible", "Bad", "Good", "Very Good", "Excellent"]}
    />
    <StarRating size={24} color="green" defaultRating={3} />
  </React.StrictMode>
);
