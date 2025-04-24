
import type { ChangeEvent } from 'react'
import type { GlobalState, Row } from '../types/global_state'
import type { InfoColumn } from '../types/info_column'
import { firstLowerCase } from '../../../helpers/first_lowercase'
import { fildsTypes } from '../types/filds_types'
import { typeSearchFilter } from '../types/global_state'
import { forBreak } from '../../../helpers/for_break'
import { create } from 'zustand'

const useStore = create<GlobalState>((set) => ({
  columns: [],
  rows: [],
  filteredRows: [],
  showSelectRow: true,
  optionSearch: "",
  isMoveRow: false,
  isMoveColumn: false,

  initializeState(state: {
    columns: InfoColumn[];
    rows: Row[];
    showSelectRow?: boolean
  }): void {
    let indexColumnOptionSearch: number | null = null;
    const columns: InfoColumn[] = state.columns;

    const condition = (iValue: InfoColumn) => iValue.data?.optionSearch === true;
    const execution = (_: InfoColumn, index: number) => indexColumnOptionSearch = index + 1;
    forBreak<InfoColumn>(columns, condition, execution);

    const _newState = {
      filteredRows: state.rows,
      showSelectRow: true,
      optionSearch: "",
      isMoveRow: false,
      isMoveColumn: false,
      ...state,
    }

    if (indexColumnOptionSearch !== null) {
      let propName: string | null = null;
      propName = Reflect.ownKeys(state.rows[0])[indexColumnOptionSearch] as string;
      set({ ..._newState, optionSearch: propName });
      return;
    }

    set({ ..._newState });
  },
  addRow(): void {
    const newObj: Row = { id: crypto.randomUUID() };

    function getTime(type: fildsTypes) {
      const _date = new Date();
      return (
        type === 'datetime' ? _date.toISOString() :
          type === 'time' ? _date.toISOString().substr(11).substr(0, 5) :
            type === 'month' ? _date.toISOString().substr(5, 2) :
              type === 'week' ? _date.toISOString() :
                /* type === 'date' ? */
                _date.toISOString().substr(0, 10)
      );
    }

    set((state: GlobalState): GlobalState => {
      state.columns
        .map((column: InfoColumn) => ({ text: column.text, type: column.type, option: column.data.option }))
        .forEach((obj) => {
          if (obj.type === fildsTypes.datetime) {
            Reflect.set(newObj, firstToLowerCase(obj.text), getTime(obj.type))
          } else if (obj.type === fildsTypes.select) {
            Reflect.set(newObj, firstToLowerCase(obj.text), obj.option[0])
          } else {
            Reflect.set(newObj, firstToLowerCase(obj.text), undefined)
          }
        });
      const rows = [...state.rows, newObj];
      const filteredRows = [...state.rows, newObj];

      return { ...state, rows, filteredRows, isMoveRow: true };
    })
  },
  removeRow(indexColumn: number): void {
    set((state: GlobalState): GlobalState => {
      const rows = [...state.rows.toSpliced(indexColumn, 1)]
      const filteredRows = [...state.rows.toSpliced(indexColumn, 1)]

      return { ...state, rows, filteredRows }
    })
  },
  onRowChange(row: Row): void {
    set((state: GlobalState): GlobalState => {
      const indexRow = state.rows.findIndex((ro: Row) => ro.key === row.key);

      if (indexRow === -1) return state;

      state.rows[indexRow] = row;

      return { ...state }
    })
  },
  addColumn(columns: InfoColumn): void {

    set((state: GlobalState): GlobalState | Partial<GlobalState> => {

      if (state.columns.find((column: InfoColumn) => column.text === columns.text)) {
        alert('Column exists');
        return {};
      }

      const newState = { ...state, isMoveColumn: true };

      newState.columns = [...state.columns, { ...columns }];

      newState.rows = state.rows.map((obj: Row) => {
        const newObj: Row = { ...obj };
        Reflect.set(newObj, columns.text, null);
        return newObj;
      });

      newState.filteredRows = [...newState.rows];

      return newState
    })
  },
  removeColumn(indexColumn: number): void {
    set((state: GlobalState): GlobalState => ({
      ...state,
      columns: state.columns.filter((_, index: number) => index !== indexColumn)
    }))
  },
  hideColumn(indexColumn: number): void {
    console.log(indexColumn)
    set((state: GlobalState): GlobalState => ({ ...state }))
  },
  filterRows(value: Row[]): void {
    set((state: GlobalState): GlobalState => ({ ...state, filteredRows: value }))
  },
  search(value: { search: string, tsf: typeSearchFilter }): void {
    const search: string = value.search;

    set((state: GlobalState): GlobalState => {

      if (search === '') {
        return { ...state, filteredRows: state.rows };
      }

      const filteredRows = state.rows.filter((row: Row) => {
        return value.tsf === typeSearchFilter.startOfStringFilter ?
          startOfStringFilter((row[state.optionSearch as keyof Row].toString()).toLowerCase(), search.toLowerCase()) :
          substringFilter((row[state.optionSearch as keyof Row].toString()).toLowerCase(), search.toLowerCase())
      })

      return { ...state, filteredRows }
    })
  },
  onMoveBoth(value: { isMoveRow: boolean, isMoveColumn: boolean }): void {
    const { isMoveRow, isMoveColumn } = value;
    set((state: GlobalState): GlobalState => ({ ...state, isMoveRow, isMoveColumn }))
  },
  onInputChange(value: { event: ChangeEvent<HTMLInputElement>, type: string }) {

    if (value.type === 'text') {
      const _value = value.event.target.value;
      const _name = value.event.target.name;

      set((state: GlobalState): GlobalState => {
        const index = _name.indexOf('-');
        const prop = firstLowerCase(_name.substring(5, index - 5));
        const key = _name.substring(index + 1);
        const rows: Row[] = [], filteredRows: Row[] = [];

        state.rows.forEach((row: Row, index: number) => {
          const _row = { ...row };

          if (_row.key === key) {
            Reflect.set(_row, prop, _value);
          }

          rows.push(_row);

          if (state?.filteredRows && index <= state?.filteredRows.length) {
            const _filteredRow = state?.filteredRows[index];

            if (_filteredRow.key === key) {
              Reflect.set(_filteredRow, prop, _value);
            }
            filteredRows.push(_filteredRow);
          }
        });

        return { ...state, rows, filteredRows };
      })
    }
  },
  onChangeColumnSearch(value: string): void {
    set((state: GlobalState): GlobalState => ({ ...state, optionSearch: value }))
  },
}));

export { useStore };

////////////////////

function substringFilter(value: string, search: string): boolean {
  return value.includes(search);
}

function startOfStringFilter(value: string, search: string): boolean {
  return value.startsWith(search);
}

function firstToLowerCase(text: string) {
  const first = text.substr(0, 1);
  return first.toLowerCase() + text.substr(1);
}
