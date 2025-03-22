"use client"
import { useState, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import { State, Actions } from '@/state_warehouse'
import './styles.css'

export default function SwitchTheme() {
	const [{ isDark }, { changeTheme }] = useSubscriberState<State, Actions>('isDark', true);
	const [checkIsDark, setCheckIsDark] = useState<boolean>(isDark);

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


