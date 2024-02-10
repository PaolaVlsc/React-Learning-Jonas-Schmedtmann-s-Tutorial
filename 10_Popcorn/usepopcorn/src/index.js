import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";
// import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
    <StarRating size={24} color="red" className="test" />
    <StarRating
      messages={["Terrible", "Bad", "Good", "Very Good", "Excellent"]}
    />
    <StarRating size={24} color="green" defaultRating={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
