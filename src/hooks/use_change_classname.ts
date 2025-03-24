import { useEffect, useRef } from 'react'

export function useChangeClassName<T extends HTMLElement>(removeClass: string, addClass: string) {
	const countRenders = useRef<number>(0);
	const classRef = useRef<T>(null);

	useEffect(() => {
		if (classRef.current && countRenders.current === 1) {
			countRenders.current = 2;
			classRef.current.classList.remove(removeClass);
			void classRef.current.offsetWidth;
			classRef.current.classList.add(addClass);
		}
		countRenders.current = 1
	}, [removeClass, addClass, classRef, countRenders])

	return [classRef]
}