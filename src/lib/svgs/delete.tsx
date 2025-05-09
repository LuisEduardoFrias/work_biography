import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function Delete(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="200 -700 800 400"
      fill="#ffffff"
      id="svg"
      {...props}
    >
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
    </svg>)
}