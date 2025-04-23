'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { typeSearchFilter } from '../types/global_state'
import { useStore } from '../warehouse/index'

export default function useFilter() {
  const onSearch = useStore((state) => state.search)
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [tsf, setTsf] = useState<typeSearchFilter>(typeSearchFilter.substringFilter);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const executeDispatch = useCallback(() => {
    onSearch({ search, tsf })
    setLoading(false);
  },[setLoading,onSearch, search, tsf])

  useEffect(() => {
    setLoading(true);

    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (search === '') {
      executeDispatch()
      return;
    }

    timer.current = setTimeout(() => {
      executeDispatch();
    }, 1300);
  }, [search, executeDispatch])

  useEffect(() => {
    executeDispatch();
  }, [tsf, executeDispatch])

  function handlerSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.trim())
  }

  function handlerTsf(tsfValue: typeSearchFilter) {
    setTsf(tsfValue)
  }

  return {
    loading, tsf, handlerTsf, handlerSearch
  }
}