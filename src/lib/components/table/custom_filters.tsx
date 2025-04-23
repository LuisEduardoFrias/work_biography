import { memo, lazy, Suspense } from 'react'
import type { InfoColumn } from './types/info_column'
import useDialog from './hooks/use_dialog'
import useCriteria from './hooks/use_criteria'
import Add from '../../svgs/add'
import useCustomFilters from './hooks/use_custom_filters'

const AddFilter = lazy(() => import('./modals/add_filter'));

const CustomFilters = memo(function CustomFilters() {
	const { dialogRef, open, close } = useDialog();
	const { filters, handlerAddFilter, handlerActive } = useCustomFilters(close);

	useCriteria(filters);

	return (
		<div style={{ display: 'flex', overflow: 'hidden' }}>
			<Suspense fallback={<div>...</div>}>
				<AddFilter callback={handlerAddFilter} ref={dialogRef} />
			</Suspense>

			<div className="hidden-scroll" style={{
				display: 'flex',
				alignItems: 'center',
				overflowX: 'auto'
			}}>
				{filters?.map(
					(fil: InfoColumn, index: number) =>
						<div key={index} className='option-filter'>
							<button className={!fil.data.on ? 'off' : 'on'} onClick={() => handlerActive(index)}>
								{fil.text}
							</button>
						</div>)
				}
			</div>

			<div className='filters'>
				<button onClick={() => open()}><Add />Agregar filtro</button>
			</div>
		</div>
	)
})
export default CustomFilters;
