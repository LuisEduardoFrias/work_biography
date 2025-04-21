
import type { ChangeEvent } from 'react'
import type { GlobalState, Actions, Row } from '../types/global_state'
import type { InfoColumn } from '../types/info_column'
import { firstLowerCase } from '../../../helpers/first_lowercase'
import { createWarehouse, update } from 'subscriber_state'
import { fildsTypes } from '../types/filds_types'
import { typeSearchFilter } from '../types/global_state'
import { forBreak } from '../../../helpers/for_break'

//////////////////////////////////////

//state
function initializeState(value: GlobalState): void {
  let indexColumnOptionSearch: number | null = null;
  const columns: InfoColumn[] = value.columns;

  const condition = (iValue: InfoColumn) => iValue.data?.optionSearch === true;
  const execution = (_: InfoColumn, index: number) => indexColumnOptionSearch = index + 1;
  forBreak<InfoColumn>(columns, condition, execution);

  const _newState = {
    filteredRows: value.rows,
    showSelectRow: true,
    optionSearch: "",
    isMoveRow: false,
    isMoveColumn: false,
    ...value,
  }

  if (indexColumnOptionSearch !== null) {
    let propName: string | null = null;
    propName = Reflect.ownKeys(value.rows[0])[indexColumnOptionSearch] as string;
    update((_: GlobalState): GlobalState => ({ ..._newState, optionSearch: propName }));
    return;
  }

  update((_: GlobalState): GlobalState => ({ ..._newState }))
};

function addRow(_: object): void {
  const newObj: Row = { key: crypto.randomUUID() };

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

  update((state: GlobalState): GlobalState => {
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
};

//indexColumn
function removeRow(value: number): void {
  update((state: GlobalState): GlobalState => {
    const rows = [...state.rows.toSpliced(value, 1)]
    const filteredRows = [...state.rows.toSpliced(value, 1)]

    return { ...state, rows, filteredRows }
  })
};

function onRowChange(row: Row): void {
  update((state: GlobalState): GlobalState => {
    const indexRow = state.rows.findIndex((ro: Row) => ro.key === row.key);

    if (indexRow === -1) return state;

    state.rows[indexRow] = row;

    return { ...state }
  })
};

//columns
function addColumn(value: InfoColumn): void {

  update((state: GlobalState): GlobalState | undefined => {

    if (state.columns.find((column: InfoColumn) => column.text === value.text)) {
      alert('Column exists');
      return;
    }

    const newState = { ...state, isMoveColumn: true };

    newState.columns = [...state.columns, { ...value }];

    newState.rows = state.rows.map((obj: any) => {
      const newObj = { ...obj };
      Reflect.set(newObj, value.text, null);
      return newObj;
    });

    newState.filteredRows = [...newState.rows];

    return newState
  })
};

//indexColumn
function removeColumn(value: number): void {
  update((state: GlobalState): GlobalState => ({
    ...state,
    columns: state.columns.filter((_, index: number) => index !== value)
  }))
};

//indexColumn
function hideColumn(value: number): void {
  console.log(value)
  update((state: GlobalState): GlobalState => ({ ...state }))
};

function filterRows(value: Row[]): void {
  update((state: GlobalState): GlobalState => ({ ...state, filteredRows: value }))
};

function search(value: { search: string, tsf: typeSearchFilter }): void {
  const search: string = value.search;

  update((state: GlobalState): GlobalState => {

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
};

function onMoveBoth(value: { isMoveRow: boolean, isMoveColumn: boolean }): void {
  const { isMoveRow, isMoveColumn } = value;
  update((state: GlobalState): GlobalState => ({ ...state, isMoveRow, isMoveColumn }))
};

function onInputChange(value: { event: ChangeEvent<HTMLInputElement>, type: string }) {

  if (value.type === 'text') {
    const _value = value.event.target.value;
    const _name = value.event.target.name;

    update((state: GlobalState): GlobalState => {
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
}

function onChangeColumnSearch(value: string): void {
  update((state: GlobalState): GlobalState => ({ ...state, optionSearch: value }))
}

// createWarehouse<GlobalState, Actions>({
//   columns: [],
//   rows: [],
//   filteredRows: [],
//   showSelectRow: true,
//   optionSearch: "",
//   isMoveRow: false,
//   isMoveColumn: false,
// 
//   initializeState,
//   addRow,
//   removeRow,
//   onRowChange,
//   addColumn,
//   removeColumn,
//   hideColumn,
//   filterRows,
//   search,
//   onMoveBoth,
//   onInputChange,
//   onChangeColumnSearch
// });

export {
  initializeState,
  addRow,
  removeRow,
  onRowChange,
  addColumn,
  removeColumn,
  hideColumn,
  filterRows,
  search,
  onMoveBoth,
  onInputChange,
  onChangeColumnSearch
}

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
