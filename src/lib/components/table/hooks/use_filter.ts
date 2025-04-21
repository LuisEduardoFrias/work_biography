'use client'
import { useRef, useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { useActions } from "subscriber_state"
import type { Actions } from '../types/global_state'
import  { typeSearchFilter } from '../types/global_state'

export default function useFilter() {
  const { search: onSearch } = useActions<Actions>('search');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [tsf, setTsf] = useState<typeSearchFilter>(typeSearchFilter.substringFilter);
  const timer = useRef<NodeJS.Timeout | null>();

  const executeDispatch = () => {
    onSearch({ search, tsf })
    setLoading(false);
  }

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
  }, [search])

  useEffect(() => {
    executeDispatch();
  }, [tsf])

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