import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../commons/Buttons";
import { ColContainer, RowContainer } from "../commons/Container";
const AudioPart = (resultContent) => {
	const audioRef = useRef(new Audio("/test.mp3"));
	const [isPlay, setIsPlay] = useState(false);
	const [time, setTime] = useState(0);
	const [progress, setProgress] = useState(0);
	// useEffect(() => {
	// 	if (audioRef.current.duration) {
	// 		audioRef && setTime(audioRef.current.duration);
	// 	}
	// }, [audioRef]);
	const handleAudioToggle = () => {
		isPlay ? audioRef.current.pause() : audioRef.current.play();
		setIsPlay((p) => !p);
	};
	const onTimeUpdate = () => {
		setTime(audioRef.current.currentTime);
		setProgress(
			(audioRef.current?.currentTime / audioRef.current?.duration) * 100
		);
	};
	return (
		<AudioContainer gap="20px">
			<RowContainer gap="20px">
				<h4>음성 유서</h4>
				<Button onClick={handleAudioToggle} padding="0">
					{isPlay ? (
						<FontAwesomeIcon icon={faPause} />
					) : (
						<FontAwesomeIcon icon={faPlay} />
					)}
					{/* <img src="/img/speaker.png" alt="녹음재생" width="32px" /> */}
				</Button>
				<audio src={"/test.mp3"} ref={audioRef} onTimeUpdate={onTimeUpdate} />
			</RowContainer>
			<RowContainer width="100%" spaceBetween gap="10px">
				<AudioProgressBar innerWidth={`${progress}%`}>
					<div></div>
				</AudioProgressBar>
				<span>
					{`${parseInt(time / 60)}`.padStart(2, "0")}:
					{`${parseInt(time) % 60}`.padStart(2, "0")}
				</span>
			</RowContainer>
		</AudioContainer>
	);
};

export default AudioPart;
const AudioContainer = styled(ColContainer)`
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

const AudioProgressBar = styled.div`
	width: 100%;
	background-color: #ffffff50;
	height: 5px;
	z-index: 10;
	div {
		transition: 0.3s;
		width: ${({ innerWidth }) => innerWidth};
		height: 5px;
		background-color: white;
	}
`;
