'use client'
import { useState, useEffect } from 'react'
import type { CSSProperties, ChangeEvent, ReactNode } from 'react'
import type { InfoColumn } from './types/info_column'
import type { fildsTypes } from './types/filds_types';

type TypeFactoryElementProps = {
  fild: InfoColumn,
  value: any,
  selected: boolean,
  index: string,
  color: string,
  onChange?: (value: any) => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

export default function FactoryElement({ fild, value, selected, index, color, onFocus, onBlur, onChange }: TypeFactoryElementProps) {
  const identityName = `name:${fild.text}-${index}`;
  const identityId = `id:${fild.text}-${index}`;
  const colorSelect = { backgroundColor: selected ? 'red' : 'transparent', color };

  type ElementType = { [K in keyof typeof fildsTypes]: ReactNode | null };

  const _Element: ElementType = {
    'null': null,
    text: <Text
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    mask: <Text
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    boxes: <Boxes
      name={identityName}
      id={identityId}
      data={fild.data}
      style={colorSelect}
      value={fild.text}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    number: <Number
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    checkbox: <CheckBox
      name={identityName}
      id={identityId}
      style={colorSelect}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    'multi_checkBox': <MultiCheckBox
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={fild.text}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    date: <DateTime
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    datetime: <DateTime
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    time: <DateTime
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    week: <DateTime
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    month: <DateTime
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    file: <File
      name={identityName}
      id={identityId}
      style={colorSelect}
      data={fild.data}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    select: <Select
      name={identityName}
      id={identityId}
      style={colorSelect}
      value={value}
      data={fild.data}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,

    color: null,
    email: null,
    password: null,
    tel: null,
    url: null,

  }

  return _Element[fild.type];
}

type TypeElementProps = {
  name: string,
  id: string,
  style: CSSProperties,
  value?: any,
  data?: any,
  onChange?: (value: any) => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

function Text({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  // const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <input
      key={`text-${id}-${name}`}
      name={name}
      id={id}
      type="text"
      required={data?.isNull}
      readOnly={data?.readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value);
        if (onChange)
          onChange(event.target.value);
      }}
      value={newValue} />
  )
}

function Boxes({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
    console.log(newValue)
    console.log(data)
    console.log(onChange)
    console.log(onFocus)
    console.log(onBlur)
  }, [value])

  return (
    <button
      key={`boxes-${id}-${name}`}
      name={name}
      id={id}
      type="button"
      style={style}
    >{value}</button>
  )
}

function Number({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <input
      key={`number-${id}-${name}`}
      name={name}
      id={id}
      required={data?.isNull}
      readOnly={data?.readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      type="number"
      style={style}
      className='inputText'
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value);
        if (onChange)
          onChange(event.target.value);
      }}
      value={newValue} />
  )
}

function CheckBox({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <input
      key={`checkbox-${id}-${name}`}
      name={name}
      id={id}
      required={data?.isNull}
      readOnly={data?.readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      style={style}
      type="checkBox"
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value);
        if (onChange)
          onChange(event.target.value);
      }}
      checked={newValue} />
  )
}

function MultiCheckBox({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");

  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
    console.log(newValue)
    console.log(data)
    console.log(onChange)
    console.log(onFocus)
    console.log(onBlur)
  }, [value])

  return (
    <button
      key={`multucheckbox-${id}-${name}`}
      name={name}
      id={id}
      type="button"
      style={style}
    >{value}</button>
  )
}

