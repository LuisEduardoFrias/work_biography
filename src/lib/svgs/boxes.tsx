import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function Boxes(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -960 960 960"
      fill="#ffffff"
      id="svg"
      {...props}
    >
        <path d="M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </svg>)
}