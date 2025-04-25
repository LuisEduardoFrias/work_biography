'use client'
import { useState, useEffect } from 'react'
import { StudiesEntity } from 'ett/studie_entity'
import { fildsTypes } from '../../lib/index';
import { Table } from '@/lib'
import Loading from '@/app/loading'
import ActionFetchApi from '../../actions/action_fetch_api'

//Title
const columnsTitle = [
  { text: 'Name', prop: 'name', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'Img', prop: 'img', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Alt', prop: 'alt', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

//Book
const columnsBook = [
  { text: 'Img', prop: 'img', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'Alt', prop: 'alt', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Name', prop: 'name', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Autor', prop: 'autor', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Url', prop: 'url', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

//Youtuber
const columnsYoutuber = [
  { text: 'Sector', prop: 'sector', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'Name', prop: 'name', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Img', prop: 'img', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Alt', prop: 'alt', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Url', prop: 'url', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

//OtherResourve
const columnsOtherResourve = [
  { text: 'Name', prop: 'name', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'Url', prop: 'url', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

//////////////////////////
//////////////////////////

const options = {
  isFilter: false,
  isAddRow: true,
  isAddColumn: false,
}

export default function StudieFile() {
  const [studies, setStudies] = useState<StudiesEntity>();

  useEffect(() => {
    (async () => {
      const ActionFetchApiGet = ActionFetchApi.bind(null, "study", 'GET');
      setStudies(await ActionFetchApiGet());
    })()
  }, []);

  const Styles = {
    bg: 'var(--base)',
    color: 'var(--contrast)',
    iconColor: 'var(--contrast)',
    borderColor: 'var(--theme-7)',
    header: {
      borderInlineWidth: '0',
      borderBottomWidth: '4px',
    },
    mian: {
      borderLeftWidth: '2px',
    },
    footer: {
      borderWidth: '0',
      borderBottomWidth: '2px',
      addButton: {
        backgroundColor: 'var(--theme-3)',
        borderRadius: '10px',
      }
    }
  }

  async function handleUpdate(value: Array<any>) {
    if (false)
      console.log(`value lenght: ${value.length}`)
    //let _ActionFetchApi = null;

    // if (value.length > studies.length) {
    //       console.log('post')
    //       //const _ActionFetchApi = ActionFetchApi.bind(null, "study", 'POST')
    //     } else if (value.length === studies.length && JSON.stringify(value) !== JSON.stringify(studies)) {
    //       console.log('put')
    //       //const _ActionFetchApi = ActionFetchApi.bind(null, "study", 'PUT')
    //     } else if (value.length < studies.length) {
    //       console.log('delete')
    //       // const _ActionFetchApi = ActionFetchApi.bind(null, "study", 'DELETE')
    //     }

    //if (_ActionFetchApi)
    //await _ActionFetchApi(value);
  }

  if (!studies)
    return (
      <>
        <Loading />
      </>
    )

  return (
    <>
      <div style={{ paddingInline: '10px', paddingTop: '10px', height: '270px', overflow: 'none', border: '0px solid blue' }}>
        <h2>Title</h2>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsTitle, rows: studies.titles, showSelectRow: true })} options={options} />
        <br />
        <h2>Book</h2>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsBook, rows: studies.books, showSelectRow: true })} options={options} />
        <br />
        <h2>Youtuber</h2>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsYoutuber, rows: studies.youtubers, showSelectRow: true })} options={options} />
        <br />
        <h2>Other resourve</h2>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsOtherResourve, rows: studies.otherResourves, showSelectRow: true })} options={options} />
        <br />
      </div>
    </>
  )
}