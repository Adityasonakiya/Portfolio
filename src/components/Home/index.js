import { Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetter'
import Logo from "./logo";



const Portfolio_web = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['d', 'i', 't', 'y', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  });


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}>&nbsp;A</span>
            {/* <img src="https://media1.giphy.com/media/7ZqdpGYvW8XdsykYkd/200w.webp?cid=ecf05e477iqez23wq3brx5d3mfn1bw4wo5174ciy35kkobhb&rid=200w.webp&ct=ts" style={{ height: "70px", width: "70px" }} id="A" alt="web Developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio_web;
