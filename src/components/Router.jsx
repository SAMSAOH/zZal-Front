import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Result from "../pages/Result";
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/write" element={<></>}>
					<Route path=":idx" element={<></>} />
					<Route path="will" element={<></>} />
				</Route>
				<Route path="/result" element={<Result />} />
				<Route path="/delivery" element={<></>} />
				<Route path="/login" element={<Login />} />
				<Route path="/myPage" element={<></>} />
			</Routes>
		</Router>
	);
};
export default AppRouter;
