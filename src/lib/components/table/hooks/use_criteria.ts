'use client'
import { useEffect } from 'react'
import { useSubscriberState } from 'subscriber_state'
import type { InfoColumn } from '../types/info_column'
import { numberConfi, textConfi } from "../types/filters_types"
import type { GlobalState, Actions, Row } from '../types/global_state'
import { fildsTypes } from '../types/filds_types'

export default function useCriteria(filters: InfoColumn[]) {

  const [{ rows }, { filterRows }] = useSubscriberState<GlobalState, Actions>(["rows"], true);

  let isFilterActivated = false;

  useEffect(() => {
    if (filters) {
      let newRow: Row[] = [];

      if (Array.isArray(rows))
        newRow = [...rows];

      filters.forEach((filter: InfoColumn) => {
        if (filter.data.on) {
          isFilterActivated = true;
          newRow = optionFilters[filter.type](filter, newRow);
        }
      })

      filterRows(isFilterActivated ? newRow : rows);
    }
  }, [filters])
}

type optionFiltersFildsTypes = {
  [key in fildsTypes]: (filter: InfoColumn, rows: Row[]) => Row[];
}

const optionFilters: optionFiltersFildsTypes = {
  "null": (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  text: Text,
  number: Number,
  select: Select,
  mask: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  boxes: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  checkbox: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  multi_checkBox: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  datetime: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  //datetime-local = "datetime-local",
  date: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  time: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  week: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  month: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  color: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  email: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  password: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  tel: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  url: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
  file: (filter: InfoColumn, rows: Row[]) => { console.log(filter, rows); return []; },
}

///////////
///////////

function Text(filter: InfoColumn, rows: Row[]): Row[] {
  const order = filter.data.order;

  return rows.toSorted((objA: Row, objB: Row) => {
    const valueA = objA[lfc(filter.text) as keyof Row];
    const valueB = objB[lfc(filter.text) as keyof Row];

    if (order === textConfi.Asc) {
      return valueA.localeCompare(valueB);
    } else if (order === textConfi.Desc) {
      return valueB.localeCompare(valueA);
    }
  });
}

function Number(filter: InfoColumn, rows: Row[]): Row[] {
  return rows.filter((obj: Row) => {

    const value = obj[lfc(filter.text) as keyof Row];
    const n1 = filter.data.inputs.n1;
    const n2 = filter.data.inputs?.n2;
    const select = filter.data.select;
    const operator = filter.data.operator;

    if (select === numberConfi.equality) {
      return (value === n1);
    }
    else if (select === numberConfi.range) {
      return (value > n1 && value < n2);
    }
    else if (select === numberConfi.operator) {
      if (operator === numberConfi.greaterthan) {
        return (value > n1);
      }
      else if (operator === numberConfi.lessthan) {
        return (value < n1);
      }
    }

    return false;
  });
}

function Select(filter: InfoColumn, rows: Row[]): Row[] {
  return rows.filter((obj: Row) => {
    const value = obj[lfc(filter.text) as keyof Row];
    if (value === filter.data.select) return true;
    return false;
  });
}

// lower First Chart
function lfc(text: string): string {
  return text.substr(0, 1).toLocaleLowerCase() + text.substr(1);
}