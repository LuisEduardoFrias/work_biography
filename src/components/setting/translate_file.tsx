'use client'
import { useState, useEffect } from 'react'
import { TransLangEntity } from 'ett/translate_entity'
import { fildsTypes } from '../../lib/index';
import { Table } from '@/lib'
import Loading from '@/app/loading'
import ActionFetchApi from '../../actions/action_fetch_api'

export enum ECategory {
  home = 'home',
  skill = 'skill',
  project = 'project',
  experience = 'experience',
  studie = 'studie',
  about = 'about',
  notfound = 'notfound',
  setting = 'setting',
}

//Translate
const columnsTranslate = [
  { text: 'Key', prop: 'key', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Value', prop: 'value', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Language', prop: 'language', icon: null, type: fildsTypes.text, data: { isNull: false } },
  {
    text: 'Category', prop: 'category', icon: null, type: fildsTypes.select, data: {
      option: [
        ECategory.home,
        ECategory.skill,
        ECategory.project,
        ECategory.experience,
        ECategory.studie,
        ECategory.about,
        ECategory.notfound,
        ECategory.setting
      ], isNull: false
    }
  },
];

//Language
const columnsLanguage = [
  { text: 'Key', prop: 'key', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'value', prop: 'value', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

const options = {
  isFilter: false,
  isAddRow: true,
  isAddColumn: false,
}

export default function TranslateFile() {
  const [translates, setTranslates] = useState<TransLangEntity>();

  useEffect(() => {
    (async () => {
      const ActionFetchApiGet = ActionFetchApi.bind(null, "translate", 'GET');
      setTranslates(await ActionFetchApiGet());
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

  async function handleUpdate(value: any) {
    if(value)
    console.log(value)
    // console.log(`value lenght: ${value.length} - translates.length: ${translates.length}`)
    //     //let _ActionFetchApi = null;
    // 
    //     if (value.length > translates.length) {
    //       console.log('post')
    //       //const _ActionFetchApi = ActionFetchApi.bind(null, "translate", 'POST')
    //     } else if (value.length === translates.length && JSON.stringify(value) !== JSON.stringify(translates)) {
    //       console.log('put')
    //       //const _ActionFetchApi = ActionFetchApi.bind(null, "translate", 'PUT')
    //     } else if (value.length < translates.length) {
    //       console.log('delete')
    //       // const _ActionFetchApi = ActionFetchApi.bind(null, "translate", 'DELETE')
    //     }

    //if (_ActionFetchApi)
    //await _ActionFetchApi(value);
  }

  if (!translates)
    return (
      <>
        <Loading />
      </>
    )

  return (
    <>
      <div style={{ paddingInline: '10px', paddingTop: '10px', height: '270px', overflow: 'none', border: '0px solid blue' }}>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsTranslate, rows: translates.translations ?? [], showSelectRow: true })} options={options} />
        <br />
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns: columnsLanguage, rows: translates.languages, showSelectRow: true })} options={options} />
        <br />
      </div>
    </>
  )
}