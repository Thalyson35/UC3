import { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', sobrenome: '', email: '', assunto: '', mensagem: '' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section className="contact" id="contato">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="section-tag">Fale Conosco</p>
          <h2>Entre em Contato e Agende seu Horário</h2>
          <p>Estamos prontos para te atender e deixar você ainda mais confiante.</p>
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact__info-text">
                <span>Endereço</span>
                <p>Rua Oscar Freire, 879 Jardins — São Paulo, SP</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="contact__info-text">
                <span>Telefone</span>
                <p>11 98765-4321</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact__info-text">
                <span>Email</span>
                <p>barberstudio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <div className="contact__form-row">
            <input className="contact__input" name="nome" placeholder="Nome" value={form.nome} onChange={handle} />
            <input className="contact__input" name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handle} />
          </div>
          <div className="contact__form-row">
            <input className="contact__input" name="email" type="email" placeholder="E-mail" value={form.email} onChange={handle} />
            <input className="contact__input" name="assunto" placeholder="Assunto" value={form.assunto} onChange={handle} />
          </div>
          <textarea className="contact__textarea" name="mensagem" placeholder="Sua Mensagem..." rows="4" value={form.mensagem} onChange={handle}></textarea>
          <button className="contact__btn" type="button">Enviar Mensagem</button>
        </div>
      </div>
    </section>
  )
}
