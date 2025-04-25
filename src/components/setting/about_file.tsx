'use client'
//import { useState, useEffect } from 'react'
//import ActionFetchApi from '../../actions/action_fetch_api'

// type AboutEntity = {
//   title: string
// }
// 
export default function AboutFile() {
 // const [change, setChange] = useState(0);

  return (
    <>
      {
        <span>about</span>
       // change === 0 ? "":""
//           <ShowAbout key="show" action={(value) => setChange(value)} />
//           :
//           <AddAbout key="add" action={(value) => setChange(value)} />
      }
    </>
  )

}

// function ShowAbout({ action }: { action: (value: number) => void, key: string }) {
//   const [abouts, setAbouts] = useState<AboutEntity[]>([])
// 
//   useEffect(() => {
//     (async () => {
//       const _ActionFetchApi = ActionFetchApi.bind(null, "about", 'GET');
//       setAbouts(await _ActionFetchApi());
//     })()
//   }, []);
// 
//   return (
//     <div className="w-full px-5 space-y-10">
//       <h2>Abouts</h2>
// 
//       <button onClick={() => action(1)}>Agregar</button>
// 
//       <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
//         {
//           abouts?.length > 0 &&
//           <div>
//             <div>
//               {(Object?.keys(abouts[0])).map((key: string, index: number) =>
//                 <div key={index}>{key}</div>
//               )}
//             </div>
//             <div>
//               {
//                 abouts?.map((about: AboutEntity, inde: number) =>
//                   <div key={inde}>
//                     {
//                       Object?.values(about).map((value: string, index: number) =>
//                         <div key={index}>{value}</div>
//                       )
//                     }
//                   </div>
//                 )
//               }
//             </div>
//           </div>
//         }
//       </section>
//     </div>
//   )
// }
// 
// function AddAbout({ about, action }: { about?: AboutEntity, action: (value: number) => void, key: string }) {
//   const _ActionFetchApi = ActionFetchApi.bind(null, "about", 'POST')
//   console.log(about)
//   return (
//     <div>
//       <button onClick={() => action(0)}>volver</button>
//       <form action={_ActionFetchApi} className="max-w-md mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">Add About</h2>
// 
//         <div className="mb-4">
//           <label htmlFor="href" className="block text-gray-700 text-sm font-bold mb-2">
//             Href
//           </label>
//           <input
//             type="text"
//             id="href"
//             name="href"
//             defaultValue="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: https://example.com"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="alt" className="block text-gray-700 text-sm font-bold mb-2">
//             Alt
//           </label>
//           <input
//             type="text"
//             id="alt"
//             name="alt"
//             defaultValue="Icon CSharp"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Descripción de la imagen"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             defaultValue="C Shart"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Nombre de la habilidad"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="tooltipText" className="block text-gray-700 text-sm font-bold mb-2">
//             tooltip text
//           </label>
//           <input
//             type="text"
//             id="tooltipText"
//             name="tooltipText"
//             defaultValue="quiero saber mas de esta tegnologia"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Nombre de la habilidad"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="aboutType" className="block text-gray-700 text-sm font-bold mb-2">
//             About Type
//           </label>
//           <select
//             id="aboutType"
//             name="aboutType"
//             defaultValue={aboutEnum.backend}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value={aboutEnum.backend}>Backend</option>
//             <option value={aboutEnum.frontend}>Frontend</option>
//             <option value={aboutEnum.another}>Another</option>
//             <option value={aboutEnum.interest}>Interest</option>
//           </select>
//         </div>
// 
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }