import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/write" element={<></>}>
					<Route path=":idx" element={<></>} />
					<Route path="will" element={<></>} />
				</Route>
				<Route path="/result" element={<></>} />
				<Route path="/delivery" element={<></>} />
				<Route path="/login" element={<></>} />
				<Route path="/myPage" element={<></>} />
			</Routes>
		</Router>
	);
};
export default AppRouter;
