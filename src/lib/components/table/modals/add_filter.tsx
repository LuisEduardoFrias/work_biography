'use client'
import { useState, forwardRef, useEffect } from 'react'
import type { ForwardedRef, ChangeEvent, ReactNode } from 'react'
import type { InfoColumn } from '../types/info_column'
import type { GlobalState, Actions } from '../types/global_state'
import  { numberConfi, textConfi } from "../types/filters_types"
import { fildsTypes } from '../types/filds_types'
import { createPortal } from 'react-dom'
import { useSubscriberState } from 'subscriber_state'
import ShowIcon from '../show_icon'

import '../style/t_filter.css'

type AddFilterProps = {
  callback: (column?: InfoColumn) => void,
}

function _AddFilter({ callback }: AddFilterProps, ref: ForwardedRef<HTMLDialogElement>) {

  const [{ columns }] = useSubscriberState<GlobalState, Actions>('columns')
  const [data, setData] = useState<InfoColumn | null>(null)
  const [onBtn, setOnBtn] = useState(false)

  function handleReady() {
    if (data) {
      callback({ ...data, data: { ...data.data, on: false } });
    }

    setData(null)
  }

  function handleCancel() {
    if (!data) {
      callback();
    }

    setData(null)
  }

  function handleSelect(_column: InfoColumn | null) {
    setData(_column)
  }

  function handleCallback(_data: InfoColumn) {
    setData((prev: InfoColumn | null) => prev && ({ ...prev, data: _data }))
  }

  return (
    createPortal(
      <dialog
        area-modal='true'
        area-labelledby='modal-title'
        id={`Modal-filter`}
        ref={ref}
        className="modal add-filter" >
        <h3 className="dialog-title">Agregar filtro</h3>

        <div className="dialog-slide slide-add-filter">
          {!data ?
            <div className="dialog-content content-add-filter">
              <label htmlFor="column-text" className="dialog-label">
                Opciones de filtro:
              </label>
              <ul>
                {columns?.map((column: InfoColumn, index: number) => {
                  if (column.type === fildsTypes.file) return;

                  return (
                    <li key={`${index}-column`}>
                      <button onClick={() => handleSelect(column)}>
                        <ShowIcon type={column.type === 'datetime' ? column.data.type : column.type} />
                        {column.text}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
            :
            <OptionFilter onBtn={(isOn: boolean) => setOnBtn(isOn)} data={data} callback={handleCallback} />
          }
        </div>

        <footer className="dialog-buttons">
          <button
            onClick={() => handleCancel()}
            className="dialog-button-close"
          >
            {!data ? 'Cancelar' : 'Atras'}
          </button>
          {data &&
            <button
              onClick={() => handleReady()}
              className="dialog-button"
              disabled={!onBtn}
            >
              Listo
            </button>}
        </footer>

      </dialog>,
      document.body
    )
  );
}

const AddFilter = forwardRef<HTMLDialogElement, AddFilterProps>(_AddFilter);
export default AddFilter;

type OptionFilterProps = {
  data: InfoColumn,
  onBtn: (inOn: boolean) => void,
  callback: (data: any) => void
}

function OptionFilter({ data, onBtn, callback }: OptionFilterProps) {

  const Child = Options[data.type];

  return (
    <div className="dialog-content options-filter">
      <label htmlFor="column-text" className="dialog-label">
        Configuracion del filtro:
      </label>
      <Child onBtn={onBtn} callback={callback} data={data} />
    </div>
  )
}

type TypeOptionConfiProps = {
  data: InfoColumn,
  onBtn: (inOn: boolean) => void,
  callback: (data: any) => void
}

type optionsfildsTypes = {
  [key in fildsTypes]: ({ callback, onBtn }: TypeOptionConfiProps) => ReactNode
}

const Options: optionsfildsTypes = {
  "null": () => <></>,
  text: Text,
  mask: () => <></>,
  boxes: Boxes,
  number: Number,
  checkbox: CheckBox,
  multi_checkBox: MultiCheckBox,
  select: Select,
  datetime: DateTime,
  date: () => <></>,
  time: () => <></>,
  week: () => <></>,
  month: () => <></>,
  color: () => <></>,
  email: () => <></>,
  password: () => <></>,
  tel: () => <></>,
  url: () => <></>,
  file: () => <></>,
}

/////////////
/////////////
function Text({ callback, onBtn }: TypeOptionConfiProps) {
  const [select, setSelect] = useState(textConfi.Asc)

  useEffect(() => {
    callback({ order: textConfi.Asc });
    onBtn(true)
  }, [])

  return (
    <ul>
      <li className={`option ${select === textConfi.Asc && 'option-Select'}`}
        onClick={() => {
          callback({ order: textConfi.Asc });
          setSelect(textConfi.Asc)
        }}>
        Ascendente
      </li>
      <li className={`option ${select === textConfi.Desc && 'option-Select'}`}
        onClick={() => {
          callback({ order: textConfi.Desc });
          setSelect(textConfi.Desc)
        }}>
        Descendente
      </li>
    </ul>
  )
}

function Boxes({ callback, onBtn }: TypeOptionConfiProps) {
  useEffect(() => {
    console.log(callback)
    onBtn(true)
  }, [])

  return <></>
}

function Number({ callback, onBtn, data }: TypeOptionConfiProps) {
  const [select, setSelect] = useState(numberConfi.equality)
  const [operator, setOperator] = useState(numberConfi.greaterthan)
  const [inputs, setInputs] = useState<{ n1: number | null, n2: number | null }>({ n1: null, n2: null })

  useEffect(() => {
    if (select === numberConfi.range && inputs?.n1 && inputs?.n2) {
      onBtn(true)
    }
    else if (inputs?.n1 && select !== numberConfi.range) {
      onBtn(true)
    }
    else {
      onBtn(false)
    }
    callback({ select, operator, inputs });
  }, [select, operator, inputs])

  return (
    <>
      <fieldset className='filter-number-option'>
        <label>
          Igualdad
          <input type='radio' checked={select === numberConfi.equality} name='equality' onChange={() => setSelect(numberConfi.equality)} />
        </label>
        <label>
          Rango
          <input type='radio' checked={select === numberConfi.range} name='range' onChange={() => setSelect(numberConfi.range)} />
        </label>
        <label>
          {'Operador < >'}
          <input type='radio' checked={select === numberConfi.operator} name='operator' onChange={() => setSelect(numberConfi.operator)} />
        </label>
      </fieldset>

      <fieldset className='filter-number-data'>
        {select === numberConfi.operator &&
          <fieldset>
            <label>
              Mayor que
              <input type='radio' checked={operator === numberConfi.greaterthan} name='greaterthan' onChange={() => setOperator(numberConfi.greaterthan)} />
            </label>
            <label>
              Menor que
              <input type='radio' checked={operator === numberConfi.lessthan} name='lessthan' onChange={() => setOperator(numberConfi.lessthan)} />
            </label>
          </fieldset>
        }
        <label>

          {select === numberConfi.range ?
            `Donde ${data.text} este entre:` :
            select === numberConfi.equality ?
              `Donde ${data.text} se igual:` :
              `Donde sea ${operator} que:`
          }

          <input type='number' name='input-n1' placeholder='56, 12, 6, 100...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputs((prev) => ({ ...prev, n1: parseInt(event.target.value) }))} />
        </label>
        {select === numberConfi.range && <label>
          y entre:
          <input type='number' name='input-n2' placeholder='17, 3, 8, 2...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputs((prev) => ({ ...prev, n2: parseInt(event.target.value) }))} />
        </label>
        }
      </fieldset>
    </>
  )
}

function CheckBox({ callback, onBtn }: TypeOptionConfiProps) {
  useEffect(() => {
    console.log(callback)
    onBtn(true)
  }, [])
  return <></>
}

function MultiCheckBox({ callback, onBtn }: TypeOptionConfiProps) {
  useEffect(() => {
    console.log(callback)
    onBtn(true)
  }, [])
  return <></>
}

function Select({ callback, onBtn, data }: TypeOptionConfiProps) {
  const [select, setSelect] = useState(data.data[0])

  useEffect(() => {
    callback({ options: data.data, select });
    onBtn(true)
  }, [])

  function handlerClick(key: string) {
    callback({ ...data.data, select: key });
    setSelect(key);
  }

  return (
    <div>
      <ul>
        {data.data.options?.map((key: string, index: number) =>
          <li key={index} className={`option ${select === key && 'option-Select'}`} onClick={() => handlerClick(key)}>
            {key}
          </li>
        )}
      </ul>
    </div>
  )
}

function DateTime({ callback, onBtn }: TypeOptionConfiProps) {
  useEffect(() => {
    console.log(callback)
    onBtn(true)
  }, [])

  return <></>
}