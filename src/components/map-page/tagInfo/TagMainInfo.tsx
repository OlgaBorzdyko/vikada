import { Box, Typography } from '@mui/material'

import ImagesSwiper from './ImagesSwiper'
import { TagInfoArray } from './TagInfoArray'

type ItemData = {
  title: string
  description: string
  img: string[]
  address: string
  phoneNumber: string
  webSite: string
  openingHours: string
}

const TagMainInfo = () => {
  return (
    <div>
      {TagInfoArray.map((item: ItemData, index: number) => {
        return (
          <Box key={index}>
            <Typography variant="h2">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <ImagesSwiper images={item.img} />
            {item.address}
            {item.phoneNumber}
            {item.webSite}
            {item.openingHours}
          </Box>
        )
      })}
    </div>
  )
}

export default TagMainInfo
