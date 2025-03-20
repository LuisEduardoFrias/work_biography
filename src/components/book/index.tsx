'use client'
import { useState, useRef, useEffect, ReactNode, ReactElement, Children } from 'react'
import { usePathname } from 'next/navigation'
import BackHome from 'cp/back_home'
import localFont from "next/font/local";
import Image from 'next/image'

import useTranslate from 'hk/use_translate'
import './styles.css'

const orbitron = localFont({
	src: "../../../public/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"
});

export function Page({ children, className }: { children: ReactNode, className:string }) {
	const pathname = usePathname();

	function getPosition() {
		const leftPaths = new Set(["/about_me", "/experiences", "/projects"]);
		const rightPaths = new Set(["/studies", "/skills"]);

		if (leftPaths.has(pathname)) return "left";
		if (rightPaths.has(pathname)) return "right";

		return "right";
	}

	return (
		<div className={`rounded-border-page-radius absolute w-full h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  md:overflow-y-hidden overflow-hidden center-animate ${className}`}>
			{pathname !== "/" && <BackHome position={getPosition()} />}
			{children}
		</div>
	);
}

export default function Book({ children }: { children: ReactNode }) {
	const data = useRef({ count: 0, oldPathname: "/" });
	const translate = useTranslate();
	const pathname = usePathname();

	const bookRef = useRef(null);
	const centerRef = useRef(null);
	const markPageRef = useRef(null);
	const markPageRef2 = useRef(null);

	const pageRef2 = useRef(null);
	const pageRef3 = useRef(null);
	const pageRef4 = useRef(null);
	const pageRef5 = useRef(null);
	const pageRef6 = useRef(null);
	const pageRef7 = useRef(null);
	const pageRef8 = useRef(null);
	const pageRef9 = useRef(null);
	const pageRef10 = useRef(null);

	function removeClassCenter() {
		centerRef.current.classList.remove('center-finis');
		centerRef.current.classList.remove('center-skills');
		centerRef.current.classList.remove('center-studies');
		centerRef.current.classList.remove('center-projects');
		centerRef.current.classList.remove('center-experiences');
		centerRef.current.classList.remove('center-about');
		centerRef.current.classList.remove('center');
	}

	useEffect(() => {

		if (bookRef.current && data.current.count >= 1) {
			centerRef.current.classList.remove('center-about');
			void centerRef.current.offsetWidth;

			bookRef.current.classList.remove('book-animate');
			void bookRef.current.offsetWidth;
			bookRef.current.classList.add('book-animate');
		}

		if (pathname === "/" && bookRef.current && data.current.count >= 1) {
			bookRef.current.classList.remove('book-animate2');
			bookRef.current.classList.remove('book-animate');
			void bookRef.current.offsetWidth;
			bookRef.current.classList.add('book-animate');
		}

		if (pathname === "/" && centerRef.current && data.current.count >= 2) {
			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-finish');
		}

		//about
		if (pathname === "/about_me" &&
			pageRef6.current &&
			pageRef7.current &&
			pageRef8.current &&
			pageRef9.current &&
			pageRef10.current &&
			markPageRef.current &&
			markPageRef2.current &&
			bookRef.current &&
			centerRef.current
		) {
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			pageRef6.current.classList.remove('move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('move-right-page-r6');

			pageRef7.current.classList.remove('origin-move-right-page-r7');
			pageRef7.current.classList.remove('move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('move-right-page-r7');

			pageRef8.current.classList.remove('origin-move-right-page-r8');
			pageRef8.current.classList.remove('move-right-page-r8');
			void pageRef8.current.offsetWidth;
			pageRef8.current.classList.add('move-right-page-r8');

			pageRef9.current.classList.remove('origin-move-right-page-r9');
			pageRef9.current.classList.remove('move-right-page-r9');
			void pageRef9.current.offsetWidth;
			pageRef9.current.classList.add('move-right-page-r9');

			pageRef10.current.classList.remove('origin-move-right-page-r10');
			pageRef10.current.classList.remove('move-right-page-r10');
			void pageRef10.current.offsetWidth;
			pageRef10.current.classList.add('move-right-page-r10');

			markPageRef.current.classList.remove('mark-page-move');
			void markPageRef.current.offsetWidth;
			markPageRef.current.classList.add('mark-page-move');

			markPageRef2.current.classList.remove('mark-page-move2');
			void markPageRef2.current.offsetWidth;
			markPageRef2.current.classList.add('mark-page-move2');

			bookRef.current.classList.remove('book-animate');
			bookRef.current.classList.remove('book-animate');
			void bookRef.current.offsetWidth;
			bookRef.current.classList.add('book-animate2');

			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-about');
		}

		if (data.current.oldPathname === "/about_me" &&
			pageRef6.current &&
			pageRef7.current &&
			pageRef8.current &&
			pageRef9.current &&
			pageRef10.current
		) {
			pageRef6.current.classList.remove('move-right-page-r6');
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('origin-move-right-page-r6');

			pageRef7.current.classList.remove('move-right-page-r7');
			pageRef7.current.classList.remove('origin-move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('origin-move-right-page-r7');

			pageRef8.current.classList.remove('move-right-page-r8');
			pageRef8.current.classList.remove('origin-move-right-page-r8');
			void pageRef8.current.offsetWidth;
			pageRef8.current.classList.add('origin-move-right-page-r8');

			pageRef9.current.classList.remove('move-right-page-r9');
			pageRef9.current.classList.remove('origin-move-right-page-r9');
			void pageRef9.current.offsetWidth;
			pageRef9.current.classList.add('origin-move-right-page-r9');

			pageRef10.current.classList.remove('move-right-page-r10');
			pageRef10.current.classList.remove('origin-move-right-page-r10');
			void pageRef10.current.offsetWidth;
			pageRef10.current.classList.add('origin-move-right-page-r10');
		}

		//experiences
		if (pathname === "/experiences" &&
			pageRef6.current &&
			pageRef7.current &&
			centerRef.current
		) {
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			pageRef6.current.classList.remove('move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('move-right-page-r6');

			pageRef7.current.classList.remove('origin-move-right-page-r7');
			pageRef7.current.classList.remove('move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('move-right-page-r7');

			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-experiences');
		}

		if (data.current.oldPathname === "/experiences" &&
			pageRef6.current &&
			pageRef7.current
		) {
			pageRef6.current.classList.remove('move-right-page-r6');
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('origin-move-right-page-r6');

			pageRef7.current.classList.remove('move-right-page-r7');
			pageRef7.current.classList.remove('origin-move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('origin-move-right-page-r7');
		}

		//projects
		if (pathname === "/projects" &&
			pageRef6.current &&
			pageRef7.current &&
			pageRef8.current &&
			pageRef9.current &&
			centerRef.current
		) {
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			pageRef6.current.classList.remove('move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('move-right-page-r6');

			pageRef7.current.classList.remove('origin-move-right-page-r7');
			pageRef7.current.classList.remove('move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('move-right-page-r7');

			pageRef8.current.classList.remove('origin-move-right-page-r8');
			pageRef8.current.classList.remove('move-right-page-r8');
			void pageRef8.current.offsetWidth;
			pageRef8.current.classList.add('move-right-page-r8');

			pageRef9.current.classList.remove('origin-move-right-page-r9');
			pageRef9.current.classList.remove('move-right-page-r9');
			void pageRef9.current.offsetWidth;
			pageRef9.current.classList.add('move-right-page-r9');

			centerRef.current.classList.remove('center-project');
			centerRef.current.classList.remove('center-finis');
			centerRef.current.classList.remove('center');
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-project');

			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-projects');
		}

		if (data.current.oldPathname === "/projects" &&
			pageRef6.current &&
			pageRef7.current &&
			pageRef8.current &&
			pageRef9.current
		) {
			pageRef6.current.classList.remove('move-right-page-r6');
			pageRef6.current.classList.remove('origin-move-right-page-r6');
			void pageRef6.current.offsetWidth;
			pageRef6.current.classList.add('origin-move-right-page-r6');

			pageRef7.current.classList.remove('move-right-page-r7');
			pageRef7.current.classList.remove('origin-move-right-page-r7');
			void pageRef7.current.offsetWidth;
			pageRef7.current.classList.add('origin-move-right-page-r7');

			pageRef8.current.classList.remove('move-right-page-r8');
			pageRef8.current.classList.remove('origin-move-right-page-r8');
			void pageRef8.current.offsetWidth;
			pageRef8.current.classList.add('origin-move-right-page-r8');

			pageRef9.current.classList.remove('move-right-page-r9');
			pageRef9.current.classList.remove('origin-move-right-page-r9');
			void pageRef9.current.offsetWidth;
			pageRef9.current.classList.add('origin-move-right-page-r9');
		}

		//studies
		if (pathname === "/studies" &&
			pageRef3.current &&
			pageRef4.current &&
			pageRef5.current &&
			centerRef.current
		) {
			pageRef5.current.classList.remove('origin-move-left-page-l5');
			pageRef5.current.classList.remove('move-left-page-l5');
			void pageRef5.current.offsetWidth;
			pageRef5.current.classList.add('move-left-page-l5');

			pageRef4.current.classList.remove('origin-move-left-page-l4');
			pageRef4.current.classList.remove('move-left-page-l4');
			void pageRef4.current.offsetWidth;
			pageRef4.current.classList.add('move-left-page-l4');

			pageRef3.current.classList.remove('origin-move-left-page-l3');
			pageRef3.current.classList.remove('move-left-page-l3');
			void pageRef3.current.offsetWidth;
			pageRef3.current.classList.add('move-left-page-l3');

			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-studies');
		}

		if (data.current.oldPathname === "/studies" &&
			pageRef3.current &&
			pageRef4.current &&
			pageRef5.current
		) {
			pageRef5.current.classList.remove('move-left-page-l5');
			pageRef5.current.classList.remove('origin-move-left-page-l5');
			void pageRef5.current.offsetWidth;
			pageRef5.current.classList.add('origin-move-left-page-l5');

			pageRef4.current.classList.remove('move-left-page-l4');
			pageRef4.current.classList.remove('origin-move-left-page-l4');
			void pageRef4.current.offsetWidth;
			pageRef4.current.classList.add('origin-move-left-page-l4');

			pageRef3.current.classList.remove('move-left-page-l3');
			pageRef3.current.classList.remove('origin-move-left-page-l3');
			void pageRef3.current.offsetWidth;
			pageRef3.current.classList.add('origin-move-left-page-l3');
		}

		//skills
		if (pathname === "/skills" &&
			pageRef4.current &&
			pageRef5.current &&
			centerRef.current
		) {
			pageRef5.current.classList.remove('origin-move-left-page-l5');
			pageRef5.current.classList.remove('move-left-page-l5');
			void pageRef5.current.offsetWidth;
			pageRef5.current.classList.add('move-left-page-l5');

			pageRef4.current.classList.remove('origin-move-left-page-l4');
			pageRef4.current.classList.remove('move-left-page-l4');
			void pageRef4.current.offsetWidth;
			pageRef4.current.classList.add('move-left-page-l4');

			removeClassCenter();
			void centerRef.current.offsetWidth;
			centerRef.current.classList.add('center-skills');
		}

		if (data.current.oldPathname === "/skills" &&
			pageRef4.current &&
			pageRef5.current
		) {
			pageRef5.current.classList.remove('move-left-page-l5');
			pageRef5.current.classList.remove('origin-move-left-page-l5');
			void pageRef5.current.offsetWidth;
			pageRef5.current.classList.add('origin-move-left-page-l5');

			pageRef4.current.classList.remove('move-left-page-l4');
			pageRef4.current.classList.remove('origin-move-left-page-l4');
			void pageRef4.current.offsetWidth;
			pageRef4.current.classList.add('origin-move-left-page-l4');
		}

		if (data.current.count === 0) {
			data.current.count = 1;
		}
		if (pathname !== "/") {
			data.current.count = 2;
		}
		data.current.oldPathname = pathname;
	}, [pathname])

	return (
		<div className="container_ relative flex-col overflow-hidden relative w-full h-full p-3 flex justify-center items-center">

			<div ref={bookRef} className="relative rounded-border-page-radius book">

				<div className="pages"></div>

				<div className="page left_ p_1 relative pb-5 overflow-hidden">
					{//					<div className="top-0 left-0 absolute bg-[--base] h-full w-full z-0 backface"></div>
					}
					<div className={`${orbitron.className} cover top-0 left-0 absolute z-10 h-[700px] space-y-6 p-5 pt-10`}>
						<h1 className="text-6xl font-extrabold" >{translate('Una pasión')}</h1>
						<h2 className="text-3xl font-extrabold pl-5 text-pretty" >{translate('Trayectoria de un ingeniero de software')}</h2>
						<div className="w-full h-[460px] rounded-[0_0_var(--border-page-radius)_0] overflow-auto">
							<Image src="/imgs/cover.webp" priority={true} width={450} height={600} alt="Image of cover" />
						</div>
					</div>
				</div>

				<div ref={pageRef2} className="page left_ p_2"></div>
				<div ref={pageRef3} className="page left_ p_3"></div>
				<div ref={pageRef4} className="page left_ p_4"></div>
				<div ref={pageRef5} className="page left_ p_5"></div>

				<div ref={pageRef6} className="page right_ p_6"></div>
				<div ref={pageRef7} className="page right_ p_7"></div>
				<div ref={pageRef8} className="page right_ p_8"></div>
				<div ref={pageRef9} className="page right_ p_9"></div>
				<div ref={pageRef10} className="page right_ p_10"></div>

				<div ref={markPageRef} className="mark-page absolute bottom-[-80px] z-50 left-1/2 translate-x-0 h-20 w-4 border border-theme-1"></div>
				<div ref={markPageRef2} className="mark-page absolute bottom-[-90px] z-40 left-1/2 translate-x-3 h-[90px] w-4 border border-theme-2"></div>

				<div ref={centerRef} className="center-default center">{children}</div>
			</div>
		</div>
	);
}
