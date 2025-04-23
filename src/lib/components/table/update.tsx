'use client'
import { useEffect } from 'react'
import { Row } from './types/global_state'
import { useStore } from './warehouse/index'

type TypeUpdate = {
  onUpdate?: (value: Row[]) => void,
}

export default function Update({ onUpdate }: TypeUpdate) {
  const rows = useStore((state) => state.rows)

  useEffect(() => {
    if (typeof onUpdate === "function") {
      onUpdate(rows);
    }
  }, [rows, onUpdate])

  return null;
}