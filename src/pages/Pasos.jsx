const pasos = [
  {
    n: '1',
    title: 'Certificación ECFMG',
    text: 'Verificación de tu título y credenciales médicas ante el Educational Commission for Foreign Medical Graduates — requisito base para presentar los exámenes USMLE como graduado internacional.',
  },
  {
    n: '2',
    title: 'USMLE Step 1',
    text: 'Evaluación de ciencias básicas. Actualmente se califica como aprobado/no aprobado. [Personaliza esta sección con tu cronograma y recursos específicos.]',
  },
  {
    n: '3',
    title: 'USMLE Step 2 CK',
    text: 'Ciencias clínicas — razonamiento clínico aplicado. [Agrega aquí tu plan de estudio y fecha estimada.]',
  },
  {
    n: '4',
    title: 'Postulación a residencia (Match)',
    text: 'A través de ERAS y el National Resident Matching Program (NRMP). Incluye cartas de recomendación, personal statement y entrevistas.',
  },
  {
    n: '5',
    title: 'USMLE Step 3',
    text: 'Último examen de la secuencia — suele presentarse durante o después de la residencia, según el estado.',
  },
  {
    n: '6',
    title: 'Licencia médica estatal',
    text: 'Trámite final ante la junta médica del estado donde planeas ejercer — los requisitos varían según el estado.',
  },
]

export default function Pasos(){
  return (
    <div className="wrap" style={{ padding: '52px 32px 64px' }}>
      <h1 style={{ fontSize: '28px', color: 'var(--maroon)', marginBottom: '10px' }}>
        El camino a la revalidación
      </h1>
      <p style={{ maxWidth: '58ch', color: 'var(--ink-muted)', fontSize: '15px', marginBottom: '36px' }}>
        Una ruta general para médicos graduados internacionalmente (IMGs). Cada persona la recorre
        a su propio ritmo — esto es un mapa, no una carrera contra el tiempo.
      </p>

      {pasos.map((p) => (
        <div key={p.n} style={{
          display: 'flex',
          gap: '20px',
          padding: '22px 0',
          borderBottom: '1px solid var(--cream-warm)',
        }}>
          <div style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: '36px',
            color: 'var(--gold)',
            lineHeight: 1,
            minWidth: '46px',
          }}>{p.n}</div>
          <div>
            <h3 style={{ fontSize: '17px', marginBottom: '6px' }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--ink-muted)', maxWidth: '54ch' }}>
              {p.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
