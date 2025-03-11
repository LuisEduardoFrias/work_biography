"use client"
import { useState, useEffect, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import './styles.css'

export default function SwitchTheme() {
	const [{ isDark }, { changeTheme }] = useSubscriberState('isDark', true);
	const [show, setShow] = useState(false);
	const [checkIsDark, setCheckIsDark] = useState(!isDark);

	useEffect(() => { setCheckIsDark(!isDark) }, [isDark])

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		changeTheme(!event.target.checked)
		setCheckIsDark(!event.target.checked)
	}

	return (
		<label className="switch-theme" >
			<input key={isDark} id="switch-cb-theme" type="checkbox" defaultChecked={!checkIsDark} onChange={handleChange} />
			<span className="slider-theme"></span>
		</label>
	)
}