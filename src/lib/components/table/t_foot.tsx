'use client'
import { memo } from 'react'
import type { CSSProperties } from 'react'
import { useSubscriberState } from 'subscriber_state'
import type { GlobalState, Actions } from './types/global_state'
//import { useGlobalRef } from '../../hooks/use_globalRef'
import Add from '../../svgs/add'
import './style/t_foot.css'

const TFoot = memo(function _TFoot({ isAddRow, style: st, className: cn }: { isAddRow: boolean, style: CSSProperties, className: string }) {
  //const { get } = useGlobalRef();
  const [{ filteredRows: data }, { addRow }] = useSubscriberState<GlobalState, Actions>("filteredRows");

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