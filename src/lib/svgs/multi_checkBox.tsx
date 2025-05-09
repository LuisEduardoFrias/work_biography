import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function MultiCheckBox(props: Props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -960 960 960"
      fill="#ffffff"
      id="svg"
      {...props}
    >
        <path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z"/>
    </svg>)
}