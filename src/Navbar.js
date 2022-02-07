import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);

  console.log(amount);

  return (
    <div>
      <nav>
        <div>
          <h1>Welcome to the React & Redux Bank</h1>
        </div>
        <div>
          <button disabled={true}>Your balance : {amount}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
