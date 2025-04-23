'use client'
import { forwardRef, useRef, memo, useState, useEffect, useId } from 'react'
import type { ChangeEvent, ForwardedRef, CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { fildsTypes } from '../types/filds_types'
import { InfoColumn } from '../types/info_column'
import Add from '../../../svgs/add'
import ArrowDown from '../../../svgs/arrow_down'
import Remove from '../../../svgs/remove'
import Delete from '../../../svgs/delete';
import useDialog from '../hooks/use_dialog'
import { useStore } from '../warehouse/index'
import '../style/option_column.css'

////////////////////////////
//////// OPTION COLUMN
////////////////////////////

type AddColumnProps = {
  columns: InfoColumn[],
  close: () => void,
}

const defaultColumn: InfoColumn = { text: '', prop: '', icon: null, data: null, type: fildsTypes.null };

function OptionColumn({ columns, close }: AddColumnProps, ref: ForwardedRef<HTMLDialogElement>) {
  const identity = useId();
  const addColumn = useStore((state) => state.addColumn)
  const divRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false);

  const { dialogRef, open, close: addClose } = useDialog();

  const [column, setColumn] = useState<InfoColumn>(defaultColumn);

  function handleType(type: fildsTypes) {
    setColumn((prev: InfoColumn) => ({ ...prev, type }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setColumn({ ...column, text: event.target.value });
  }

  function handleNext() {
    open();
  }

  function handleClose() {
    if (divRef.current)
      divRef.current.scrollTop = 0;
    close();
    setIsOpen(false);
    setColumn(defaultColumn);
  }

  function handleAddData(data: any) {
    close();
    addColumn(({ ...column, data }));
    //onAddColumn(({ ...column, data }););

    addClose();
    setColumn(defaultColumn);
  }

  const styleDialogContent = {
    overflow: 'scroll',
    minHeight: '0px',
    height: isOpen ? '300px' : '0px',
    transition: 'height ease 2s',
  }

  const TypeColumnsList = memo(function _TypeColumnsList() {
    return (
      <ul className="dialog-type-list">
        {
          (Object.keys(fildsTypes) as (keyof typeof fildsTypes)[]).map((key, index: number) => (
            <li
              key={`${index}-fildType`}
              onClick={() => handleType(fildsTypes[key])}
              className={`dialog-type-item ${column.type === fildsTypes[key] ? 'dialog-type-select-Item' : null}`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </li>
          ))
        }
      </ul>
    );
  });
  /*
    const TypeColumnsList = memo(function _TypeColumnsList() {
      return (
        <ul className="dialog-type-list">
          {
            Object.values(fildsTypes).map((key: string, index: number) =>
              <li
                key={`${index}-fildType`}
                onClick={() => handleType(fildsTypes[key as keyof fildsTypes])}
                className={`dialog-type-item ${column.type === fildsTypes[key as keyof fildsTypes] ? 'dialog-type-select-Item' : null}`} >
                {key.substr(0, 1).toUpperCase() + key.substr(1)}
              </li>
            )
          }
        </ul>
      )
    });
  */
  return (
    createPortal(
      <>
        <dialog
          area-modal='true'
          area-labelledby='modal-title'
          id={`Modal-${identity}`}
          ref={ref}
          className="modal option-column">

          <h3 className="dialog-title">Columnas</h3>
          <ColumnsList_ columns={columns} />

          <div>
            <h3 className="dialog-title">Agregar Columna</h3>
            <button style={{ transform: `rotate(${isOpen ? 180 : 0}deg)`, transition: 'transform ease 1s' }} onClick={() => setIsOpen(!isOpen)}>
              <ArrowDown />
            </button>
          </div>

          <div className={`dialog-content`} ref={divRef} style={styleDialogContent}>

            <label htmlFor="column-text" className="dialog-label">
              Encabezado:
            </label>

            <input type="text" id="column-text" placeholder="Encabesado" value={column.text} onChange={handleChange}
              className="dialog-input" />

            <h4 className="dialog-label">
              Tipos de column:
            </h4>

            <TypeColumnsList />
          </div>

          <footer className="dialog-buttons">
            <button
              onClick={() => handleClose()}
              className="dialog-button-close"
            >
              Cerrar
            </button>
            {
              isOpen &&
              <button
                disabled={column.text === '' || column.type === null}
                onClick={() => handleNext()}
                className="dialog-button"
              >
                Siguite
              </button>
            }
          </footer>
        </dialog >

        <AddData callback={handleAddData} type={column.type} close={addClose} ref={dialogRef} />
      </>,
      document.body
    )
  );

}

const OptionColumn_ = forwardRef<HTMLDialogElement, AddColumnProps>(OptionColumn);
export default OptionColumn_;

////////////////////////////
//////// REMOVE COLUMN
////////////////////////////

type TypeColumnsList = { columns: InfoColumn[] };
function ColumnsList({ columns }: TypeColumnsList) {
  const [index, setIndex] = useState(-1);
  const { dialogRef, open, close } = useDialog();

  const removeColumn = useStore((state) => state.removeColumn)
  function handlerRemoveColumn(data: any) {
    close();

    if (data && index >= 0) {
      removeColumn(index)
    }
  }

  return (
    <>
      <RemoveColumn_ callback={handlerRemoveColumn} ref={dialogRef} />
      <ul>
        {
          columns.map((column: InfoColumn, index: number) =>
            <li key={index}>
              <button onClick={() => { setIndex(index); open(); }} >
                <span>
                  {column.text}
                </span>
                <Remove />
              </button>
            </li>)
        }
      </ul>
    </>
  )
}
const ColumnsList_ = memo(ColumnsList);

type TypeRemoveColumn = { callback: (data: any) => void };

function RemoveColumn({ callback }: TypeRemoveColumn, ref: ForwardedRef<HTMLDialogElement>) {
  const identity = useId();
  return (
    createPortal(
      <dialog
        area-modal='true'
        area-labelledby='modal-title'
        id={`Modal-${identity}`}
        ref={ref}
        className="modal add-column">

        <h3 className="dialog-title">Advertencia de remover</h3>
        <span>Estabseguro que quiere remover esta columna?</span>
        <span>Todos los datos seran borrados.</span>
        <footer className="dialog-buttons">
          <button
            className="dialog-button-close"
            onClick={() => callback(false)}
          >
            Cancelar
          </button>
          <button
            className="dialog-button"
            onClick={() => callback(true)}
          >
            Remover
          </button>
        </footer>
      </dialog>,
      document.body
    )
  )
}

const RemoveColumn_ = forwardRef<HTMLDialogElement, TypeRemoveColumn>(RemoveColumn);

////////////////////////////
//////// ADD DATA
////////////////////////////

type AddDataProps = {
  type: fildsTypes,
  close: () => void,
  callback: (header: InfoColumn) => void,
}

const AddData = forwardRef<HTMLDialogElement, AddDataProps>(function AddData({ type, close, callback }, ref: ForwardedRef<HTMLDialogElement>) {
  const identity = useId();
  const [data, setData] = useState<string[] | object | null>(null)

  function handleReady() {
    if (data) {
      callback(data as InfoColumn);
    }
    setData(null);
  }

  function handlerSetter(value: string[] | object) {
    setData(value)
  }

  return (
    createPortal(
      <dialog
        area-modal='true'
        area-labelledby='modal-title'
        id={`Modal-${identity}`}
        ref={ref}
        className="modal add-option">

        <h3 className="dialog-title">Agregar datos</h3>

        <div className="dialog-content">
          {type === null ? null :
            type === fildsTypes.select ?
              <SelectAddData key="select" data={data} set={handlerSetter} /> :
              type === fildsTypes.multi_checkBox ?
                <MultiCheckBox /> :
                type === fildsTypes.text ?
                  <Text key="text" data={data} set={handlerSetter} /> :
                  <Others key="others" data={data} set={() => { setData([]); handleReady(); }} />
          }
        </div>

        <footer className="dialog-buttons">
          <button
            onClick={() => close()}
            className="dialog-button-close"
          >
            Atras
          </button>
          <button
            disabled={Array.isArray(data) ? data?.length === 0 : !data}
            onClick={() => handleReady()}
            className="dialog-button"
          >
            Listo
          </button>
        </footer>
      </dialog>,
      document.body
    )
  );
});

////////////////////////////
//////// SEELCT
////////////////////////////

type TypeSelectAddDataProps = {
  key: string,
  data: any,
  set: (data: any) => void
}

function SelectAddData({ data, set }: TypeSelectAddDataProps) {
  console.log(data)
  const identity = useId();

  const [selects, setSelects] = useState([''])

  useEffect(() => {
    if (selects?.length >= 2) {
      if (selects[0] !== '' && selects[1] !== '')
        set(selects);
    }
  }, [selects,set])

  function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    setSelects((prev: string[]) => {
      const newPrev = [...prev];
      newPrev[index] = event.target.value;
      return [...newPrev];
    });
  }

  function removeClick(index: number) {
    setSelects((prev: string[]) => {
      return prev.filter((_: string, i: number) => i !== index);
    });
  }

  function addClick() {
    setSelects((prev: string[]) => {
      const newPrev = [...prev];
      newPrev.push('');
      return [...newPrev];
    })
  }

  return (
    <>
      <label htmlFor="column-text" className="dialog-label">
        Select opciones:
      </label>

      {
        selects?.map((op: string, index: number) =>
          <div key={`${identity}-op-${index}`} className="dialog-content-input">
            <input
              type="text"
              id={`option-${identity}-${index}`}
              autoFocus={selects?.length === (index + 1)}
              placeholder="Opcion"
              value={op}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, index)}
              className="dialog-input" />
            <button onClick={() => removeClick(index)}>
              <Delete />
            </button>
          </div>
        )
      }
      <button onClick={() => addClick()}>
        <Add />
      </button>
    </>
  )
}

