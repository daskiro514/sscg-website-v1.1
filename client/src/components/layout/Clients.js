import React from 'react'
import clientImage1 from '../../img/clientImage1.png'
import clientImage2 from '../../img/clientImage2.png'
import clientImage3 from '../../img/clientImage3.png'
import clientImage4 from '../../img/clientImage4.png'
import clientImage5 from '../../img/clientImage5.png'
import clientImage6 from '../../img/clientImage6.png'
import clientImage7 from '../../img/clientImage7.png'
import clientImage8 from '../../img/clientImage8.png'
import clientImage9 from '../../img/clientImage9.png'
import clientImage10 from '../../img/clientImage10.png'
import clientImage11 from '../../img/clientImage11.png'
import clientImage12 from '../../img/clientImage12.png'
import clientImage13 from '../../img/clientImage13.png'
import clientImage14 from '../../img/clientImage14.png'
import clientImage15 from '../../img/clientImage15.png'
import clientImage16 from '../../img/clientImage16.png'
import clientImage17 from '../../img/clientImage17.png'

const images = [
  clientImage1,
  clientImage2,
  clientImage3,
  clientImage4,
  clientImage5,
  clientImage6,
  clientImage7,
  clientImage8,
  clientImage9,
  clientImage10,
  clientImage11,
  clientImage12,
  clientImage13,
  clientImage14,
  clientImage15,
  clientImage16,
  clientImage17,
]

const Clients = () => {

  const [current, setCurrent] = React.useState(0)

  return (
    <div className='clients-inner pt-3'>
      <div>
        <button
          className='btn btn-sm bg-black text-white rounded-0 mx-1'
          onClick={() => setCurrent((17 + current - 1) % 17)}
        >
          <i className='fa fa-angle-left px-1'></i>
        </button>
        <button
          className='btn btn-sm bg-black text-white rounded-0 mx-1'
          onClick={() => setCurrent((17 + current + 1) % 17)}
        >
          <i className='fa fa-angle-right px-1'></i>
        </button>
      </div>
      <div className='text-center px-5 pt-3'>
        <img alt='SETIMAGE' src={images[current]} className='img-fluid' />
      </div>
    </div>
  )
}

export default Clients