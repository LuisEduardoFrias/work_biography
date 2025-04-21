import Image from 'next/image'
import localFont from "next/font/local";
import { useStore } from 'swh/index'

const orbitron = localFont({
  src: "../../../public/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"
});

export default function Cover() {
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)

  return (
    <div className={`${orbitron.className} cover h-full w-full p-5 rounded-[0_var(--border-page-radius)_var(--border-page-radius)_0] overflow-hidden`}>

      <h1 className="text-6xl font-extrabold" >{translate("Una pasión")}</h1>

      <h2 className="text-3xl font-extrabold pl-5 text-pretty" >{translate("Trayectoria de un ingeniero de software")}</h2>

      <div className="w-full h-full overflow-hidden">

        <Image src="/imgs/cover.webp" priority={true} width={450} height={600} alt="Image of cover" />
      </div>
    </div>
  )
}