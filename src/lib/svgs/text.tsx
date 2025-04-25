import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function Text(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -960 960 960"
      fill="#ffffff"
      id="svg"
      {...props}
    >
      <path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z" />
    </svg>
  )
}