import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { itemData } from './imagesArray'

const ImagesList = () => {
  return (
    <ImageList
      cols={3}
      rowHeight={183}
      sx={{
        width: 'auto',
        height: 'auto',
        '& .MuiImageListItem-root': {
          padding: '12px'
        }
      }}
      variant="quilted"
    >
      {itemData.map((item) => (
        <ImageListItem
          cols={item.cols || 1}
          key={item.img}
          rows={item.rows || 1}
        >
          <img
            alt={item.title}
            loading="lazy"
            src={item.img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
export default ImagesList
