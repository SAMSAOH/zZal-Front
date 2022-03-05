import React, { useEffect, useState } from "react";
import RecordTime from "./RecordTime";
const RecordCountDown = ({ time, setOnPlay }) => {
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
	return <RecordTime time={seconds} />;
};

export default RecordCountDown;
