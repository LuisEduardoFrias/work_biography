import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default  function File(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -960 960 960"
      fill="#ffffff"
      id="svg"
      {...props}
    >
<path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </svg>
  )
}