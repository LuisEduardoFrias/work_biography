'use client'
import { useState, useEffect } from 'react'
import { ExperienceEntity } from 'ett/experience_entity'
import { fildsTypes } from '../../lib/index';
import { Table } from '@/lib'
import Loading from '@/app/loading'
import ActionFetchApi from '../../actions/action_fetch_api'

const columns = [
  { text: 'Institution', prop: 'institution', icon: null, type: fildsTypes.text, data: { isNull: false, optionSearch: true } },
  { text: 'Position', prop: 'position', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Responsibilities', prop: 'responsibilities', icon: null, type: fildsTypes.text, data: { isNull: false } },
  { text: 'Technologies', prop: 'technologies', icon: null, type: fildsTypes.text, data: { isNull: false } },
];

const options = {
  isFilter: false,
  isAddRow: true,
  isAddColumn: false,
}

export default function ExperienceFile() {
  const [experiences, setExperiences] = useState<ExperienceEntity[]>([]);

  useEffect(() => {
    (async () => {
      const ActionFetchApiGet = ActionFetchApi.bind(null, "experience", 'GET');
      setExperiences(await ActionFetchApiGet());
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
    console.log(`value lenght: ${(value as typeof Array<any>).length} - experiences.length: ${experiences.length}`)
    //let _ActionFetchApi = null;

    if (value.length > experiences.length) {
      console.log('post')
      //const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'POST')
    } else if (value.length === experiences.length && JSON.stringify(value) !== JSON.stringify(experiences)) {
      console.log('put')
      //const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'PUT')
    } else if (value.length < experiences.length) {
      console.log('delete')
      // const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'DELETE')
    }

    //if (_ActionFetchApi)
    //await _ActionFetchApi(value);
  }

  if (experiences.length <= 0)
    return (
      <>
        <Loading />
      </>
    )

  return (
    <>
      <div style={{ paddingInline: '10px', paddingTop: '10px', height: '270px', overflow: 'none', border: '0px solid blue' }}>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns, rows: experiences, showSelectRow: true })} options={options} />
      </div>
    </>
  )
}