//date, time, week, month,
function DateTime({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {

  const getDefaultValue = () => {
    if (!value) {
      const _date = new Date();
      const _value = (
        data.type === 'datetime' ? _date.toISOString() :
          data.type === 'time' ? _date.toISOString().substr(11).substr(0, 5) :
            data.type === 'month' ? _date.toISOString().substr(5, 2) :
              data.type === 'week' ? _date.toISOString() :
        /* data.type === 'date' ? */ _date.toISOString().substr(0, 10)
      );

      return _value;
    }

    return value;
  };

  const [inputValue, setInputValue] = useState(getDefaultValue());

  useEffect(() => {
    setInputValue(getDefaultValue());
  }, [value, data.type]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange)
      onChange(event.target.value);
  };

  return (
    <input
      key={`datetime-${id}-${name}`}
      id={id}
      name={name}
      type={data.type}
      required={data?.isNull}
      readOnly={data?.readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      style={style}
      onChange={handleChange}
      value={inputValue}
    />
  );
}


function File({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <div key={`file-${id}-${name}`} id='label-file' style={style}>
      <label /*htmlFor={id}*/>
        selected file
        <input
          name={name}
          id={id}
          required={data?.isNull}
          onBlur={onBlur}
          onFocus={onFocus}
          type="file"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNewValue(event.target.value);
            if (onChange)
              onChange(event.target.value);
          }}
          value={newValue} />
      </label>
    </div>
  )
}

function Select({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  // const { onInputChange } = useActions<Actions>("onInputChange");
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <select
      key={`select-${id}-${name}`}
      name={name}
      id={id}
      required={data?.isNull}
      data-readonly={data?.readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        setNewValue(event.target.value);
        if (onChange)
          onChange(event.target.value);
      }}
      value={newValue}
      style={style}
    >
      {
        data?.option.map((option: string, index: number) =>
          <option
            key={`${index}-option`}
            // selected={option === value}
            value={option}>
            {option}
          </option>
        )
      }
    </select>
  )
}

////////////
/*
function Color({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
 // const { onInputChange } = useActions<Actions>("onInputChange");
const [newValue, setNewValue] = useState(value);

  useEffect(()=>{   setNewValue(value) },[value])   
  
  return (
    <input
      key={`color-${id}-${name}`}
      name={name}
      id={id}
      required={data?.isNull}
      readOnly={data?.readOnly}
      type="color"
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setNewValue(event.target.value); onChange(event.target.value); }} 
      value={newValue} />
  )
}

function Email({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
const [newValue, setNewValue] = useState(value);

  useEffect(()=>{   setNewValue(value) },[value])
  
  return (
    <input
      key={`email-${id}-${name}`}
      name={name}
      id={id}
      type="email"
      required={data?.isNull}
      readOnly={data?.readOnly}
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setNewValue(event.target.value); onChange(event.target.value); }} 
      value={newValue} />
  )
}

function Password({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
 // const { onInputChange } = useActions<Actions>("onInputChange");
const [newValue, setNewValue] = useState(value);

  useEffect(()=>{   setNewValue(value) },[value]) 
  
  return (
    <input
      key={`password-${id}-${name}`}
      name={name}
      id={id}
      type="password"
      required={data?.isNull}
      readOnly={data?.readOnly}
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setNewValue(event.target.value); onChange(event.target.value); }} 
      value={newValue} />
  )
}

function Tel({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
  //const { onInputChange } = useActions<Actions>("onInputChange");
const [newValue, setNewValue] = useState(value);

  useEffect(()=>{   setNewValue(value) },[value])   
  
  return (
    <input
      key={`tel-${id}-${name}`}
      name={name}
      id={id}
      type="tel"
      required={data?.isNull}
      readOnly={data?.readOnly}
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setNewValue(event.target.value); onChange(event.target.value); }} 
      value={newValue} />
  )
}

function Url({ name, id, style, value, data, onChange, onFocus, onBlur }: TypeElementProps) {
//  const { onInputChange } = useActions<Actions>("onInputChange");
const [newValue, setNewValue] = useState(value);

  useEffect(()=>{   setNewValue(value) },[value]) 
  
  return (
    <input
      key={`url-${id}-${name}`}
      name={name}
      id={id}
      type="url"
      required={data?.isNull}
      readOnly={data?.readOnly}
      className='inputText'
      style={style}
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setNewValue(event.target.value); onChange(event.target.value); }} 
      value={newValue} />
  )
}

*/