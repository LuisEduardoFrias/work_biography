'use client'
import { useState, useEffect } from 'react'
import { SkillEntity } from 'ett/skill_entity'
import { skillEnum } from 'ett/skill_enum'
import ActionFetchApi from '../../actions/action_fetch_api'

export default function SkillFile() {
  const [change, setChange] = useState(0);

  return (
    <>
      {
        change === 0 ?
          <ShowSkill key="show" action={(value) => setChange(value)} />
          :
          <AddSkill key="add" action={(value) => setChange(value)} />
      }
    </>
  )

}

function ShowSkill({ action }: { action: (value) => void, key: string }) {
  const [skills, setSkills] = useState<SkillEntity[]>([])

  useEffect(() => {
    (async () => {
      const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'GET');
      setSkills(await _ActionFetchApi());
    })()
  }, []);

  return (
    <div className="w-full px-5 space-y-10">
      <h2>Skills</h2>

      <button onClick={() => action(1)}>Agregar</button>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
        {
          skills.length > 0 &&
          <div>
            <div>
              {(Object?.keys(skills[0])).map((key: string) =>
                <div>{key}</div>
              )}
            </div>
            <div>
              {
                skills?.map((skill: SkillEntity) =>
                  <div>
                    {
                      Object?.values(skill).map((value) =>
                        <div>{value}</div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
        }
      </section>
    </div>
  )
}

function AddSkill({ skill, action }: { skill?: SkillEntity, action: (value) => void, key: string }) {
  const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'POST')

  return (
    <div>
      <button onClick={() => action(0)}>volver</button>
      <form action={_ActionFetchApi} className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Add Skill</h2>

        <div className="mb-4">
          <label htmlFor="href" className="block text-gray-700 text-sm font-bold mb-2">
            Href
          </label>
          <input
            type="text"
            id="href"
            name="href"
            defaultValue="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="XU: https://example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="alt" className="block text-gray-700 text-sm font-bold mb-2">
            Alt
          </label>
          <input
            type="text"
            id="alt"
            name="alt"
            defaultValue="Icon CSharp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="XU: Descripción de la imagen"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="C Shart"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="XU: Nombre de la habilidad"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tooltipText" className="block text-gray-700 text-sm font-bold mb-2">
            tooltip text
          </label>
          <input
            type="text"
            id="tooltipText"
            name="tooltipText"
            defaultValue="quiero saber mas de esta tegnologia"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="XU: Nombre de la habilidad"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skillType" className="block text-gray-700 text-sm font-bold mb-2">
            Skill Type
          </label>
          <select
            id="skillType"
            name="skillType"
            defaultValue={skillEnum.backend}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={skillEnum.backend}>Backend</option>
            <option value={skillEnum.frontend}>Frontend</option>
            <option value={skillEnum.another}>Another</option>
            <option value={skillEnum.interest}>Interest</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}