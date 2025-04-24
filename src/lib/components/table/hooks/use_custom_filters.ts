'use client'
import { useState } from 'react'
import type { InfoColumn } from '../types/info_column'

export default function useCustomFilters(close: () => void) {
  const [filters, setFilters] = useState<InfoColumn[]>([])

  function handlerActive(index: number) {
  setFilters((prevFilters) => {
    const newFilters = [...prevFilters];
    const updatedColumn = { ...prevFilters[index], data: { ...prevFilters[index].data, on: !prevFilters[index].data.on } };
    newFilters[index] = updatedColumn;
    return newFilters;
  });
}


  function handlerAddFilter(fild?: InfoColumn) {
    if (fild) setFilters((prev: InfoColumn[]) => [fild, ...prev]);
    close();
  }

  return {
    filters,
    handlerAddFilter,
    handlerActive
  }
}