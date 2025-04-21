'use client'
import { ChangeEvent } from 'react'
import { useStore } from 'swh/index'
import './styles.css'

export default function SwitchTheme() {
  const isDark = useStore((state) => state.isDark)
  const changeTheme = useStore((state) => state.changeTheme)

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


