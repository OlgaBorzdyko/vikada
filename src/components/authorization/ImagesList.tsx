import { Box } from '@mui/material'

import { itemData } from './imagesArray'

const ImagesList = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)'
      }}
    >
      {itemData.map((item) => (
        <Box key={item.img} sx={{}}>
          <Box
            alt={item.title}
            component="img"
            loading="lazy"
            src={item.img}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Box>
      ))}
    </Box>
  )
}
export default ImagesList
