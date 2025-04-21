'use client'
import { Table } from '@/lib'
import { useState, useEffect } from 'react'
import { SkillEntity } from 'ett/skill_entity'
import { skillEnum } from 'ett/skill_enum'
import ActionFetchApi from '../../actions/action_fetch_api'

const columns = [
  { text: 'Href', prop: 'href', icon: null, type: "text", data: { isNull: false, optionSearch: true } },
  { text: 'Alt', prop: 'alt', icon: null, type: "text", data: { isNull: false } },
  { text: 'Name', prop: 'name', icon: null, type: "text", data: { isNull: false } },
  { text: 'Tooltip', prop: 'tooltipText', icon: null, type: "text", data: { isNull: false } },
  { text: 'Type', prop: 'skillType', icon: null, type: "select", data: { option: [skillEnum.backend, skillEnum.frontend, skillEnum.another, skillEnum.interest] }, isNull: false },
];

const options = {
  isFilter: false,
  isAddRow: true,
  isAddColumn: false,
}

export default function SkillFile() {
  const [skills, setSkills] = useState<SkillEntity[]>([]);

  useEffect(() => {
    (async () => {
      const ActionFetchApiGet = ActionFetchApi.bind(null, "skill", 'GET');
      setSkills(await ActionFetchApiGet());
    })()
  }, []);

  const Styles = {
    bg: 'var(--base)',
    color: 'var(--contrast)',
    iconColor: 'var(--contrast)',
    borderColor: 'var(--theme-1)',
    header: {
      borderInlineWidth: '0',
      borderBottomWidth: '4px',
    },
    mian: {
      borderLeftWidth: '2px',
    },
    fooder: {
      borderWidth: '0',
      addButton: {
        backgroundColor: 'var(--theme-3)',
        borderRadius: '10px',
      }
    }
  }

  async function handleUpdate(value) {
    console.log('update')
    //let _ActionFetchApi = null;

    if (value.length > skills.length) {
      console.log('post')
      //const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'POST')
    } else if (value.length === skills.length && JSON.stringify(value) !== JSON.stringify(skills)) {
      console.log('put')
      //const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'PUT')
    } else if (value.length < skills.length) {
      console.log('delete')
      // const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'DELETE')
    }

    //if (_ActionFetchApi)
    //await _ActionFetchApi(value);
  }

  if (skills.length <= 0)
    return (
      <span>esiera</span>
    )

  return (
    <>
      <div style={{ paddingInline: '10px', paddingTop: '10px', height: '270px', overflow: 'none', border: '0px solid blue' }}>
        <Table style={Styles} onUpdate={handleUpdate} state={({ columns, rows: skills, showSelectRow: true })} options={options} />
      </div>
    </>
  )
}