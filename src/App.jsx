import React from "react";
import "./App.css";
import Balance from "./components/Balance.jsx";

export default function App() {
  return (
    <div style={{textAlign:"center", fontFamily:"Montserrat, sans-serif", }}>
      <h2 className="heading">Expense Tracker</h2>
      <Balance />
    </div>
  );
}
