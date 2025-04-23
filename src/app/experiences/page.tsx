import Section from '../skills/section';
import Page from 'cp/book/page'
import KeyBoard from 'cp/keyboard'
import ExpeComp from 'cp/experience'
import TitlePage from 'cp/title_page'

export default function Experiences() {
  return (
    <Page>
      <div className="col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-1 row-end-3 h-full relative ">
        <TitlePage title="Experiences" />
        <section className="border border-amber-300 w-full h-full pt-14 flex flex-1 flex-row flex-wrap items-center gap-y-4  p-3 overflow-y-scroll">
          <ExpeComp />
          <div className="my-3 w-full flex justify-center align-middle visible md:hidden">
            <KeyBoard />
          </div>
        </section>
      </div>
      <div className="-md:hidden md:visible md:col-start-2 col-end-3 md:row-start-1 md:row-end-2 flex justify-center align-middle h-full relative">
        <div className="-md:hidden md:visible relative">
          <KeyBoard />
        </div>
      </div>
    </Page>
  );
}

