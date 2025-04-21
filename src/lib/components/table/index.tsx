'use client'
import { useEffect } from 'react';
import { useActions } from "subscriber_state";
import { useGlobalRef } from '../../hooks/use_globalRef'
import type { Styles, ClassName } from './types/style';
import type { GlobalState, Actions } from './types/global_state';
import Update from './update';
import TFilter from './t_filter';
import THeader from './t_header';
import TBody from './t_body';
import TFoot from './t_foot';
import './style/table.css'
/////// 

type TTable = {
  state?: GlobalState,
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

  const { initializeState } = useActions<Actions>("initializeState");
  const { ref } = useGlobalRef<HTMLDivElement>();

  const styles = { borderColor: st?.borderColor, color: st?.color, iconColor: st?.iconColor ?? '#fff', }

  useEffect(() => {
    if (state)
      initializeState(state)
  }, [state])

  return (
    <div id='table-container' style={{ backgroundColor: st?.bg, color: st?.color }}>
      {onUpdate && <Update onUpdate={onUpdate} />}
      {options?.isFilter && <TFilter />}
      <div ref={ref} id='table' >
        <THeader style={{ ...styles, ...st?.header }} className={cn?.headerClass} isAddColumn={options?.isAddColumn} />
        <TBody style={{ ...styles, ...st?.mian }} className={cn?.mainClass} />
        <TFoot style={{ ...styles, ...st?.fooder }} className={cn?.fooderClass} isAddRow={options?.isAddRow} />
      </div>
    </div>
  );
}