import TextareaAutosize from "react-textarea-autosize";
import { RowContainer } from "../commons/Container";

const Will = ({ content, handleChange }) => {
	return (
		<section>
			<h3 className="yellow-text">나의 유서</h3>
			<hr />
			<RowContainer gap="10px" className="input-wrapper">
				<div className="writewillTitle">{">>"}</div>
				<TextareaAutosize
					type="text"
					name="content"
					className="qnaInput"
					value={content}
					onChange={handleChange}
					required
				/>
			</RowContainer>
		</section>
	);
};

export default Will;
