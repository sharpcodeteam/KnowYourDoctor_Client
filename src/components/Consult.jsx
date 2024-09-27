import React from 'react'
import period from '../images/period.webp'
import Acne from '../images/Acne.webp'
import coughing from '../images/coughing.webp'
import wellness from '../images/wellness.webp'
import sexology from '../images/sexology.svg'
import pediatric from '../images/pediatric.svg'
import '../App.css'

export default function Consult() {
  return (
      <div className='grid'>
          <div className='Consult'>
            <img src={period} alt="Harsh" className='teamPic'/>
            <p>Period doubts or Pregnancy</p>
          </div>
          <div className='Consult'>
            <img src={Acne} alt="Harsh" className='teamPic'/>
            <p>Acne, pimple or skin issues</p>
          </div>
          <div className='Consult'>
            <img src={sexology} alt="Harsh" className='teamPic'/>
            <p>Performance issue in bed</p>
          </div>
          <div className='Consult'>
            <img src={coughing} alt="Harsh" className='teamPic'/>
            <p>cold, cough or fever</p>
          </div>
          <div className='Consult'>
            <img src={wellness} alt="Harsh" className='teamPic'/>
            <p>Child not feeling well</p>
          </div>
          <div className='Consult'>
            <img src={pediatric} alt="Harsh" className='teamPic'/>
            <p>Depression or anxiety</p>
          </div>
    </div>
  )
}
