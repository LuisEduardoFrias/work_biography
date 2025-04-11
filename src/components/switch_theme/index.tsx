"use client"
import {  ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import { State, Actions } from '@/state_warehouse'
import './styles.css'

export default function SwitchTheme() {
	const [{ isDark }, { changeTheme }] = useSubscriberState<State, Actions>('isDark','switch_theme');

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		changeTheme(event.target.checked)
	}

	return (
		<label htmlFor="switch-theme" className="container-switch-theme" >
			<input id="switch-theme" type="checkbox" defaultChecked={isDark} onChange={handleChange} />
			<span></span>
		</label>
	)
}


