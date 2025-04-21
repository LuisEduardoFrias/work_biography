import type { Metadata } from 'next'
import { ReactNode } from 'react'//unstable_ViewTransition as ViewTransition
import localFont from 'next/font/local'
import Setting from 'cp/setting'
import Book from 'cp/book'
import Meteors from 'cp/meteors'
import SelectLanguage from 'cp/select_language'
import SwitchTheme from 'cp/switch_theme'
import './globals.css'

const days_one = localFont({
  src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export const metadata: Metadata = {
  title: "Mi Camino en la Programación: De la Decepción a la Autodidaxia",
  description: "Descubre mi viaje personal en el mundo de la programación.",
  authors: [{ name: "Luis Eduardo Frias" }],
  keywords: "programación, autodidacta, desarrollo de software, carrera profesional"
};

export default function RootLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${days_one.className} antialiased flex flex-col`}>
        <Meteors />
        <div className="w-full flex flex-row justify-between p-2">
          <div className="relative w-full flex flex-row">
            {<Setting />
            }
            <span className="absolute text-2xl left-8 text-red-600 top-1/2 translate-y-[-50%] text-contrast ">In Developer</span>
          </div>
          <div className="w-full flex flex-row space-x-5 justify-end">
            <SelectLanguage />
            <SwitchTheme />
          </div>
        </div>
        <Book>
          {children}
          {  // <ViewTransition name="page">
            //           </ViewTransition>
          }
        </Book>
      </body>
    </html>
  );
}
