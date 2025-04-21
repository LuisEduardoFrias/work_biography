import type { ChangeEvent } from 'react'
import type { InfoColumn } from './info_column'

export type GlobalState = {
  columns: InfoColumn[];
  rows: Row[];
  filteredRows?: Row[];
  showSelectRow?: boolean,
  optionSearch?: string,
  isMoveRow?: boolean,
  isMoveColumn?: boolean
}

export type Actions = {
  //state
  initializeState: (value: GlobalState) => void,
  //
  addRow: (value: object) => void,
  //indexColumn
  removeRow: (value: number) => void,

  onRowChange: (row: Row) => void
  //columns
  addColumn: (value: InfoColumn) => void,
  //columns
  //onAddColumn: (value: InfoColumn) => void,
  //indexColumn
  removeColumn: (value: number) => void,
  //indexColumn
  hideColumn: (value: number) => void,
  //newRows
  filterRows: (value: Row[]) => void,
  //
  search: (value: { search: string, tsf: typeSearchFilter }) => void,
  //
  onMoveBoth: (value: { isMoveRow: boolean, isMoveColumn: boolean }) => void,
  //event
  onInputChange: (value: { event: ChangeEvent<HTMLInputElement>, type: string }) => void,
  //columnName
  onChangeColumnSearch: (value: string) => void
}

export enum typeSearchFilter {
  startOfStringFilter,
  substringFilter
}

export type Row = {
  key: `${string}-${string}-${string}-${string}-${string}` | string | number,
  [keys: string]: any,
};