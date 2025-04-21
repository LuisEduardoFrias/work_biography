'use client'
import { useRef } from 'react'
export default function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return {
    dialogRef,
    open: () => (dialogRef.current as unknown as HTMLDialogElement).showModal(),
    close: () => (dialogRef.current as unknown as HTMLDialogElement).close()
  };
}