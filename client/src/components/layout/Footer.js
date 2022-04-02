import React from 'react'

const Footer = () => {

  return (
    <div className='footer bg-black'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center py-5'>
            <div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-twitter font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-facebook font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-pinterest font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-linkedin font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-instagram font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-youtube-play font-20 width-30 border rounded-pill'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-snapchat font-20 width-30 border rounded-pill'></i>
              </div>
            </div>
            <div className='pt-4'>
              © 2020 VaynerMedia
            </div>
            <div>
              VX | Privacy Policy | Terms | Copyright Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer