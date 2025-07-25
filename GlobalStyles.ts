import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    .swiper-button-next,
    .swiper-button-prev {
        color: white;
        background-color: rgba(40, 40, 40, 0.8);
        border-radius: 50%;
        width: 24px;
        height: 24px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 14px;
        font-weight: 400;
    }
`

export default GlobalStyles
