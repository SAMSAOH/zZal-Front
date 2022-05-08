import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./modules/store";
import GlobalStyle from "./assets/styles/globalStyles";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle/>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
