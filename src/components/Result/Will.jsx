import TextareaAutosize from "react-textarea-autosize";

const Will = ({ content, handleChange }) => {
	return (
		<section>
			<h3 className="yellow-text">나의 유서</h3>
			<hr />
			<div className="row-container input-wrapper">
				<div className="writewillTitle">{">>"}</div>
				<TextareaAutosize
					type="text"
					name="content"
					className="qnaInput"
					value={content}
					onChange={handleChange}
					required
				/>
			</div>
		</section>
	);
};

export default Will;
