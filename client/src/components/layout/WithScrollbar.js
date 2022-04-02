import React from "react"
import Carousel from "react-multi-carousel"
import "./WithScrollbar.css"
import carouselImage1 from '../../img/carousel1.jpg'
import carouselImage2 from '../../img/carousel2.jpg'
import carouselImage3 from '../../img/carousel3.jpg'
import carouselImage4 from '../../img/carousel4.jpg'
import carouselImage5 from '../../img/carousel5.jpg'
import carouselImage6 from '../../img/carousel6.jpg'
import carouselImage7 from '../../img/carousel7.jpg'
import carouselImage8 from '../../img/carousel8.jpg'
import carouselImage9 from '../../img/carousel9.jpg'
import carouselImage10 from '../../img/carousel10.jpg'
import carouselImage11 from '../../img/carousel11.jpg'
import carouselImage12 from '../../img/carousel12.jpg'
import carouselImage13 from '../../img/carousel13.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const carouselItems = [
  {
    image: carouselImage1,
    text1: "We respect the internet's impact on culture, not Madison Avenue's.",
    text2: "LET'S GET REAL"
  },
  {
    image: carouselImage2,
    text1: "We're consumer-centric, not boardroom-centric",
    text2: "IT'S TIME TO GET HUMAN"
  },
  {
    image: carouselImage3,
    text1: "We evolve, while the industry merges",
    text2: "LET'S GROW TOGETHER"
  },
  {
    image: carouselImage4,
    text1: "We partner, never posture",
    text2: "PARTNER WITH US"
  },
  {
    image: carouselImage5,
    text1: "We create ideas consumer up, not ego down",
    text2: "LET'S GET CREATING"
  },
  {
    image: carouselImage6,
    text1: "We're forever inventing a new craft, while the industry is still polishing their own.",
    text2: "LET'S GO"
  },
  {
    image: carouselImage7,
    text1: "We calue real consumer signals.",
    text2: "LET'S FIND THEM"
  },
  {
    image: carouselImage8,
    text1: "We're obsessed with business results, not patting ourselves on the back.",
    text2: "LET'S GET TO WORK"
  },
  {
    image: carouselImage9,
    text1: "We drive contextual relevance at scale because it drives business.",
    text2: "LET'S WIN TOGETHER"
  },
  {
    image: carouselImage10,
    text1: "We have humility and curiosity to find right not to debate what's right for months on end.",
    text2: "LET'S FIND RIGHT"
  },
  {
    image: carouselImage11,
    text1: "We believe it's our responsibility to deliver business results... or fire us.",
    text2: "BUT FIRST, HIRE US"
  },
  {
    image: carouselImage12,
    text1: "We're all practitioners and we do the work.",
    text2: "LET'S GET TO WORK"
  },
  {
    image: carouselImage13,
    text1: "We scale the unscalable.",
    text2: "IT'S TIME TO GO BIG"
  },
]

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 }
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0
      let carouselItemWidth = 0
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
          (this.Carousel.state.totalItems -
            this.Carousel.state.slidesToShow) +
          150
        )
        value = maxTranslateX / 100 // calculate the unit of transform for the slider
      }
      const { transform } = carouselState
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false
              }
              const nextTransform = e.target.value * value
              const nextSlide = Math.round(nextTransform / carouselItemWidth)
              if (
                e.target.value === 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true
                this.setState({ additionalTransfrom: 0 })
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              })
            }}
            className="custom-slider__input"
          />
        </div>
      )
    }
    return (
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        infinite={true}
        autoPlay={false}
        arrows={false}
        autoPlaySpeed={10000}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 })
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 })
          }
        }}
      >
        {carouselItems.map((item, index) =>
          <div key={index} className='mx-4 cursor-pointer' style={{ background: `url(${item.image}) no-repeat center center/cover` }}>
            <div className='carousel-custom-item' style={{ background: 'rgba(1,1,1,0.6)' }}>
              <div className='h3 text-white'>{item.text1}</div>
              <div className='text-white '>{item.text2}</div>
            </div>
          </div>
        )}
      </Carousel>
    )
  }
}

export default WithScrollbar
