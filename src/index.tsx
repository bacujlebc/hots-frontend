import React from "react";
import ReactDOM from "react-dom";

import App from "features/pages/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./commonStyles.scss";

// Utils
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
