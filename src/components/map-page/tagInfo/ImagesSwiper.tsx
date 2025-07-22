import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ImagesSwiper = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={7}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              alt=""
              src={src}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '12px'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImagesSwiper
