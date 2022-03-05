import { useEffect, useState } from "react";
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
			<h2 className="yellow-text row-container">
				음성 유서
				<button onClick={handleAudioToggle}>
					<img src="../img/speaker.png" />
				</button>
			</h2>
		</section>
	);
};

export default AudioPart;
