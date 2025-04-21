'use client'
import { useRef, useEffect } from 'react'
type TypeGlobalRef = { key: string, value: HTMLElement };

class GlobalRef {
  private static _instance: GlobalRef | null = null;
  private _refs: Array<TypeGlobalRef>;

  private constructor() {
    this._refs = [];
  }

  public static getInstance(): GlobalRef {
    if (!GlobalRef._instance) {
      GlobalRef._instance = new GlobalRef();
    }
    return GlobalRef._instance as GlobalRef;
  }

  public get<P extends HTMLElement = HTMLElement>(id: string): P | undefined {
    return this._refs.find((obj) => obj.key === id)?.value as P;
  }

  public set<P extends HTMLElement = HTMLElement>(ref: P, id: string): void {
    const existingRefIndex = this._refs.findIndex((obj) => obj.key === id);
    if (existingRefIndex === -1) {
      this._refs.push({ key: id, value: ref });
    }
  }
}

export function useGlobalRef<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const refs = GlobalRef.getInstance();

  useEffect(() => {
    const id = ref.current?.id;

    if (ref.current && id) {
      refs.set(ref.current, id);
    }
  }, [ref.current]);

  return { ref, get: <T extends HTMLElement = HTMLElement>(key: string) => refs.get<T>(key) };
}
