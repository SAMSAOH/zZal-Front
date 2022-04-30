import React, { useEffect, useRef } from "react";
import { BgContainer, CenterContainer } from "./Container";
const Modal = ({ setIsOpen, children }) => {
	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<>
			<BgContainer />
			<CenterContainer ref={wrapperRef}>{children}</CenterContainer>
		</>
	);
};
export default Modal;
