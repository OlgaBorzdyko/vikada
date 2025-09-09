import { Box, useTheme } from '@mui/material'

import { itemData } from './imagesArray'

const ImagesList = () => {
  const theme = useTheme()

  const squareSize = theme.fn.clampVW(140, 100, 180)
  const rightCol = theme.fn.clampVW(180, 120, 220)

  return (
    <Box
      display="grid"
      gap={theme.fn.clampVW(16, 8, 24)}
      gridTemplateColumns={`${squareSize} 1fr ${rightCol}`}
      gridTemplateRows={`${squareSize} ${squareSize} ${rightCol}`}
      width="100%"
    >
      {itemData.map((item, index) => (
        <Box
          alt={item.title}
          component="img"
          key={index}
          src={item.img}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: theme.fn.clampVW(12, 6, 16),
            gridColumn: item.gridColumn,
            gridRow: item.gridRow
          }}
        />
      ))}
    </Box>
  )
}

export default ImagesList
