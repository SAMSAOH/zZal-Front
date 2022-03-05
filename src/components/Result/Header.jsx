const Header = ({ owner }) => {
	return (
		<div className="label">
			<h2>{owner}의 유서</h2>
			<span>{"2022-03-05"}</span>
		</div>
	);
};

export default Header;
