import { Box, Typography } from '@mui/material'

import { TagInfoArray } from './TagInfoArray'

type ItemData = {
  title: string
  description: string
  img: []
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
            <Box>
              {item.img.map((src, i) => (
                <img
                  alt={item.title}
                  key={i}
                  src={src}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '12px'
                  }}
                />
              ))}
            </Box>
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
