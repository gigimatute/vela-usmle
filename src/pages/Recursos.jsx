const recursos = [
  {
    title: 'Tracker de diagnóstico y ritual de estudio',
    text: 'Seguimiento de errores, cronograma de 6 semanas, curva de puntajes NBME/UWSA.',
    href: 'https://step1-ritual.vercel.app',
  },
  {
    title: 'Vela Matute Institute',
    text: 'Contenido educativo de CLIAD sobre prevención de drogas y alcohol.',
    href: 'https://vela-matute-institute.vercel.app',
  },
  {
    title: 'Guías interactivas por sistema',
    text: '[Agrega aquí el link una vez publiques tu biblioteca de guías HTML por sistema.]',
    href: '#',
  },
]

export default function Recursos(){
  return (
    <div className="wrap" style={{ padding: '52px 32px 64px' }}>
      <h1 style={{ fontSize: '28px', color: 'var(--maroon)', marginBottom: '10px' }}>
        Recursos
      </h1>
      <p style={{ maxWidth: '58ch', color: 'var(--ink-muted)', fontSize: '15px', marginBottom: '36px' }}>
        Las herramientas que he construido a lo largo de mi propia preparación.
      </p>

      {recursos.map((r) => (
        <a key={r.title} href={r.href} target="_blank" rel="noopener" style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          padding: '20px 0',
          borderBottom: '1px solid var(--cream-warm)',
        }}>
          <h3 style={{ fontSize: '16.5px', marginBottom: '5px', color: 'var(--maroon)' }}>{r.title}</h3>
          <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--ink-muted)', maxWidth: '54ch' }}>{r.text}</p>
        </a>
      ))}
    </div>
  )
}
