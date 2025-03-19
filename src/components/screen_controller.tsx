'use client';
import { useState, useRef, useEffect } from 'react';

const max = 485;

export default function ScreenController() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const handleWidthChange = (event) => {
		const newWidth = parseInt(event.target.value);
		setWidth(newWidth);
		if (typeof window !== 'undefined') {
			document.body.style.width = `${newWidth}px`;
		}
	};

	const handleHeightChange = (event) => {
		const newHeight = parseInt(event.target.value);
		setHeight(newHeight);
		if (typeof window !== 'undefined') {
			document.body.style.height = `${newHeight}px`;
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
			document.body.style.border = `2px solid red`;
			document.body.style.border = `2px solid red`;
			document.body.style.transformStyle = 'preserve-3d';
			document.body.style.transform = `scale(${max/width})`;
			document.body.style.perspective = `${window.innerWidth * 2}px`;
			document.body.style.width = `${window.innerWidth}px`;
			document.body.style.height = `${window.innerHeight}px`;
		}
	}, []);

	return (
		<div className="w-full h-full bg-black">
			<div className="absolute bottom-0 left-0 w-full h-40 z-50 border-4 border-white px-10 py-2 text-2xl font-medium text-white">
				<div>
					<label htmlFor="width" className="block">
						Ancho: {width}px
					</label>
					<input
						type="range"
						id="width"
						min="320"
						max="1920"
						value={width}
						onChange={handleWidthChange}
						className="w-full"
					/>
				</div>
				<div>
					<label htmlFor="height" className="block">
						Alto: {height}px
					</label>
					<input
						type="range"
						id="height"
						min="480"
						max="1080"
						value={height}
						onChange={handleHeightChange}
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}
