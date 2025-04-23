'use client'
import { useState, useEffect } from 'react'
import { ExperienceEntity } from 'ett/experience_entity'
import ActionFetchApi from '../../actions/action_fetch_api'

export default function ExperienceFile() {
  const [change, setChange] = useState(0);

  return (
    <>
      {
        change === 0 ? "" : ""
//           <ShowExperience key="show" action={(value) => setChange(value)} />
//           :
//           <AddExperience key="add" action={(value) => setChange(value)} />
      }
    </>
  )

}

// function ShowExperience({ action }: { action: (value) => void, key: string }) {
//   const [experiences, setExperiences] = useState<ExperienceEntity[]>([])
// 
//   useEffect(() => {
//     (async () => {
//       const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'GET');
//       setExperiences(await _ActionFetchApi());
//     })()
//   }, []);
// 
//   return (
//     <div className="w-full px-5 space-y-10">
//       <h2>Experiences</h2>
// 
//       <button onClick={() => action(1)}>Agregar</button>
// 
//       <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
//         {
//           experiences.length > 0 &&
//           <div>
//             <div>
//               {(Object?.keys(experiences[0])).map((key: string,index:number) =>
//                 <div key={index}>{key}</div>
//               )}
//             </div>
//             <div>
//               {
//                 experiences?.map((experience: ExperienceEntity,inde:number) =>
//                   <div key={inde}>
//                     {
//                       Object?.values(experience).map((value, index:number) =>
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
// function AddExperience({ experience, action }: { experience?: ExperienceEntity, action: (value) => void, key: string }) {
//   const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'POST')
// console.log(experience)
//   return (
//     <div>
//       <button onClick={() => action(0)}>volver</button>
//       <form action={_ActionFetchApi} className="max-w-md mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">Add Skill</h2>
// 
//         <div className="mb-4">
//           <label htmlFor="institution" className="block text-gray-700 text-sm font-bold mb-2">
//             institution
//           </label>
//           <input
//             type="text"
//             id="institution"
//             name="institution"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: https://example.com"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
//             position
//           </label>
//           <input
//             type="text"
//             id="position"
//             name="position"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Descripción de la imagen"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="responsibilities" className="block text-gray-700 text-sm font-bold mb-2">
//             Responsibilities
//           </label>
//           <input
//             type="text-area"
//             id="responsibilities"
//             name="responsibilities"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Nombre de la habilidad"
//             required
//           />
//         </div>
// 
//         <div className="mb-4">
//           <label htmlFor="technologies" className="block text-gray-700 text-sm font-bold mb-2">
//             Technologies
//           </label>
//           <input
//             type="text-area"
//             id="technologies"
//             name="technologies"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="XU: Nombre de la habilidad"
//             required
//           />
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