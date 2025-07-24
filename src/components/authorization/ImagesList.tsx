import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { itemData } from './imagesArray'

const ImagesList = () => {
  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`
    }
  }
  return (
    <Box>
      <ImageList cols={3} gap={12} rowHeight={183} variant="quilted">
        {itemData.map((item) => (
          <ImageListItem
            cols={item.cols || 1}
            key={item.img}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '12px' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default ImagesList
