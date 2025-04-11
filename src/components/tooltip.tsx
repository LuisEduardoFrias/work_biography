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
  bottomRigth = "bottom-rigth",
}


export default function Tooltip({ text, position, show }: TyoeToolTip) {

  const colors = [
    'hsla(211.1,100%,50%,0.702)',
    'hsla(120,100%,50%,0.702)',
    'hsla(60,100%,50%,0.7)',
    'hsla(38.8,100%,50%,0.7)',
    'hsla(300,100%,50%,0.7)'
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return { backgroundColor: colors[randomIndex], backdropFilter: 'blur(5px)' };
  }

  function getAnimate() {
    const parts = position.split('-');
    const animate = `animate-${show ? 'show' : 'close'}-tooltip-${parts[1]}`;
    const px = `${parts[1]}-0`;
    const py = `${parts[0]}-10`;
    return `${animate} absolute top-10 right-0 ${px} ${py}`;
  }

  useEffect(() => { }, [show])

  return (
    <div style={getRandomColor()} className={`shadow-img transition-all text-black z-50 rounded opacity-0 w-[0px] min-h-14 h-auto p-2 ${getAnimate()}`} >
      <Paragraph text={text} />
    </div>
  );
}