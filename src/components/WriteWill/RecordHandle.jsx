import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useAudioPlayer from "../../hooks/useAudioPlay";
import useRecord from "../../hooks/useRecord";
import { RowContainer } from "../commons/Container";
import { AudioContainer } from "../Result/AudioPart";
import MicImg from "@assets/imgs/mic.png";
const RecordHandle = ({ setRecordFile }) => {
	const {
		onRec,
		handleOffRecord,
		handleRecord,
		time,
		recordFile,
		RecordTime,
		audioURL,
	} = useRecord({
		setRecordFile,
	});
	const {
		audioRef,
		handleTimeUpdate,
		PlayProgressBar,
		PlayPauseButton,
		PlayTime,
	} = useAudioPlayer({ isShowTime: true });
	useEffect(() => {
		setRecordFile(recordFile);
	}, [recordFile]);
	return (
		<AudioContainer width="90%" gap="20px">
			<RowContainer gap="20px">
				<h4>음성 유서</h4>
				<button onClick={onRec ? handleOffRecord : handleRecord}>
					<img src={MicImg} alt="녹음Img" width="32px" />
				</button>
				{onRec && (
					<Span>
						녹음중
						<span style={{ color: "red" }}> ● </span>
						<RecordTime {...{ time }} />
					</Span>
				)}
				<audio src={audioURL} ref={audioRef} onTimeUpdate={handleTimeUpdate} />
			</RowContainer>
			{!onRec && recordFile && (
				<RowContainer id="progress-bar-wrapper" gap="10px">
					<PlayPauseButton />
					<PlayProgressBar />
					<PlayTime />
				</RowContainer>
			)}
		</AudioContainer>
	);
};

export default RecordHandle;

const Span = styled.span`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;
