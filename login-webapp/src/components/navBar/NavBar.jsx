import './NavBar.css'

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SAMPLE_ROUTE = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
]

const NavBar = ({ routes = SAMPLE_ROUTE, title = 'NavBar', currentRoute="/" }) => {
  const navigate = useNavigate()

  const navBarRef = useRef(null)

  return (
    <>
      <div ref={navBarRef} className="navbar">
        <h3 className="title">{title}</h3>
        <div className="routes">
          {routes?.map((r, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  navigate(r.path)
                }}
                style={{fontWeight: currentRoute===r.path ? "bold": "normal"}}
              >
                {r.name}
              </button>
            )
          }) || <></>}
        </div>
      </div>
      <div className='navbar-padding' style={{"--paddingHeight":navBarRef?.current?.getBoundingClientRect()?.height || 0 + "px"}} />
    </>
  )
}

export default NavBar
