'use client'
import { useRef, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Cover from './cover'
import './styles.css'

export default function Book({ children }: { children: ReactNode }) {
  const data = useRef({ count: 0, oldPathname: "/" });

  const pathname = usePathname();

  const bookRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const markPageRef = useRef<HTMLDivElement>(null);
  const markPageRef2 = useRef<HTMLDivElement>(null);

  const pageRef1 = useRef<HTMLDivElement>(null);
  const pageRef2 = useRef<HTMLDivElement>(null);
  const pageRef3 = useRef<HTMLDivElement>(null);
  const pageRef4 = useRef<HTMLDivElement>(null);
  const pageRef5 = useRef<HTMLDivElement>(null);
  const pageRef6 = useRef<HTMLDivElement>(null);
  const pageRef7 = useRef<HTMLDivElement>(null);
  const pageRef8 = useRef<HTMLDivElement>(null);
  const pageRef9 = useRef<HTMLDivElement>(null);
  const pageRef0 = useRef<HTMLDivElement>(null);

  function removeClassCenter() {
    if (centerRef.current) {
      centerRef.current.classList.remove('center-finish');
      centerRef.current.classList.remove('center-skills');
      centerRef.current.classList.remove('center-studies');
      centerRef.current.classList.remove('center-projects');
      centerRef.current.classList.remove('center-experiences');
      centerRef.current.classList.remove('center-about');
      centerRef.current.classList.remove('center');
    }
  }

  useEffect(() => {

    if (bookRef.current && data.current.count >= 1 && centerRef.current) {
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

    if (
      pageRef1.current &&
      pageRef2.current &&
      pageRef3.current &&
      pageRef4.current &&
      pageRef5.current &&
      pageRef6.current &&
      pageRef7.current &&
      pageRef8.current &&
      pageRef9.current &&
      pageRef0.current
    ) {
      if (pathname !== "/about_me") {
        pageRef1.current.classList.add('remove-left-border');
        pageRef2.current.classList.add('remove-left-border');
        pageRef3.current.classList.add('remove-left-border');
        pageRef4.current.classList.add('remove-left-border');
        pageRef5.current.classList.add('remove-left-border');
        pageRef6.current.classList.add('remove-left-border');
        pageRef7.current.classList.add('remove-left-border');
        pageRef8.current.classList.add('remove-left-border');
        pageRef9.current.classList.add('remove-left-border');
        pageRef0.current.classList.add('remove-left-border');
        pageRef0.current.classList.remove('about-extends-page');
      } else {
        pageRef1.current.classList.remove('remove-left-border');
        pageRef2.current.classList.remove('remove-left-border');
        pageRef3.current.classList.remove('remove-left-border');
        pageRef4.current.classList.remove('remove-left-border');
        pageRef5.current.classList.remove('remove-left-border');
        pageRef6.current.classList.remove('remove-left-border');
        pageRef7.current.classList.remove('remove-left-border');
        pageRef8.current.classList.remove('remove-left-border');
        pageRef9.current.classList.remove('remove-left-border');
        pageRef0.current.classList.remove('remove-left-border');
      }
    }

    //about
    if (pathname === "/about_me" &&
      pageRef1.current &&
      pageRef2.current &&
      pageRef3.current &&
      pageRef4.current &&
      pageRef5.current &&
      pageRef6.current &&
      pageRef7.current &&
      pageRef8.current &&
      pageRef9.current &&
      pageRef0.current &&
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

      pageRef0.current.classList.remove('origin-move-right-page-r10');
      pageRef0.current.classList.remove('move-right-page-r10');
      void pageRef0.current.offsetWidth;
      pageRef0.current.classList.add('move-right-page-r10', "about-extends-page");

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
      pageRef0.current
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

      pageRef0.current.classList.remove('move-right-page-r10');
      pageRef0.current.classList.remove('origin-move-right-page-r10');
      void pageRef0.current.offsetWidth;
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
      pageRef6.current.classList.add('move-right-page-r6', '-md:border-l-[1px]');

      pageRef7.current.classList.remove('origin-move-right-page-r7');
      pageRef7.current.classList.remove('move-right-page-r7');
      void pageRef7.current.offsetWidth;
      pageRef7.current.classList.add('move-right-page-r7', '-md:border-l-[1px]');

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
      pageRef6.current.classList.add('move-right-page-r6', '-md:border-l-[1px]');

      pageRef7.current.classList.remove('origin-move-right-page-r7');
      pageRef7.current.classList.remove('move-right-page-r7');
      void pageRef7.current.offsetWidth;
      pageRef7.current.classList.add('move-right-page-r7', '-md:border-l-[1px]');

      pageRef8.current.classList.remove('origin-move-right-page-r8');
      pageRef8.current.classList.remove('move-right-page-r8');
      void pageRef8.current.offsetWidth;
      pageRef8.current.classList.add('move-right-page-r8', '-md:border-l-[1px]');

      pageRef9.current.classList.remove('origin-move-right-page-r9');
      pageRef9.current.classList.remove('move-right-page-r9');
      void pageRef9.current.offsetWidth;
      pageRef9.current.classList.add('move-right-page-r9', '-md:border-l-[1px]');

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
      pageRef5.current.classList.add('move-left-page-l5', '-md:border-l-[1px]');

      pageRef4.current.classList.remove('origin-move-left-page-l4');
      pageRef4.current.classList.remove('move-left-page-l4');
      void pageRef4.current.offsetWidth;
      pageRef4.current.classList.add('move-left-page-l4', '-md:border-l-[1px]');

      pageRef3.current.classList.remove('origin-move-left-page-l3');
      pageRef3.current.classList.remove('move-left-page-l3');
      void pageRef3.current.offsetWidth;
      pageRef3.current.classList.add('move-left-page-l3', '-md:border-l-[1px]');

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
      pageRef5.current.classList.add('move-left-page-l5', '-md:border-l-[1px]');

      pageRef4.current.classList.remove('origin-move-left-page-l4');
      pageRef4.current.classList.remove('move-left-page-l4');
      void pageRef4.current.offsetWidth;
      pageRef4.current.classList.add('move-left-page-l4', '-md:border-l-[1px]');

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
      pageRef5.current.classList.add('origin-move-left-page-l5', '-md:border-l-[1px]');

      pageRef4.current.classList.remove('move-left-page-l4');
      pageRef4.current.classList.remove('origin-move-left-page-l4');
      void pageRef4.current.offsetWidth;
      pageRef4.current.classList.add('origin-move-left-page-l4', '-md:border-l-[1px]');
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

        <div ref={pageRef1} className="page left_ p_1"><Cover /></div>
        <div ref={pageRef2} className="page left_ p_2"></div>
        <div ref={pageRef3} className="page left_ p_3"></div>
        <div ref={pageRef4} className="page left_ p_4"></div>
        <div ref={pageRef5} className="page left_ p_5"></div>

        <div ref={pageRef6} className="page right_ p_6"></div>
        <div ref={pageRef7} className="page right_ p_7"></div>
        <div ref={pageRef8} className="page right_ p_8"></div>
        <div ref={pageRef9} className="page right_ p_9"></div>
        <div ref={pageRef0} className="page right_ p_0"></div>

        <div ref={markPageRef} className="mark-page absolute bottom-[-80px] z-50 left-1/2 translate-x-0 h-20 w-4 border border-theme-1"></div>
        <div ref={markPageRef2} className="mark-page absolute bottom-[-90px] z-40 left-1/2 translate-x-3 h-[90px] w-4 border border-theme-2"></div>

        <div ref={centerRef} className="center-default center">{children}</div>
      </div>
    </div>
  );
}
