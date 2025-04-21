'use client'
import { useEffect } from 'react'
import { useSubscriberState } from 'subscriber_state'
import type { GlobalState, Actions } from './types/global_state'

type TypeUpdate = {
  onUpdate?: (value: any) => void,
}

export default function Update({ onUpdate }: TypeUpdate) {
  const [{ rows }, _] = useSubscriberState<GlobalState, Actions>("rows");

  useEffect(() => {
    if (typeof onUpdate === "function") {
      onUpdate(rows);
    }
  }, [rows])

  return null;
}