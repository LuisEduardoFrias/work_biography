'use client'
import { memo, lazy, Suspense } from 'react'
import type { CSSProperties } from 'react'
import type { InfoColumn } from './types/info_column'
import type { GlobalState, Actions } from './types/global_state'
import { fildsTypes } from './types/filds_types'
import { useSubscriberState } from 'subscriber_state'
import ShowIcon from './show_icon'
import useDialog from './hooks/use_dialog'
import PointMenu from '../../svgs/point_menu'
import './style/t_header.css'

const OptionColumn_ = lazy(() => import('./modals/option_column'));

const THeader = memo(function _THeader({ isAddColumn, style: st, className: cn }: { isAddColumn: boolean, style: CSSProperties, className: string }) {
  const [{ columns, showSelectRow }, _] = useSubscriberState<GlobalState, Actions>(["columns", "showSelectRow"]);
  const { dialogRef, open, close } = useDialog();

  return (
    <div className={`thead ${cn}`} style={{ border: 'none', ...st }}>
      <div className='tr' style={{ borderInlineWidth: '2px', borderStyle: 'solid', ...st }}>

        <Suspense fallback={<div>...</div>}>
          <OptionColumn_ ref={dialogRef} close={close} columns={columns} />
        </Suspense>

        {showSelectRow && <div className='th' style={{ border: 'none' }} ></div>}
        {
          columns?.map((fild: InfoColumn, index: number) =>
            <div key={`${index}-fild`} style={{ borderLeftWidth: '2px', borderRightWidth: '0', borderStyle: 'solid', ...st, borderBottomWidth: '0' }} className={`th th-middler ${fild.type === fildsTypes.datetime && 'columnDate'}`}>
              <button>
                {
                  fild.icon ?
                    <fild.icon fill={st.iconColor} /> :
                    <ShowIcon fill={st.iconColor} type={fild.type === 'datetime' ? fild.data.type : fild.type} />
                }
                <span style={{ color: st?.color }}>{fild.text}</span>
              </button>
            </div>
          )
        }

        {isAddColumn &&
          <div className='th th-last-child'>
            <button onClick={() => open()}>
              <PointMenu />
            </button>
          </div>
        }
      </div>
    </div>
  )
})

export default THeader;
