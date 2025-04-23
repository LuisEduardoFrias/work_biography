'use client'
import { useState, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import type { UIEvent } from 'react'
import { useGlobalRef } from '../../hooks/use_globalRef'
import useDialog from './hooks/use_dialog'
import FactoryElement from './factory_element'
import { fildsTypes } from './types/filds_types'
import type { Row } from './types/global_state'
import type { InfoColumn } from './types/info_column'
import Validations from './modals/validations'
import Delete from '../../svgs/delete'
import { TMain } from './types/style'
import PointMenu from '../../svgs/point_menu'
import { useStore } from './warehouse/index'
import './style/t_body.css'

export default function TBody({ style: st, className: cn }: { style: TMain, className: string }) {
  const { ref, get } = useGlobalRef<HTMLDivElement>();

  const isMoveRow = useStore((state) => state.isMoveRow)
  const isMoveColumn = useStore((state) => state.isMoveColumn)
  const onMoveBoth = useStore((state) => state.onMoveBoth)
  const columns = useStore((state) => state.columns)
  const filteredRows = useStore((state) => state.filteredRows)
  const showSelectRow = useStore((state) => state.showSelectRow)
  const removeRow = useStore((state) => state.removeRow)

  const { dialogRef, open, close } = useDialog();
  const [indexSelected, setIndexSelected] = useState(-1);
  const tbodyRef = useRef<HTMLButtonElement>(null);
  let previousScrollLeft = 0;

  function handleDeleteRow() {
    removeRow(indexSelected);
    setIndexSelected(-1);
    close();
  }

  useEffect(() => {
    const div: HTMLDivElement = get("overflowY") as HTMLDivElement;

    if (div && isMoveRow) {
      const elementToFocus = (div.lastChild as HTMLElement)?.children?.[1]?.firstChild as HTMLElement | null;
      elementToFocus?.focus();

      div.scrollBy({
        top: 100,
        behavior: 'smooth'
      });

      if (isMoveRow && isMoveColumn)
        onMoveBoth({ isMoveRow: false, isMoveColumn })
    }
  }, [filteredRows, get, isMoveColumn, isMoveRow, onMoveBoth]);

  useEffect(() => {
    const table: HTMLFormElement = get("table") as HTMLFormElement;
    const div: HTMLDivElement = get("overflowY") as HTMLDivElement;

    if (table && div && isMoveColumn) {
      table.scrollBy({
        left: 100,
        behavior: 'smooth'
      });

      const lastChildOfChildren = [...((div.firstChild as HTMLElement)?.children || [])].pop();
      const elementToFocus = lastChildOfChildren?.firstChild as HTMLElement | null;
      elementToFocus?.focus();

      if (isMoveRow)
        onMoveBoth({ isMoveRow, isMoveColumn: false })
    }
  }, [columns, get, isMoveColumn, isMoveRow, onMoveBoth]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tbodyRef.current && dialogRef.current && !tbodyRef.current.contains(event.target as Node) && !dialogRef.current.contains(event.target as Node)) {
        setIndexSelected(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tbodyRef, dialogRef]);

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const divElement = event.currentTarget as HTMLDivElement;

    const currentScrollLeft = divElement.scrollLeft;

    const deltaScrollLeft = currentScrollLeft - previousScrollLeft;

    previousScrollLeft = currentScrollLeft;

    const div: HTMLDivElement = get("table") as HTMLDivElement;

    if (deltaScrollLeft > 0) {
      div.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    } else if (deltaScrollLeft < 0) {
      div.scrollBy({
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <Validations ref={dialogRef} okey={handleDeleteRow} cancel={close}>
        <h3 >Delete warning!</h3>
        <p>Are you sure you want to delete this row?</p>
      </Validations>

      <div className={`tbody ${cn}`} style={{ ...st, borderInlineWidth: '0' }} id="overflowY" onScroll={handleScroll} ref={ref} onClick={(e) => e.stopPropagation()} >

        {
          filteredRows?.map((row: Row, indexRow: number) =>
            <div key={`${indexRow}-fildType`} className='tr' style={{ borderTopWidth: '0px', borderBottomWidth: filteredRows.length - 1 === indexRow ? '0' : '2px', borderStyle: 'solid', ...st, borderInlineWidth: '0' }}>
              {
                showSelectRow &&
                <div className='td flex justify-center items-center'>
                  {
                    indexSelected !== -1 && indexSelected === indexRow ?
                      <button className='flex justify-center items-center' ref={tbodyRef} type='button' onClick={() => open()}>
                        <Delete fill={st.iconColor} />
                      </button> :
                      <button className='flex justify-center items-center' type='button' onClick={() => setIndexSelected(indexRow)}>
                        <PointMenu fill={st.iconColor} />
                      </button>
                  }
                </div>
              }

              <TRow rowIndex={indexRow} style={st} columns={columns} row={row} isSelectd={indexSelected === indexRow} />

            </div>
          )
        }
      </div>
    </>
  )
}

type TTRow = {
  columns: InfoColumn[],
  row: Row,
  rowIndex: number,
  style: CSSProperties,
  isSelectd: boolean
}


function TRow({ columns, row, isSelectd, style: st, rowIndex }: TTRow) {
  const [rowState, setRowState] = useState(structuredClone(row));
  const onRowChange = useStore((state) => state.onRowChange)
  const { dialogRef, open, close } = useDialog();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleChildFocus = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const handleChildBlur = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (JSON.stringify(rowState) !== JSON.stringify(row)) {
        open();
      }
      timer.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function handlerChange(columnText: string, value: any) {
    setRowState(prevState => ({
      ...prevState,
      [firstToLowerCase(columnText)]: value,
    }));
  }

  function handlerCancel() {
    setRowState(structuredClone(row));
    close()
  }

  function handlerOkey() {
    onRowChange(rowState)
    close()
  }


  return (
    <>
      <Validations ref={dialogRef} okey={handlerOkey} cancel={handlerCancel}>
        <h3>Update warning!</h3>
        <p>Change one or go values, do you want to keep the changes?</p>
      </Validations>

      {columns.map((column: InfoColumn, index: number) => {

        const cellValue = Object.values(rowState).find(
          (propValue: any, indexCell: number) =>
            column.prop === Object.keys(rowState)[indexCell] && propValue
        );

        const key = `${column?.text}-${rowIndex}-${index}`;

        return (
          <div key={key} className="td" style={{
            width: column?.type === fildsTypes.datetime ? '120px' : '100px', borderBlockWidth: '0',
            borderRightWidth: '0', borderLeftWidth: '2px', borderStyle: 'solid', ...st, borderColor: st?.borderColor ?? 'var(--border-color-line)'
          }}>
            <FactoryElement
              fild={column}
              value={cellValue}
              color={st?.color ?? ''}
              selected={isSelectd}
              index={(rowState.id ?? rowState.Id ?? rowState.key ?? rowState.Key).toString()}
              onChange={(value: any) => handlerChange(column.text, value)}
              onFocus={handleChildFocus}
              onBlur={handleChildBlur}
            />
          </div>
        );
      })}
    </>
  );
}


// function firstToUpperCase(text: string) {
//   const first = text.substr(0, 1);
//   return first.toUpperCase() + text.substr(1);
// }
function firstToLowerCase(text: string) {
  const first = text.substr(0, 1);
  return first.toLowerCase() + text.substr(1);
}
