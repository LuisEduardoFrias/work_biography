'use client'
import Page from 'cp/book/page'
import Section from 'cp/skills/section'
import useTranslate from 'hk/use_translate'

export default function Skill() {
  const { translate } = useTranslate();

  function Another() {
    return (
      <>
        <Section title="Another" section="another" />
        <Section title="Interest" section="interest" />
      </>
    )
  }

  return (
    <Page>
      <div className="col-start-1 col-end-2 -md:row-start-1 md:row-end-3 row-start-1 -md:row-end-3 md:row-end-2 h-full pt-7 relative">
        <h1 className="absolute text-2xl font-extrabold left-1/2 top-[0px] translate-x-[-50%]" >{translate('Skills')}</h1>

        <div className="w-full h-full flex flex-col gap-10 overflow-y-scroll pb-10">

          <Section title="Back End" section="backend" />
          <Section title="Front End" section="frontend" />

          <div className="md:hidden flex flex-col gap-10 ">
            <Another />
          </div>

        </div>

      </div>
      <div className="-md:hidden col-start-2 col-end-3 row-start-1 row-end-2 pt-10 h-ful relative">

        <div className="w-full h-full flex flex-col gap-10 overflow-y-scroll pb-10">
          <Another />
        </div>

      </div>
    </Page>
  );
}
