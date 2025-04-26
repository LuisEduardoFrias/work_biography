'use client'
import Image from 'next/image'
import { useChangeClassName } from 'hk/use_change_classname';
import './styles.css'

export default function Profile() {
  const [classRef] = useChangeClassName<HTMLImageElement>('img-show-first', 'img-show-second');

  return (
    <div className="main-container w-full h-full relative">
      <Image ref={classRef} id="profile" className="img-show-first" src="/imgs/profile.webp" priority={true} width={3264} height={2177} alt="Image of profile" />
      <Image id="logo" src="/imgs/tridente_sc.webp" priority={true} width={2094} height={2176} alt="logo ico" />

      <pre>
        <code>
          {'<!DOCTYPE html>\n  <html lang="es">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <title>Artículo sobre Programación</title>\n    </head>\n  <body>\n    <h1>La Importancia de la Programación en la Actualidad</h1>\n    <p>La programación se ha convertido en una habilidad fundamental en el mundo moderno.</p>\n    <p>Con el avance de la tecnología, cada vez más aspectos de nuestra vida cotidiana están influenciados por el código informático.</p>\n    <p>Desde el desarrollo de aplicaciones móviles hasta la automatización de procesos industriales, la programación juega un papel crucial en la sociedad actual.</p>\n    <p>Aprender a programar no solo abre puertas laborales, sino que también estimula el pensamiento lógico y la creatividad.</p>\n  </body>\n</html>'}
        </code>
      </pre>

      <div className="invisible absolute bottom-0 z-[3] w-full h-full rounded-[0_var(--border-page-radius)_var(--border-page-radius)_0] mask-image-[linear-gradient(black_80%, transparent)]" ></div>
    </div>
  );
}