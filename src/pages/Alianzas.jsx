export default function Alianzas(){
  return (
    <div>
      <div style={{
        background: 'linear-gradient(165deg, var(--maroon) 0%, var(--maroon-deep) 100%)',
        color: 'var(--cream)',
        padding: '56px 32px 48px',
      }}>
        <div className="wrap" style={{ padding: 0 }}>
          <div style={{ fontSize: '14px', color: 'var(--gold-soft)', marginBottom: '16px' }}>
            Recursos recomendados
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: 1.2, maxWidth: '18ch' }}>
            Un aliado en el camino del USMLE
          </h1>
          <p style={{ maxWidth: '52ch', fontSize: '16px', color: '#EFE2E0', marginTop: '16px' }}>
            Antes de continuar, quiero presentarte a alguien que ha sido parte fundamental del mío.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ padding: '44px 32px' }}>
        <p style={{ maxWidth: '62ch', fontSize: '16px' }}>
          Cuando empecé a prepararme intensivamente para el Step 1, me encontré con el contenido
          de Javier Galileo en YouTube casi por casualidad — y se convirtió en una de las piezas
          más importantes de mi estudio de temas de alto rendimiento (HY). Todo, completamente
          gratis, ofrecido con una claridad y generosidad poco comunes en este camino que muchas
          veces se siente solitario.
        </p>
        <p style={{ maxWidth: '62ch', fontSize: '16px' }}>
          Por eso quise ir más allá de un simple agradecimiento. Lo que sigue es una alianza real:
          si tú también te preparas para revalidar tu título médico en Estados Unidos, quiero que
          conozcas su trabajo — y que, si decides dar el paso con él, tengas acceso a todo lo que
          yo he construido en este camino.
        </p>
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: 'italic',
          fontSize: '18px',
          color: 'var(--maroon)',
          marginTop: '22px',
        }}>— Dra. Guilliana "Gigi" Matute</div>
      </div>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--gold) 0%, transparent 85%)', margin: '0 32px' }} />

      <div className="wrap" style={{ padding: '44px 32px' }}>
        <h2 style={{ fontSize: '24px', color: 'var(--maroon)', marginBottom: '6px' }}>Javier Galileo</h2>
        <div style={{ fontSize: '14.5px', color: 'var(--ink-muted)', marginBottom: '20px' }}>
          Fundador, Galileo Médico LLC
        </div>
        <p style={{ maxWidth: '62ch', fontSize: '15.5px' }}>
          Galileo Médico LLC ofrece educación médica y preparación académica para médicos,
          graduados y estudiantes de medicina, con enfoque principal en el USMLE: clases en vivo
          y grabadas, revisión de ciencias básicas y clínicas, entrenamiento con bancos de
          preguntas, análisis de preguntas tipo USMLE/NBME, materiales en PDF, resúmenes y
          esquemas, y programas de preparación en bioquímica, genética, inmunología, fisiología,
          farmacología, microbiología, patología, medicina interna, cirugía, pediatría,
          ginecobstetricia, psiquiatría y medicina preventiva.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '26px' }}>
          <a href="https://galileomedico.thinkific.com/" target="_blank" rel="noopener"
            style={{
              background: 'var(--maroon)', color: 'var(--cream)', textDecoration: 'none',
              fontWeight: 600, fontSize: '14.5px', padding: '13px 22px', borderRadius: '3px',
            }}>Conocer planes de acceso</a>
          <a href="mailto:galileo21medico@gmail.com"
            style={{
              background: 'transparent', color: 'var(--maroon)', textDecoration: 'none',
              fontWeight: 600, fontSize: '14.5px', padding: '13px 22px', borderRadius: '3px',
              border: '1.4px solid var(--maroon)',
            }}>Escribirle directamente</a>
        </div>
        <div style={{ fontSize: '12.5px', color: 'var(--ink-muted)', marginTop: '8px', fontStyle: 'italic' }}>
          También puedes contactarlo al 786-843-5616.
        </div>
      </div>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--gold) 0%, transparent 85%)', margin: '0 32px' }} />

      <div className="wrap" style={{ padding: '44px 32px' }}>
        <h2 style={{ fontSize: '22px', color: 'var(--maroon)', marginBottom: '8px' }}>
          Cómo funciona esta alianza
        </h2>
        <p style={{ color: 'var(--ink-muted)', fontSize: '15px', marginBottom: '30px', maxWidth: '56ch' }}>
          Si decides inscribirte en Galileo Médico, esto es lo que obtienes además de su programa:
          acceso completo a todo lo que he construido para el Step 1 — y próximamente el Step 2.
        </p>

        {[
          ['1', 'Inscríbete en su curso o membresía', 'A través de galileomedico.thinkific.com, en el programa que mejor se ajuste a tu momento de estudio.'],
          ['2', 'Cuéntale que vienes de mi parte', 'Menciónale a Javier, al momento de inscribirte, que llegaste a través de mi recomendación.'],
          ['3', 'Escríbeme con tu comprobante', 'Envíame la captura de tu inscripción. Con eso confirmo tu acceso — sin códigos ni pasos adicionales.'],
          ['4', 'Recibe tus links de acceso', 'Te comparto manualmente el acceso a mis guías interactivas por sistema, mi tracker de diagnóstico y mi app de ritual diario de estudio.'],
        ].map(([n, title, text]) => (
          <div key={n} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--cream-warm)' }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '34px', color: 'var(--gold)', lineHeight: 1, minWidth: '44px' }}>{n}</div>
            <div>
              <h3 style={{ fontSize: '16.5px', marginBottom: '5px' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--ink-muted)', maxWidth: '52ch' }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: 'var(--cream-warm)',
        borderLeft: '3px solid var(--gold)',
        padding: '20px 24px',
        margin: '0 32px 44px',
        borderRadius: '0 4px 4px 0',
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-muted)' }}>
          <strong style={{ color: 'var(--ink)' }}>Transparencia:</strong> esta es una colaboración
          de visibilidad mutua entre Javier Galileo y yo — no recibo comisión monetaria por esta
          recomendación. Lo que comparto aquí nace de mi propia experiencia usando su contenido
          durante mi preparación.
        </p>
      </div>
    </div>
  )
}
