import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">

        <div className="footer__brand">
          <div className="footer__brand-logo">
            <span className="footer__brand-logo-icon">✦</span>
            Barber Studio
          </div>
          <p>A barbearia que transforma seu visual e eleva sua confiança. Qualidade, estilo e atendimento premium.</p>
        </div>

        <div className="footer__links-group">
          <div className="footer__col">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__col footer__newsletter">
          <h4>Receba Novidades</h4>
          <p>Dicas de estilo e ofertas exclusivas diretamente no seu e-mail.</p>
          <div className="footer__newsletter-form">
            <input className="footer__newsletter-input" type="email" placeholder="Seu e-mail" />
            <button className="footer__newsletter-btn">Assinar</button>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>Barber Studio © Todos os Direitos Reservados.</p>
      </div>
    </footer>
  )
}