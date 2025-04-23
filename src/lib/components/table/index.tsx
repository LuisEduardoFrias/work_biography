'use client'
import { useEffect } from 'react';
import { useGlobalRef } from '../../hooks/use_globalRef'
import type { Styles, ClassName } from './types/style';
import type { GlobalState, Row } from './types/global_state';
import { InfoColumn } from './types/info_column';
import Update from './update';
import TFilter from './t_filter';
import THeader from './t_header';
import TBody from './t_body';
import TFoot from './t_foot';
import { useStore } from './warehouse/index'
import './style/table.css'
/////// 

type TTable = {
  state?: {
    columns: InfoColumn[];
    rows: Row[];
    showSelectRow?: boolean
  },
  onUpdate?: (value: any) => void,
  options?: {
    isFilter: boolean,
    isAddRow: boolean,
    isAddColumn: boolean,
  },
  style?: Styles,
  className?: ClassName
}

export default function Table({ state, onUpdate, className: cn, style: st, options = { isFilter: true, isAddRow: true, isAddColumn: true } }: TTable) {

  const initializeState = useStore((state) => state.initializeState)

  const { ref } = useGlobalRef<HTMLDivElement>();

  const styles = { borderColor: st?.borderColor, color: st?.color, iconColor: st?.iconColor ?? '#fff', }

  useEffect(() => {
    if (state)
      initializeState(state)
  }, [state, initializeState])

  return (
    <div id='table-container' style={{ backgroundColor: st?.bg, color: st?.color }}>
      {onUpdate && <Update onUpdate={onUpdate} />}
      {options?.isFilter && <TFilter />}
      <div ref={ref} id='table' >
        <THeader style={{ ...styles, ...st?.header }} className={cn?.headerClass ?? ''} isAddColumn={options?.isAddColumn} />
        <TBody style={{ ...styles, ...st?.main }} className={cn?.mainClass ?? ''} />
        <TFoot style={{ ...styles, ...st?.footer }} className={cn?.footerClass ?? ''} isAddRow={options?.isAddRow} />
      </div>
    </div>
  );
}