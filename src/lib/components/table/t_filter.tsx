import { memo, lazy, Suspense } from 'react'
import { typeSearchFilter } from './types/global_state'
import useDialog from './hooks/use_dialog'
import Search from '../../svgs/search'
import Progress from '../../svgs/progress'
import MistSubstring from '../../svgs/mist_substring'
import MistStartString from '../../svgs/mist_start_string'
import useFilter from './hooks/use_filter'

import './style/t_filter.css'

const CustomFilters = lazy(() => import('./custom_filters'));
const SelectColumnSearch = lazy(() => import('./modals/select_column_search'));

export default function TFilter() {
  const { loading, tsf, handlerTsf, handlerSearch } = useFilter();
  const { dialogRef, open, close } = useDialog();

  const CLoading = memo(function _CLoading() {
    return (
      <>
        <Suspense fallback={<div>...</div>}>
          <SelectColumnSearch ref={dialogRef} close={close} />
        </Suspense>
        {loading ? <div id='progress'><Progress /></div> : <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => open()}><Search /></button>}
      </>)
  }, (oldProp, newProp) => Object.is(oldProp, newProp));

  const CSearchFilter = memo(function _CSearchFilter() {
    return (
      <div>
        {tsf === typeSearchFilter.substringFilter ?
          <button onClick={() => handlerTsf(typeSearchFilter.startOfStringFilter)}>
            <MistSubstring />
          </button> :
          <button onClick={() => handlerTsf(typeSearchFilter.substringFilter)}>
            <MistStartString />
          </button>
        }
      </div>)
  }, (oldProp, newProp) => Object.is(oldProp, newProp));

  return (
    <div className='container-filters'>
      <div className='search'>
        <CLoading />
        <input type="search" name="search" placeholder="Buscar" onInput={handlerSearch} />
        <CSearchFilter />
      </div>
      <Suspense fallback={<div>...</div>}>
        <CustomFilters />
      </Suspense>
    </div>
  )
}
