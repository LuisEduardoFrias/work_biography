"use client"
import { useState, ChangeEvent } from 'react'
import { State, Actions } from '@/state_warehouse'
import { useSubscriberState } from 'subscriber_state'
import './styles.css'

export default function SwitchTheme() {
	const [{ isDark }, { changeTheme }] = useSubscriberState<Partial<State>, Actions>('isDark', true);
	const [checkIsDark, setCheckIsDark] = useState(isDark);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		changeTheme(event.target.checked)
		setCheckIsDark(event.target.checked)
	}

	return (
		<label className="container-switch-theme" >
			<input id="switch-theme" type="checkbox" defaultChecked={checkIsDark} onChange={handleChange} />
			<span></span>
		</label>
	)
}