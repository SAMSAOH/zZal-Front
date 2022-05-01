import TextareaAutosize from "react-textarea-autosize";
import { RowContainer } from "../commons/Container";

const EditWill = ({ content, handleChange }) => {
	return (
		<section>
			<h3 className="yellow-text">나의 유서</h3>
			<hr />
			<RowContainer className="input-wrapper">
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

export default EditWill;
