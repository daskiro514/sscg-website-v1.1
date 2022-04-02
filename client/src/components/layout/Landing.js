import React from 'react'
import homeVideo1 from '../../img/video/home-video-1.mp4'
import homeVideo2 from '../../img/video/home-video-2.mp4'
import WithScrollbar from './WithScrollbar'
import 'react-multi-carousel/lib/styles.css'
import clientsImage from '../../img/clients.jpg'
import Clients from './Clients'
import homeSlider from '../../img/video/homeslider.mp4'

const Landing = () => {
  return (
    <div className='landing'>
      <div className='home-video-1 position-relative'>
        <div className='container-fluid'>
          <div className='row'>
            <video autoPlay muted loop id='myVideo' className='w-100'>
              <source src={homeVideo1} type='video/mp4' />
            </video>
            <div className='col-12 position-absolute text-z-index-10'>
              <div className='text-center h1 text-white p-20vh'>
                We're the actual creative and media agency that you're looking for.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 py-custom-10 bg-black'>

      </div>
      <div className='home-carousel bg-custom-blue'>
        <div className='py-custom-8 bg-custom-blue'>
          <WithScrollbar />
        </div>
      </div>
      <div className='get-in-touch'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 py-custom-10'>
              <div className='text-center h2'>
                We're a global creative & media agency
              </div>
              <div className='text-center h2'>
                that works differently because
              </div>
              <div className='d-flex justify-content-center '>
                <div className='h2'>
                  we're built differently.
                  <hr />
                </div>
              </div>
              <div className='text-center py-4'>
                <button className='border border-dark bg-white p-3 px-5 border-width-5px h5 font-weight-bold'>
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='services'>
        <div className='container'>
          <div className='row'>
            <nav className='col-lg-5 py-custom-10' id='myScrollspy'>
              <ul className='nav nav-pills flex-column h3'>
                <li className='nav-item pb-4'>
                  <a className='pl-5 nav-link active' href='#service-creative'><i className='fa fa-paint-brush mr-3'></i>Creative</a>
                </li>
                <li className='nav-item pb-4'>
                  <a className='pl-5 nav-link' href='#service-media'><i className='fa fa-bar-chart mr-3'></i>Media</a>
                </li>
                <li className='nav-item pb-4'>
                  <a className='pl-5 nav-link' href='#service-strategy'><i className='fa fa-cogs mr-3'></i>Strategy</a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='pl-5 nav-link' href='#service-consulting'><i className='fa fa-handshake-o mr-3'></i>Consulting</a>
                </li>
              </ul>
            </nav>
            <div className='col-lg-7'>
              <section id='service-creative' className='py-custom-10'>
                <div className='service-mobile'>
                  <div className='h3 p-0'>
                    <i className='fa fa-paint-brush mr-3'></i>
                  </div>
                  <div className='h3 pb-4'>
                    Creative
                  </div>
                </div>
                <div className='h3'>
                  Curiosity unleashed
                </div>
                <div className='text-justify font-19'>
                  A truly consumer-centric storytelling engine. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer reactions vs guessing and having to be right with our opinions and subjectivity. The result? Powerful creative that works born from the consumer up.  We are a modern mix of traditional Madison Avenue thinkers of yesterday and internet-centric storytellers of today who believe a single tweet can go all the way to a Super Bowl commercial. So we pay equal respect to both.
                </div>
              </section>
              <section id='service-media' className='py-custom-10'>
                <div className='service-mobile'>
                  <div className='h3 p-0'>
                    <i className='fa fa-bar-chart mr-3'></i>
                  </div>
                  <div className='h3 pb-4'>
                    Media
                  </div>
                </div>
                <div className='h3'>
                  Business outcomes. Not potential reach.
                </div>
                <div className='text-justify font-19'>
                  We're relentlessly focused on one thing: driving business results for brands.  This means having a deep respect and intimate knowledge of channels where consumers are spending their time, and building modern planning, buying and analytics disciplines that drive consumers to act.  While the industry has been built on reach and efficiency, we're upending the model, to understand attention, relevance and results.
                </div>
              </section>
              <section id='service-strategy' className='py-custom-10'>
                <div className='service-mobile'>
                  <div className='h3 p-0'>
                    <i className='fa fa-cogs mr-3'></i>
                  </div>
                  <div className='h3 pb-4'>
                    Strategy
                  </div>
                </div>
                <div className='h3'>
                  We're about people
                </div>
                <div className='text-justify font-19'>
                  We put human beings at the forefront of everything we do, ensuring our ideas and plans are culturally rich and consumer-led.   We approach strategy with practicality, humility and empathy. We believe that brands today can't rely on a single, generic message served to a mass audience, the most effective way to drive relevance and growth is by speaking specifically and differently to people based on who they are, by listening and understanding.
                </div>
              </section>
              <section id='service-consulting' className='py-custom-10'>
                <div className='service-mobile'>
                  <div className='h3 p-0'>
                    <i className='fa fa-handshake-o mr-3'></i>
                  </div>
                  <div className='h3 pb-4'>
                    Consulting
                  </div>
                </div>
                <div className='h3'>
                  Borrow our brains
                </div>
                <div className='text-justify font-19'>
                  Deep-dive into the current state of consumer attention and immerse your team in emerging areas of culture to gain an in-depth understanding of what it takes to drive relevance in today's landscape. You'll work alongside some of the most seasoned, progressive and consumer-obsessed strategists, creators and media platform specialists in the industry to unlock modern solutions to your biggest business challenges. Walk away with a volume of actionable ideas that can be put into market and a robust, strategic roadmap for how to build sustainable relevance for your brand across a broad spectrum of consumers.
                </div>
              </section>
            </div>
          </div>
        </div>
      </div >
      <div className='get-in-touch clients'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 py-custom-10'>
              <div className='text-center h2'>
                We're grateful to work with
              </div>
              <div className='d-flex justify-content-center '>
                <div className='h2'>
                  incredible clients.
                  <hr />
                </div>
              </div>
              <div className='text-center pt-5 clients-image-all'>
                <img alt='SETIMAGE' src={clientsImage} className='img-fluid' />
              </div>
              <Clients />
            </div>
          </div>
        </div>
      </div>
      <div className='custom-slider-1 py-custom-10 bg-black'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='h2 color-light-blue'>
                <i className='fa fa-quote-right'></i>
              </div>
              <div className='font-30 font-weight-bold'>
                Many agencies are focused on finding that one 'big idea' that can power a brand through many months across multiple platforms. Not VaynerMedia. The 11-year-old shop fires many ideas into the market, watches what works, and then leans in.
              </div>
              <div className='d-flex align-items-center mt-5 mb-3'>
                <div className='mr-4'>AdAge</div>
                <div>
                  <div>AdAge 2020</div>
                  <div className='text-secondary'>A-List "Agencies to Watch</div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='width-170-percent'>
                <video autoPlay muted loop className='w-100'>
                  <source src={homeSlider} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='custom-slider-1 py-custom-10 bg-black'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 pb-3'>
              <div className='h3'>Where you can find our</div>
              <div className='h3'>VaynerMedia offices</div>
            </div>
            <div className='col-lg-6 text-right'>
              <button className='border border-white bg-black text-white p-3 px-4'>
                EXPORE THE ENTIRE VAYNERX HOLDING COMPANY
              </button>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>New York</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Los Angeles</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>London</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Singapore</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Mexico City</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Tokyo</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Bangkok</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='h5 font-weight-bold'>Sydney</div>
                      <div className='d-flex'>
                        <div className='font-weight-bold color-light-blue'>
                          VIEW MAP
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-video-1 position-relative'>
        <div className='container-fluid'>
          <div className='row home-video-2'>
            <video autoPlay muted loop id='myVideo'>
              <source src={homeVideo2} type='video/mp4' />
            </video>
            <div className='col-12 position-absolute text-z-index-10'>
              <div className='text-center h2 text-white p-20vh'>
                Let's find right together
              </div>
              <div className='row py-2'>
                <div className='col-lg-6 text-right py-1'>
                  <button className='border border-white bg-transparent text-white p-3 px-4'>
                    FIND RIGHT FOR YOUR BUSINESS
                  </button>
                </div>
                <div className='col-lg-6 text-left py-1'>
                  <button className='border border-white bg-transparent text-white p-3 px-4'>
                    FIND RIGHT FOR YOUR CAREER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Landing
