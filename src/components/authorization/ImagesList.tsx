import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { itemData } from './imagesArray'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  }
}

const ImagesList = () => {
  return (
    <ImageList
      cols={4}
      rowHeight={121}
      sx={{ width: 500, height: 450 }}
      variant="quilted"
    >
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
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
export default ImagesList
