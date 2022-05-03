import { useCallback, useEffect, useRef } from "react";
import { debounce } from "lodash";
const useTouchScrollSection = ({ pageCount }) => {
	const currPage = useRef(1);
	const touchStart = useRef();

	const handleStart = useCallback((e) => {
		touchStart.current = e.changedTouches[0].pageY;
	}, []);

	const handleScroll = useCallback(
		debounce((e) => {
			if (
				pageCount > currPage.current &&
				touchStart.current - e.changedTouches[0].pageY > 10
			) {
				window.scrollTo({
					top: currPage.current * window.innerHeight,
					behavior: "smooth",
				});
				currPage.current++;
			}
			if (
				1 < currPage.current &&
				touchStart.current - e.changedTouches[0].pageY < -10
			) {
				window.scrollTo({
					top: (currPage.current - 2) * window.innerHeight,
					behavior: "smooth",
				});
				currPage.current--;
			}
		}, 20),
		[]
	);

	useEffect(() => {
		document.addEventListener("touchstart", handleStart, {
			cancelable: false,
			passive: true,
		});
		document.addEventListener("touchmove", handleScroll, {
			cancelable: false,
			passive: true,
		});
		return () => {
			document.removeEventListener("touchstart", handleStart);
			document.removeEventListener("touchmove", handleScroll);
		};
	}, [handleScroll]);

	const handleClickScrollDown = () => {
		window.scrollTo({
			top: currPage.current * window.innerHeight,
			behavior: "smooth",
		});
		currPage.current++;
	};
	const handleClickScrollUP = () => {
		window.scrollTo({
			top: (currPage.current - 2) * window.innerHeight,
			behavior: "smooth",
		});
		currPage.current--;
	};
	return { handleClickScrollDown, handleClickScrollUP };
};
export default useTouchScrollSection;
