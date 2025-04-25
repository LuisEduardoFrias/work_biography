import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function ArrowDown(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -960 960 960"
      fill="#ffffff"
      id="svg"
      {...props}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>)

}