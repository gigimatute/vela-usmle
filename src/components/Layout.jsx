import { NavLink, Outlet } from 'react-router-dom'

const navStyle = ({ isActive }) => ({
  textDecoration: 'none',
  fontSize: '14.5px',
  fontWeight: 600,
  color: isActive ? 'var(--maroon)' : 'var(--ink-muted)',
  borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
  paddingBottom: '4px',
})

export default function Layout(){
  return (
    <div>
      <header style={{
        background: 'var(--cream)',
        borderBottom: '1px solid var(--cream-warm)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div className="wrap" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 32px',
          flexWrap: 'wrap',
          gap: '14px',
        }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '19px',
              color: 'var(--maroon)',
            }}>Vela USMLE</span>
          </NavLink>
          <nav style={{ display: 'flex', gap: '26px' }}>
            <NavLink to="/pasos" style={navStyle}>Pasos</NavLink>
            <NavLink to="/alianzas" style={navStyle}>Alianzas</NavLink>
            <NavLink to="/recursos" style={navStyle}>Recursos</NavLink>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer style={{ padding: '36px 32px 56px' }}>
        <div className="wrap" style={{ padding: 0, fontSize: '13px', color: 'var(--ink-muted)' }}>
          Vela USMLE · parte de Vela Salud
        </div>
      </footer>
    </div>
  )
}
