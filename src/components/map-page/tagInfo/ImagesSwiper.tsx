import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ImagesSwiper = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={6}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              alt=""
              src={src}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '12px',
                padding: '1px'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImagesSwiper
