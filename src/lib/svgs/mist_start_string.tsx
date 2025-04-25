import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function MistStartString(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      fill="#ffffff"
      id="svg"
      {...props}
    >
      <rect x="3" y="5" width="4" height="2" rx="1" ry="1" fill="white" />
      <rect x="9" y="5" width="12" height="2" rx="1" ry="1" fill="white" />

      <rect x="3" y="9" width="4" height="2" rx="1" ry="1" fill="white" />
      <rect x="9" y="9" width="12" height="2" rx="1" ry="1" fill="white" />

      <rect x="3" y="13" width="4" height="2" rx="0.9" ry="0.9" fill="white" />
      <rect x="9" y="13" width="12" height="2" rx="0.9" ry="0.9" fill="white" />

      <rect x="3" y="17" width="4" height="2" rx="1" ry="1" fill="white" />
      <rect x="9" y="17" width="12" height="2" rx="1" ry="1" fill="white" />
    </svg>)
}