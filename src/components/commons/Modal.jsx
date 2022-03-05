import React, { useEffect, useRef } from "react";
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
			<div className="bg-container" />
			<div ref={wrapperRef} className="center-container">
				{children}
			</div>
		</>
	);
};
export default Modal;
