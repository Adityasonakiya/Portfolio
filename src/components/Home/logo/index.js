import { useEffect, useRef } from 'react'
import LogoA from './giphy.gif'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoA}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo