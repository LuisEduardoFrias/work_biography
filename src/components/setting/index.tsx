'use client'
import { useState } from 'react'
import SettingIcon from './setting_icon'
import CloseIcon from './close_icon'
import StudieFile from './studie_file'
import ExperienceFile from './experience_file'
import AboutFile from './about_file'
import TranslateFile from './translate_file'
import SkillFile from './skill_file'
import './index.css'

export default function Setting() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("skill");

  const class_ = "text-[12px] p-x-2 w-24 h-full flex justify-center items-center";

  return (
    <div className="absolute  top-[-4px] left-[-4px] z-50">
      <div className={`${open ? 'container-open' : 'container-closed'} opacity-0 bg-base absolute top-[-2px] left-[-4px] z-50`}>
        <div className={`${open ? 'block_' : 'hidden_'} flex flex-row items-center justify-center w-full h-full absolute`}>
          <button onClick={() => setOpen(false)} className="absolute top-1 left-1 bg-transluxed shadow-gray-700" >
            <CloseIcon fill="var(--theme-3)" className="shadow-gray-700" />
          </button>
          <div className="flex flex-col border border-theme-3 rounded w-11/12 h-5/6">
            <div className="border-0 border-b-2  border-b-theme-3 w-full h-8 flex flex-row">
              <button onClick={() => setFile("skill")} className={`${class_} ${file === 'skill' ? 'bg-[#fffe003f]' : 'bg-[#0076ff3f]'}`}>
                <span>Skill</span>
              </button>
              <button onClick={() => setFile("expirience")} className={`${class_} ${file === 'expirience' ? 'bg-[#fffe003f]' : 'bg-[#0076ff3f]'}`}>
                <span>Expirience</span>
              </button>
              <button onClick={() => setFile("studie")} className={`${class_} ${file === 'studie' ? 'bg-[#fffe003f]' : 'bg-[#0076ff3f]'}`}>
                <span>Studie</span>
              </button>
              <button onClick={() => setFile("about")} className={`${class_} ${file === 'about' ? 'bg-[#fffe003f]' : 'bg-[#0076ff3f]'}`}>
                <span>About</span>
              </button>
              <button onClick={() => setFile("translate")} className={`${class_} ${file === 'translate' ? 'bg-[#fffe003f]' : 'bg-[#0076ff3f]'}`}>
                <span>Translate</span>
              </button>
            </div>
            <div className="w-full h-full overflow-y-scroll">
              {
                file === "skill" ?
                  <SkillFile /> :
                  file === "expirience" ?
                    <ExperienceFile /> :
                    file === "studie" ?
                      <StudieFile /> :
                      file === "about" ?
                        <AboutFile /> :
                        <TranslateFile />
              }
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setOpen(true)}>
        <SettingIcon id="icon-setting" fill="var(--theme-3)" />
      </button>
    </div >
  )
}

