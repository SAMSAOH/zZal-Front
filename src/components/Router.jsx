import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Result from "../pages/Result";
import WriteIndex from "../pages/WriteIndex";
import WriteWill from "../pages/WriteWill";
import MyPage from "../pages/MyPage";
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/write" element={<></>}>
					<Route path=":idx" element={<></>} />
					<Route path="will" element={<WriteWill/>} />
				</Route>
				<Route path="/result" element={<Result />} />
				<Route path="/delivery" element={<></>} />
				<Route path="/login" element={<Login />} />
				<Route path="/myPage" element={<MyPage/>} />
			</Routes>
		</Router>
	);
};
export default AppRouter;
