import '../styles/blog.css'

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',
    title: '5 Vantagens de Visitar uma Barbearia',
    date: '04 de Março, 2026',
  },
  {
    img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80',
    title: 'Cosméticos Masculinos para Estilo de Cabelo',
    date: '02 de Agosto, 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    title: 'Cuidados com Barba e Bigode',
    date: '12 de Maio, 2026',
  },
]

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog__inner">
        <div className="blog__header">
          <p className="section-tag">Nosso Blog</p>
          <h2>Postagens Recentes</h2>
        </div>
        <div className="blog__grid">
          {posts.map((post, i) => (
            <div className="blog__card" key={i}>
              <div className="blog__img-wrap">
                <img src={post.img} alt={post.title} loading="lazy" />
              </div>
              <div className="blog__body">
                <p className="blog__date">{post.date}</p>
                <h3 className="blog__title">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
