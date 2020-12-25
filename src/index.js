import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavProvider } from "./navContext";
import { register } from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<NavProvider>
			<App />
		</NavProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.register();
