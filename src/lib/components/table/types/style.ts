import type { CSSProperties } from 'react'

export type Styles = {
  bg?: string,
  color?: string,
  borderColor?: string,
  iconColor?: string,
  header?: { iconColor: string, CSSProperties },
  main?: { iconColor: string, CSSProperties },
  footer?: { iconColor: string, addButton: CSSProperties, CSSProperties }
}
export type ClassName = {
  headerClass?: string,
  mainClass?: string,
  footerClass?: string,
}