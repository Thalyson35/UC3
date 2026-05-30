import '../styles/about.css'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__inner">
        <div className="about__left">
          <p className="section-tag">Sobre Nós</p>
          <h2>Barbearia profissional <br/> com presença e estilo</h2>
          <div className="about__watermark">BARBER STUDIO</div>
        </div>
        <div className="about__right">

          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <h4>Desde 2015</h4>
                <p>Tradição e evolução constante em cortes masculinos.</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <h4>+ de 1000 Clientes</h4>
                <p>Confiança construída através de resultados consistentes.</p>
              </div>
            </div>
          </div>
          <a href="#servicos" className="btn-red">Saiba Mais</a>
        </div>
      </div>
    </section>
  )
}
