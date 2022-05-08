import React, { useState } from "react";
import styled from "styled-components";
import { RowContainer } from "../commons/Container";
import RecordCountDown from "./RecordCountDown";
import RecordTime from "./RecordTime";
const RecordHandle = ({ setRecordFile }) => {
	const [stream, setStream] = useState();
	const [media, setMedia] = useState();
	const [onRec, setOnRec] = useState(false);
	const [source, setSource] = useState();
	const [analyser, setAnalyser] = useState();
	const [hasRecord, setHasRecord] = useState(false);
	const [time, setTime] = useState();

	const [audio, setAudio] = useState();
	const onRecAudio = () => {
		setHasRecord(false);
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
						setOnRec(false);
						setAudio(new Audio(URL.createObjectURL(e.data)));
						const sound = new File([e.data], "soundBlob", {
							lastModified: new Date().getTime(),
							type: "audio",
						});
						setRecordFile(sound);
					};
				} else {
					setOnRec(true);
				}
			};
		});
	};
	const offRecAudio = () => {
		stream.getAudioTracks().forEach((track) => {
			track.stop();
		});
		media.stop();

		analyser.disconnect();
		source.disconnect();
		media.ondataavailable = async (e) => {
			setOnRec(false);
			setAudio(new Audio(URL.createObjectURL(e.data)));
			const sound = new File([e.data], "soundBlob", {
				lastModified: new Date().getTime(),
				type: "audio",
			});
			setRecordFile(sound);
		};

		setHasRecord(true);
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
		<React.Fragment>
			<ControlWrapper>
				<button onClick={onRec ? offRecAudio : onRecAudio}>
						<img src="../img/mic.png" alt="녹음Img" />
					</button>
					<WriteVoiceTitle>음성 유서 남기기</WriteVoiceTitle>
					{onRec && (
						<Span>
							녹음중
							<RecordTime time={time} />
						</Span>
					)}
			</ControlWrapper>
			{hasRecord && (
				<RowContainer>
					<PlayButton onClick={handlePlayClick}>
							<RowContainer>
								<img src="../img/speaker.png" alt="녹음재생" width="30px" />
								녹음 재생
							</RowContainer>
					</PlayButton>
					{onPlay && <RecordCountDown time={time} setOnPlay={setOnPlay} />}
				</RowContainer>
			)}
		</React.Fragment>
	);
};

export default RecordHandle;

const Span = styled.span`
	display: flex;
	flex-direction: row;
`;
const PlayButton = styled.button`
	display: flex;
	flex-direction: row;
	flex: 1;
`;
const ControlWrapper=styled.div`
 	width: 100%;
    display: flex;
    align-items: center;	
`
const WriteVoiceTitle=styled.div`
	color: #36C6BD;
    font-size: 18px;
    flex: 1;
`