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
          <Box
            borderBottom="1px solid #E1E1E1"
            borderTop="1px solid #E1E1E1"
            display="flex"
            flexDirection="column"
            gap={1.5}
            key={index}
          >
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <ImagesSwiper images={item.img} />

            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">{item.address}</Typography>
                <Typography variant="body1">{item.phoneNumber}</Typography>
              </Box>
              <Typography variant="body1">{item.webSite}</Typography>
              <Typography variant="body1">
                График работы: {item.openingHours}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </div>
  )
}

export default TagMainInfo
