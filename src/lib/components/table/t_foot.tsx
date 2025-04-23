'use client'
import { memo } from 'react'
import type { CSSProperties } from 'react'
//import { useGlobalRef } from '../../hooks/use_globalRef'
import { useStore } from './warehouse/index'
import { TFooter } from './types/style'
import Add from '../../svgs/add'
import './style/t_foot.css'

const TFoot = memo(function TFoot({ isAddRow, style: st, className: cn }: { isAddRow: boolean, style: TFooter, className: string }) {
  //const { get } = useGlobalRef();
  const data = useStore((state) => state.filteredRows)
  const addRow = useStore((state) => state.addRow)

  return (
    <div className={`tfoot ${cn}`} style={{ borderWidth: '2px', borderTopWidth: '0', borderStyle: 'solid', ...st }}>
      {isAddRow &&
        <div className='tr' style={st?.addButton} >
          <button type='button' style={{ borderRadius: st?.addButton?.borderRadius }} onClick={() => addRow({})} >
            <Add fill={st.iconColor} /><span>Nueva fila</span>
          </button>
        </div>
      }
      <div className='tr' style={{ display: 'flex', gap: '80px' }}>
        <span>Filas: {data?.length ?? 0}</span>
        {/*  <span>Fila selecionada: {10}</span>*/}
      </div>
    </div >
  )
});
export default TFoot;