import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__logo-icon">✦</span>
          Barber Studio
        </a>

        <button className="navbar__hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu${open ? ' open' : ''}`}>
          <li><a href="#inicio" onClick={() => setOpen(false)}>Início</a></li>
          <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></li>
          <li><a href="#servicos" onClick={() => setOpen(false)}>Serviços</a></li>
          <li><a href="#blog" onClick={() => setOpen(false)}>Blog</a></li>
          <li><a href="#contato" onClick={() => setOpen(false)}>Contato</a></li>
          <li><a href="#contato" className="navbar__cta" onClick={() => setOpen(false)}>Agendar Horário</a></li>
        </ul>
      </div>
    </nav>
  )
}
