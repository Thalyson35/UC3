import { useState, useEffect, useCallback } from 'react'
import '../styles/hero.css'

const slides = [
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=80',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero" id="inicio">

      {/* Slides de fundo */}
      {slides.map((url, i) => (
        <div
          key={i}
          className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}

      <div className="hero__overlay" />
      <div className="hero__accent" />

      {/* Conteúdo fixo */}
      <div className="hero__content">
        <div className="hero__inner">
          <p className="hero__tag">Estilo e Presença</p>
          <h1 className="hero__title">
            Visual Impecável Para
            Qualquer <span>Ocasião</span>
          </h1>
          <div className="hero__info">
            <div className="hero__info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Rua Oscar Freire, 879 — Jardins, São Paulo, SP
            </div>
            <div className="hero__info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              11 98765-4321
            </div>
          </div>
          <a href="#contato" className="btn-red">Agendar Horário</a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Anterior">&#8592;</button>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Próximo">&#8594;</button>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}