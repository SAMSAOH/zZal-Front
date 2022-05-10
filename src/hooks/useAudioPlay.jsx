import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
const useAudioPlayer = () => {
	const audioRef = useRef();
	const [isPlay, setIsPlay] = useState(false);
	const [time, setTime] = useState(0);
	const [progress, setProgress] = useState(0);
	const handleAudioToggle = () => {
		isPlay ? audioRef.current.pause() : audioRef.current.play();
		setIsPlay((p) => !p);
	};
	const handleTimeUpdate = () => {
		setTime(audioRef.current.currentTime);
		setProgress(
			(audioRef.current?.currentTime / audioRef.current?.duration) * 100
		);
	};
	const PlayProgressBar = () => {
		return (
			<ProgressContainer>
				<AudioProgressBar innerWidth={`${progress}%`}>
					<div></div>
				</AudioProgressBar>
			</ProgressContainer>
		);
	};
	const PlayTime = () => {
		return (
			<span>
				{`${parseInt(time / 60)}`.padStart(2, "0")}:
				{`${parseInt(time) % 60}`.padStart(2, "0")}
			</span>
		);
	};
	const PlayPauseButton = () => {
		return (
			<button onClick={handleAudioToggle}>
				{isPlay ? (
					<FontAwesomeIcon icon={faPause} />
				) : (
					<FontAwesomeIcon icon={faPlay} />
				)}
			</button>
		);
	};
	return {
		audioRef,
		handleTimeUpdate,
		handleAudioToggle,
		PlayProgressBar,
		PlayPauseButton,
		isPlay,
		time,
		PlayTime,
	};
};

export default useAudioPlayer;
const ProgressContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
const AudioProgressBar = styled.div`
	width: 100%;
	background-color: #ffffff50;
	height: 5px;
	div {
		transition: 0.3s;
		width: ${({ innerWidth }) => innerWidth};
		height: 5px;
		background-color: white;
	}
`;
