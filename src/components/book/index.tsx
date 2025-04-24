'use client'
import { ReactNode } from 'react'
import useAnimationManager from 'hk/use_animation_manager'
import Cover from './cover'
import './styles.css'

export default function Book({ children }: { children: ReactNode }) {
  const setRef = useAnimationManager();

  return (
    <div className="container_ relative flex-col overflow-hidden relative w-full h-full p-3 flex justify-center items-center">

      <div ref={(el) => setRef(el, 'bookRef')} className="relative rounded-border-page-radius book">

        <div className="pages"></div>

        <div ref={(el) => setRef(el, 'pageRef1')} className="page left_ p_1"><Cover /></div>
        <div ref={(el) => setRef(el, 'pageRef2')} className="page left_ p_2"></div>
        <div ref={(el) => setRef(el, 'pageRef3')} className="page left_ p_3"></div>
        <div ref={(el) => setRef(el, 'pageRef4')} className="page left_ p_4"></div>
        <div ref={(el) => setRef(el, 'pageRef5')} className="page left_ p_5"></div>

        <div ref={(el) => setRef(el, 'pageRef6')} className="page right_ p_6"></div>
        <div ref={(el) => setRef(el, 'pageRef7')} className="page right_ p_7"></div>
        <div ref={(el) => setRef(el, 'pageRef8')} className="page right_ p_8"></div>
        <div ref={(el) => setRef(el, 'pageRef9')} className="page right_ p_9"></div>
        <div ref={(el) => setRef(el, 'pageRef0')} className="page right_ p_0"></div>

        <div ref={(el) => setRef(el, 'markPageRef')} className="mark-page absolute bottom-[-80px] z-50 left-1/2 translate-x-0 h-20 w-4 border border-theme-1"></div>
        <div ref={(el) => setRef(el, 'markPageRef2')} className="mark-page absolute bottom-[-90px] z-40 left-1/2 translate-x-3 h-[90px] w-4 border border-theme-2"></div>

        <div ref={(el) => setRef(el, 'centerRef')} className="center-default center">{children}</div>

      </div>

    </div>
  );
}
