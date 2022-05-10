import React from "react";
import styled from "styled-components";
import useAudioPlayer from "../../hooks/useAudioPlay";
import { ColContainer, RowContainer } from "../commons/Container";
const AudioPart = (resultContent) => {
	const {
		audioRef,
		handleTimeUpdate,
		PlayProgressBar,
		PlayPauseButton,
		PlayTime,
	} = useAudioPlayer({ isShowTime: true });

	return (
		<AudioContainer gap="20px">
			<RowContainer gap="20px">
				<h4>음성 유서</h4>
				<PlayPauseButton />
				<audio
					src={"/test.mp3"}
					ref={audioRef}
					onTimeUpdate={handleTimeUpdate}
				/>
			</RowContainer>
			<RowContainer gap="20px">
				<PlayProgressBar />
				<PlayTime />
			</RowContainer>
		</AudioContainer>
	);
};

export default AudioPart;
export const AudioContainer = styled(ColContainer)`
	border: solid 3px #f5de0e;
	background-color: #00000020;
	padding: 20px;
	& h4 {
		color: #f5de0e;
		margin: 0;
	}
	button {
		display: flex;
		align-items: center;
		svg {
			color: #36c6bd;
		}
	}
`;
