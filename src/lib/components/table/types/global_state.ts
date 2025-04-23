import type { ChangeEvent } from 'react'
import type { InfoColumn } from './info_column'

export type Row = {
  id: `${string}-${string}-${string}-${string}-${string}` | string | number | symbol,
  [keys: string]: any,
};

export type GlobalState = {
  columns: InfoColumn[];
  rows: Row[];
  filteredRows?: Row[];
  showSelectRow?: boolean,
  optionSearch?: string,
  isMoveRow?: boolean,
  isMoveColumn?: boolean,
  //
  initializeState: (state: {
    columns: InfoColumn[];
    rows: Row[];
    showSelectRow?: boolean
  }) => void,
  //
  addRow: (value: object) => void,
  //
  removeRow: (indexColumn: number) => void,

  onRowChange: (row: Row) => void
  //
  addColumn: (columns: InfoColumn) => void,
  //
  //onAddColumn: (columns: InfoColumn) => void,
  //
  removeColumn: (indexColumn: number) => void,
  //
  hideColumn: (indexColumn: number) => void,
  //
  filterRows: (newRows: Row[]) => void,
  //
  search: (value: { search: string, tsf: typeSearchFilter }) => void,
  //
  onMoveBoth: (value: { isMoveRow: boolean, isMoveColumn: boolean }) => void,
  //
  onInputChange: (event: { event: ChangeEvent<HTMLInputElement>, type: string }) => void,
  //
  onChangeColumnSearch: (columnName: string) => void
}

export enum typeSearchFilter {
  startOfStringFilter,
  substringFilter
}

