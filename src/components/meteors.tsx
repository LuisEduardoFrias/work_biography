'use client'
import { useEffect, useRef } from 'react';

type TMeteorProps = {
	number?: number;
};

export default function Meteors({ number }: TMeteorProps) {
	const meteors = new Array(number || 50).fill(true);
	const meteorRefs = useRef([]);

	useEffect(() => {
		meteorRefs.current.forEach((meteor) => {
			if (meteor) {
				meteor.style.top = Math.floor(Math.random() * 100) + "%";
				meteor.style.left = Math.floor(Math.random() * (100 - -100) + -100) + "%";
				meteor.style.animationDelay = Math.random() * (0.8 - 0.2) + 0.2 + "s";
				meteor.style.animationDuration = Math.floor(Math.random() * (10 - 2) + 2) + "s";
			}
		});
	}, []);

	return (
		<>
			{meteors.map((_, idx) => (
				<span
					key={"meteor" + idx}
					ref={(el) => (meteorRefs.current[idx] = el)}
					className={`animate-meteor-effect absolute top-1/2
					left-1/2 h-1 w-1 rounded-[9999px] bg-slate-500 
					rotate-[215deg] before:content-[''] before:absolute 
					before:top-1/2 before:transform 
					before:-translate-y-[25%] before:w-[50px] 
					before:h-[1px] before:bg-gradient-to-r 
					before:from-[--meteor_r] before:to-transparent`}
					style={{ position: "fixed" }}
				></span>
			))}
		</>
	);
}
