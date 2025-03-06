"use client"
import { useState, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import './styles.css'

export default function SwitchTheme() {
	const [{ isDark }, { changeTheme }] = useSubscriberState(['isDark']);
	const [show, setShow] = useState(false);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		changeTheme(!event.target.checked)
	}

	return (
		<label className="switch-theme" >
			<input id="switch-cb-theme" type="checkbox" defaultChecked={!isDark} onChange={handleChange} />
			<span className="slider-theme"></span>
		</label>
	)
}