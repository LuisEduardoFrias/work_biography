'use client'
import Page from 'cp/book/page'
import Section from 'cp/skills/section'
import TitlePage from 'cp/title_page'
import { skillEnum } from 'ett/skill_enum'
import useTranslate from 'hk/use_translate'

export default function Skill() {
  const { translate } = useTranslate("skills");

  function Another() {
    return (
      <>
        <Section title="Another" skillType={skillEnum.another} />
        <Section title="Interest" skillType={skillEnum.interest} />
      </>
    )
  }

  return (
    <Page>
      <div className="col-start-1 col-end-2 -md:row-start-1 md:row-end-3 row-start-1 -md:row-end-3 md:row-end-2 h-full relative">
        <TitlePage title="Skills" />
        <div className="w-full h-full flex flex-col gap-10 overflow-y-scroll pb-10">
          <br />
          <Section title="Back End" skillType={skillEnum.backend} />
          <Section title="Front End" skillType={skillEnum.frontend} />

          <div className="md:hidden flex flex-col gap-10 ">
            <Another />
          </div>

        </div>

      </div>
      <div className="-md:hidden col-start-2 col-end-3 row-start-1 row-end-2 h-ful relative">

        <div className="w-full h-full flex flex-col gap-10 overflow-y-scroll pb-10">
          <br />
          <Another />
        </div>

      </div>
    </Page>
  );
}
