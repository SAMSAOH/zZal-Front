import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const useRecord = () => {
	const [stream, setStream] = useState();
	const [media, setMedia] = useState();
	const [onRec, setOnRec] = useState(false);
	const [source, setSource] = useState();
	const [analyser, setAnalyser] = useState();
	// const [hasRecord, setHasRecord] = useState(false);
	const [recordFile, setRecordFile] = useState();
	const [time, setTime] = useState();

	const [audio, setAudio] = useState();
	const [audioURL, setAudioURL] = useState();
	const handleRecord = () => {
		// setHasRecord(false);
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
						setAudioURL(URL.createObjectURL(e.data));
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
	const handleOffRecord = () => {
		stream.getAudioTracks().forEach((track) => {
			track.stop();
		});
		media.stop();

		analyser.disconnect();
		source.disconnect();
		media.ondataavailable = async (e) => {
			setOnRec(false);
			setAudio(new Audio(URL.createObjectURL(e.data)));
			setAudioURL(URL.createObjectURL(e.data));
			const sound = new File([e.data], "soundBlob", {
				lastModified: new Date().getTime(),
				type: "audio",
			});
			setRecordFile(sound);
		};

		// setHasRecord(true);
	};

	const [onPlay, setOnPlay] = useState(false);
	const handlePlay = () => {
		if (onPlay) {
			audio.pause();
			audio.currentTime = 0;
		} else {
			audio.play();
		}
		setOnPlay((p) => !p);
	};
	const RecordTime = ({ time }) => {
		return (
			<span id="time">
				{`${parseInt(time / 60)}`.padStart(2, "0")}:
				{`${parseInt(time) % 60}`.padStart(2, "0")}
			</span>
		);
	};
	const RecordCountDown = () => {
		const [seconds, setSeconds] = useState(parseInt(time));

		useEffect(() => {
			const countdown = setInterval(() => {
				if (parseInt(seconds) > 0) {
					setSeconds(parseInt(seconds) - 1);
				}
				if (parseInt(seconds) === 0) {
					setOnPlay(false);
					clearInterval(countdown);
				}
			}, 1000);
			return () => clearInterval(countdown);
		}, [seconds]);
		return (
			<span>
				{`${parseInt(seconds / 60)}`.padStart(2, "0")}:
				{`${parseInt(seconds) % 60}`.padStart(2, "0")}
			</span>
		);
	};
	return {
		onRec,
		onPlay,
		handleRecord,
		handleOffRecord,
		handlePlay,
		time,
		recordFile,
		RecordTime,
		RecordCountDown,
		audioURL,
	};
};

export default useRecord;
