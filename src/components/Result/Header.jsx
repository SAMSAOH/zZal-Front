const Header = ({ owner, date }) => {
	return (
		<div className="label">
			<h2>{owner}의 유서</h2>
			<span>{date}</span>
		</div>
	);
};

export default Header;
