import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Delivery from "../pages/Delivery";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Result from "../pages/Result";
import WriteIndex from "../pages/WriteIndex";
import WriteWill from "../pages/WriteWill";
import MyPage from "../pages/MyPage";
import MyWill from "../pages/MyWill";
import EditWill from "../pages/EditWill";
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/write">
					<Route path=":idx" element={<WriteIndex />} />
					<Route path="will" element={<WriteWill />} />
				</Route>
				<Route path="/result">
					<Route path=":willId" element={<Result />} />
				</Route>
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/login" element={<Login />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/mywill">
					<Route path=":willId" element={<MyWill/>} />
					<Route path="edit/:willId" element={<EditWill/>}></Route>
				</Route>
			</Routes>
		</Router>
	);
};
export default AppRouter;
