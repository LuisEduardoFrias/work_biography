import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function AboutSvg(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 384.000000 384.000000"
      fill="var(--theme-1)"
      id="svg"
      {...props}
    >
      <g transform="translate(0.000000,384.000000) scale(0.100000,-0.100000)" >
        <path d="M320 1758 l0 -1603 323 323 322 322 1278 0 1277 0 0 1280 0 1280 -1600 0 -1600 0 0 -1602z m1760 802 l0 -160 -160 0 -160 0 0 160 0 160 160 0 160 0 0 -160z m0 -800 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z" />
      </g>
    </svg>
  );
}
