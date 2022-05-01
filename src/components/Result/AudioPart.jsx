import { useEffect, useState } from "react";
import styled from "styled-components";
const AudioPart = (resultContent) => {
	const [audio, setAudio] = useState();
	const [isPlay, setIsPlay] = useState(false);
	const handleAudioToggle = () => {
		isPlay ? audio.pause() : audio.play();
		setIsPlay((p) => !p);
	};
	useEffect(() => {
		setAudio(new Audio("../test.mp3"));
	}, [resultContent]);
	return (
		<section>
			<StyledH2>
				음성 유서
				<button onClick={handleAudioToggle}>
					<img src="../img/speaker.png" alt="녹음재생" />
				</button>
			</StyledH2>
		</section>
	);
};

export default AudioPart;
const StyledH2 = styled.h2`
	display: flex;
	flex-direction: row;
	gap: 10px;
	color: #f5de0e;
`;