////////////////////////////
//////// MULT CHECKBOX
////////////////////////////

function MultiCheckBox() {
  return (
    <h1>Multi checkBox</h1>
  )
}

////////////////////////////
//////// OTHERS
////////////////////////////

function Others({ set }: TypeSelectAddDataProps) {

  useEffect(() => set([]), [set]);
  return (<></>)
}

////////////////////////////
//////// TEXT
////////////////////////////

function Text({ set }: TypeSelectAddDataProps) {

  const [defValue, setDefValue] = useState({ readonly: false, nulable: true })

  useEffect(() => set(defValue), [defValue,set]);

  function handlerChange(event: ChangeEvent<HTMLInputElement>) {
    const obj = {};
    Reflect.set(obj, event.target.name, event.target.checked);
    setDefValue({ ...defValue, ...obj });
  }

  const styleDiv: CSSProperties = {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }

  const styleLabel: CSSProperties = {
    display: 'flex',
    gap: "15px"
  }

  return (
    <div style={styleDiv} >
      <label style={styleLabel}>
        Acepta nulo?
        <input type="checkbox" name="nulable" defaultChecked={defValue.nulable} onChange={handlerChange} />
      </label>
      <label style={styleLabel}>
        Solo lectura?
        <input type="checkbox" name="readonly" defaultChecked={defValue.readonly} onChange={handlerChange} />
      </label>
    </div >
  )
}