import React, { useState } from "react";
import RecordCountDown from "./RecordCountDown";
import RecordTime from "./RecordTime";
const RecordHandle = ({ setRecordFile }) => {
	const [stream, setStream] = useState();
	const [media, setMedia] = useState();
	const [onRec, setOnRec] = useState(false);
	const [source, setSource] = useState();
	const [analyser, setAnalyser] = useState();
	const [audioUrl, setAudioUrl] = useState();
	const [disabled, setDisabled] = useState(true);
	const [time, setTime] = useState();

	const [audio, setAudio] = useState();
	const onRecAudio = () => {
		setDisabled(true);
		const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

		const analyser = audioCtx.createScriptProcessor(0, 1, 1);
		setAnalyser(analyser);

		function makeSound(stream) {
			const source = audioCtx.createMediaStreamSource(stream);
			setSource(source);

			source.connect(analyser);
			analyser.connect(audioCtx.destination);
		}

		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			setOnRec(true);
			const mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start();
			setStream(stream);
			setMedia(mediaRecorder);
			makeSound(stream);

			analyser.onaudioprocess = function (e) {
				setTime(e.playbackTime);
				if (e.playbackTime > 180) {
					stream.getAudioTracks().forEach(function (track) {
						track.stop();
					});
					mediaRecorder.stop();
					analyser.disconnect();
					audioCtx.createMediaStreamSource(stream).disconnect();

					mediaRecorder.ondataavailable = function (e) {
						setAudioUrl(e.data);
						setOnRec(false);
					};
				} else {
					setOnRec(true);
				}
			};
		});
	};
	const offRecAudio = () => {
		media.ondataavailable = function (e) {
			setAudioUrl(e.data);
			setOnRec(false);
		};

		stream.getAudioTracks().forEach(function (track) {
			track.stop();
		});

		media.stop();

		analyser.disconnect();
		source.disconnect();
		setAudio(new Audio(URL.createObjectURL(audioUrl)));
		const sound = new File([audioUrl], "soundBlob", {
			lastModified: new Date().getTime(),
			type: "audio",
		});
		setDisabled(false);
		setRecordFile(sound);
	};

	const [onPlay, setOnPlay] = useState(false);
	const handlePlayClick = () => {
		if (onPlay) {
			audio.pause();
			audio.currentTime = 0;
		} else {
			audio.play();
		}
		setOnPlay((p) => !p);
	};
	return (
		<>
			<div className="control-wrapper">
				<button onClick={onRec ? offRecAudio : onRecAudio}>
					<img src="../img/mic.png" alt="녹음Img" />
				</button>
				<div className="writevoiceTitle">음성 유서 남기기</div>
				{onRec && (
					<span className="row-container">
						녹음중
						<RecordTime time={time} />
					</span>
				)}
			</div>
			<div className="writevoice-wrapper"></div>
			{!disabled && (
				<div className="row-container">
					<button
						onClick={handlePlayClick}
						className="row-container record-play"
					>
						<div className="row-container">
							<img src="../img/speaker.png" alt="녹음재생" width="30px" />
							녹음 재생
						</div>
					</button>
					{onPlay && <RecordCountDown time={time} setOnPlay={setOnPlay} />}
				</div>
			)}
		</>
	);
};

export default RecordHandle;
