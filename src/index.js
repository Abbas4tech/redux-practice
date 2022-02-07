import ReactDOM from "react-dom";
import store from "./state/store.js";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
