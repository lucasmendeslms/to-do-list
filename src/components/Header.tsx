import headerStyles from './css/Header.module.css'

import logo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={headerStyles.header}>
      <img src={logo} alt="Logotipo toDo" width={22} height={36} />
      <span>to</span><span>do</span>
    </header>
  )
}