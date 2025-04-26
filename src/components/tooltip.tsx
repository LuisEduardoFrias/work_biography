import { useEffect } from 'react';
import Paragraph from 'cp/paragraph';

type TyoeToolTip = {
  text: string;
  position: position;
  show: boolean;
}

export enum position {
  topLeft = "top-left",
  topRight = "top-right",
  bottomLeft = "bottom-left",
  bottomRigth = "bottom-right",
}


export default function Tooltip({ text, position, show }: TyoeToolTip) {

  // function tool() {
  //     const sp = document.querySelector("#unico");
  //     const text = sp.innerHTML;
  //     const currentYear = new Date().getFullYear();
  //     const newText = text.replace("{años}", currentYear - 2020);
  //     sp.innerHTML = newText;
  //   }

  const colors = [
    'hsla(211.1,100%,50%,0.4)',
    'hsla(120,100%,50%,0.4)',
    'hsla(60,100%,50%,0.4)',
    'hsla(38.8,100%,50%,0.4)',
    'hsla(300,100%,50%,0.4)'
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return { backgroundColor: colors[randomIndex], backdropFilter: 'blur(5px)' };
  }

  function getAnimate() {
    const parts = position.split('-');
    //  const animate = `animate-${show ? 'show' : 'close'}-tooltip-${parts[1]}`;
    const animate = show ?
      (parts[1] === 'right' ? 'animate-show-tooltip-right' : 'animate-show-tooltip-left') :
      (parts[1] === 'right' ? 'animate-close-tooltip-right' : 'animate-close-tooltip-left');

    const py = parts[0] === 'top' ? 'top-[4rem]' : 'bottom-[4rem]';
    const px = parts[1] === 'right' ? 'right-0' : 'left-0';
    return `${animate} absolute ${px} ${py}`;
  }

  useEffect(() => { }, [show])
  // useEffect(() => { tool(); }, [])

  return (
    <div style={getRandomColor()} className={`shadow-img transition-all text-black z-50 rounded opacity-0 w-[0px] max-h-[55px] h-auto p-2 overflow-y-scroll ${getAnimate()}`} >
      <Paragraph text={text} className="w-full" />
    </div>
  );
}