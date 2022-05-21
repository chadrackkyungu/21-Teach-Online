import React, { Component } from "react"
import { Carousel, CarouselItem, CarouselControl } from "reactstrap"

// Carousel images
import img3 from "../../assets/images/Banner/banner-3.jpg"
import img4 from "../../assets/images/Banner/banner-4.png"

// import moduleName from '../../assets/images/Banner/';

const items = [
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: img4,
    altText: "Slide 4",
    caption: "Slide 4",
  },
]

class Slidewithcontrol extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            className="d-block img-fluid slide-img"
            alt={item.altText}
          />
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <div className="banner">
          <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
            {slides}
            <CarouselControl className="white" direction="prev" directionText="Previous" onClickHandler={this.previous}/>
            <CarouselControl direction="next"  directionText="Next"onClickHandler={this.next} />
          </Carousel>
        </div>

      </React.Fragment>
    )
  }
}

export default Slidewithcontrol
