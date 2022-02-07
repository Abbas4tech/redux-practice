export const moneyWithdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const moneyDeposite = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposite",
      payload: amount,
    });
  };
};
