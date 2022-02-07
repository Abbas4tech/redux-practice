import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actionCreators from "./state/action-creaters/actionIndex";

const Cart = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  // const { moneyWithdraw, moneyDeposite } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );
  return (
    <div>
      <section>
        <div>
          <h2>Deposite / Withdraw Money</h2>
          <button onClick={() => dispatch(actionCreators.moneyDeposite(100))}>
            +
          </button>
          <button onClick={() => dispatch(actionCreators.moneyWithdraw(100))}>
            -
          </button>
        </div>

        <p>Updated Balance : {balance}</p>
      </section>
    </div>
  );
};

export default Cart;
