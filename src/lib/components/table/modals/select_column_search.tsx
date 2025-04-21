'use client'
import { forwardRef, useState, useId } from 'react'
import type { ForwardedRef } from 'react'
import { createPortal } from 'react-dom'
import { firstLowerCase } from '../../../helpers/first_lowercase'
import { useSubscriberState } from "subscriber_state"
import type { GlobalState, Actions } from '../types/global_state'
import type { InfoColumn } from '../types/info_column'
import { fildsTypes } from '../types/filds_types'
//import Remove from '../../../svgs/remove';

type columnSearchProp = {
  close: () => void,
}

function SelectColumnSearch({ close }: columnSearchProp, ref: ForwardedRef<HTMLDialogElement>) {
  const identity = useId();
  const [{ columns, optionSearch }, { onChangeColumnSearch }] = useSubscriberState<GlobalState, Actions>(['columns', 'optionSearch'], true);
  const [columnIndex, setColumn] = useState(columns.findIndex((column: InfoColumn) => firstLowerCase(column.text) === optionSearch));

  function handlerSelect(index: number) {
    setColumn(index)
    onChangeColumnSearch(firstLowerCase(columns[index].text))
  }

  /*	const styleDialogContent:CSSProperties = {
        overflow: 'scroll',
        minHeight: '0px',
        transition: 'height ease 2s',
      }
  */

  return (
    createPortal(
      <>
        <dialog
          area-modal='true'
          area-labelledby='modal-title'
          id={`Modal-${identity}`}
          ref={ref}
          style={{ width: '200px' }}
          className="modal option-column">

          <h3 className="dialog-title">Filtros de busqueda</h3>

          <ul className="dialog-type-list">
            {
              columns.map((column: InfoColumn, index: number) => {
                if (column.type !== fildsTypes.text && column.type !== fildsTypes.number) return;

                return (
                  <li
                    key={`${index}-fildType`}
                    onClick={() => handlerSelect(index)}
                    className={`dialog-type-item ${index === columnIndex ? 'dialog-type-select-Item' : null}`} >
                    {column.text.substr(0, 1).toUpperCase() + column.text.substr(1)}
                  </li>
                )
              })
            }
          </ul>

          <footer className="dialog-buttons">
            <button
              onClick={() => close()}
              className="dialog-button-close"
            >
              Cerrar
            </button>
          </footer>
        </dialog >
      </>,
      document.body
    )
  );
}

const SelectColumnSearch_ = forwardRef<HTMLDialogElement, columnSearchProp>(SelectColumnSearch);
export default SelectColumnSearch_;