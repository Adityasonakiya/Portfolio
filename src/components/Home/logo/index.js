
    // "gsap-trial": "^3.11.0",

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoA from './giphy.gif'
// import './index.scss'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       })

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 10,
//       },
//       {
//         opacity: 1,
//         delay: 0,
//         duration: 4,
//       }
//     )
//   }, [])

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img
//         className="solid-logo"
//         ref={solidLogoRef}
//         src={LogoA}
//         alt="JavaScript,  Developer"
//       />
//     </div>
//   )
// }

// export default Logo