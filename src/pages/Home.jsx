import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <div style={{
        background: 'linear-gradient(165deg, var(--maroon) 0%, var(--maroon-deep) 100%)',
        color: 'var(--cream)',
        padding: '72px 32px 60px',
      }}>
        <div className="wrap" style={{ padding: 0 }}>
          <div style={{ fontSize: '14px', color: 'var(--gold-soft)', marginBottom: '18px' }}>
            Vela Salud · camino a la revalidación en EE. UU.
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', lineHeight: 1.2, maxWidth: '16ch' }}>
            Tu ruta hacia ejercer medicina en Estados Unidos, paso a paso
          </h1>
          <p style={{ maxWidth: '54ch', fontSize: '16.5px', color: '#EFE2E0', marginTop: '18px' }}>
            Guías, herramientas de estudio y una comunidad de médicos y graduados que están
            recorriendo el mismo camino — desde la certificación ECFMG hasta la licencia estatal.
          </p>
          <Link to="/pasos" style={{
            display: 'inline-block',
            marginTop: '30px',
            background: 'var(--gold)',
            color: 'var(--maroon-deep)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14.5px',
            padding: '13px 24px',
            borderRadius: '3px',
          }}>Ver los pasos del camino</Link>
        </div>
      </div>

      <div className="wrap" style={{ padding: '52px 32px' }}>
        <h2 style={{ fontSize: '22px', color: 'var(--maroon)', marginBottom: '14px' }}>
          Qué encontrarás aquí
        </h2>
        <p style={{ maxWidth: '60ch', fontSize: '15.5px', color: 'var(--ink-muted)' }}>
          Este espacio reúne el roadmap completo de revalidación, mis guías interactivas por
          sistema para el USMLE, mi tracker de estudio, y alianzas con otros educadores médicos
          que — como yo — creen en compartir el camino en lugar de recorrerlo solos.
        </p>
      </div>
    </div>
  )
}
