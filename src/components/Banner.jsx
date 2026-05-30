import '../styles/banner.css'

const schedule = [
  { day: 'Segunda', time: '09:00 — 19:30' },
  { day: 'Terça', time: '09:00 — 19:30' },
  { day: 'Quarta', time: '09:00 — 19:30' },
  { day: 'Quinta', time: '09:00 — 19:30' },
  { day: 'Sexta', time: '09:00 — 19:30' },
  { day: 'Sábado', time: '09:00 — 17:00' },
  { day: 'Domingo', time: 'Fechado', closed: true },
]

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__bg"></div>
      <div className="banner__overlay"></div>
      <div className="banner__inner">
        <div className="banner__left">
          <h2>Uma Equipe de <span>Profissionais</span> Espera Por Você</h2>
          <p>Nossa equipe oferece atendimento de excelência para proporcionar a melhor experiência e cuidado com seu estilo.</p>
          <a href="#contato" className="btn-red">Agendar Horário</a>
        </div>
        <div className="banner__right">
          <h3>Horários de Atendimento</h3>
          <div className="banner__schedule">
            {schedule.map((item, i) => (
              <div className="banner__row" key={i}>
                <span className="banner__day">{item.day}:</span>
                <span className={`banner__time${item.closed ? ' closed' : ''}`}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
