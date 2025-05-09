'use client'
import useTranslate from 'hk/use_translate'

export default function TitlePage({ title }: { title: string }) {
  const { translate, isLoading } = useTranslate()

  return (
    <h1 className="absolute z-40 flex flex-row  text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%]" >
      {translate(title)}{isLoading && <div className="refresh_icon"></div>}
    </h1>
  )
}