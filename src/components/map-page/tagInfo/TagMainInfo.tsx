import { Box, Typography } from '@mui/material'

import { TagInfoArray } from './TagInfoArray'

type ItemData = {
  title: string
  description: string
  img: string
  address: string
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
            <img
              alt={item.title}
              src={item.img}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '12px'
              }}
            />
            {item.address}
            {item.webSite}
            {item.openingHours}
          </Box>
        )
      })}
    </div>
  )
}

export default TagMainInfo
