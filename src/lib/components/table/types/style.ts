import type { CSSProperties } from 'react'

export type THeader = CSSProperties & { iconColor?: string };
export type TMain = CSSProperties & { iconColor?: string };
export type TFooter = CSSProperties & { iconColor?: string, addButton?: CSSProperties };

export type Styles = CSSProperties & {
  bg?: string,
  color?: string,
  borderColor?: string,
  iconColor?: string,
  header?: THeader,
  main?: TMain,
  footer?: TFooter
}

export type ClassName = {
  headerClass?: string,
  mainClass?: string,
  footerClass?: string,
}