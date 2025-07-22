import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ImagesSwiper = () => {
  return (
    <>
      <Swiper className="mySwiper" modules={[Navigation]} navigation={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  )
}

export default ImagesSwiper
