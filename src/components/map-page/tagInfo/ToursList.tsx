import { Box, Button, Typography } from '@mui/material'

import { TagInfoArray } from './TagInfoArray'

const ToursList = () => {
  return (
    <div>
      {TagInfoArray.map((item, index) => (
        <Box key={index}>
          <Box display="flex" flexDirection="column" gap={1}>
            {item.tours?.map((tour, i) => (
              <Box key={i}>
                <Typography fontWeight="700" variant="h2">
                  {tour.title}
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  {tour.description}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'palette.primary',
                    textTransform: 'none'
                  }}
                >
                  <Typography variant="body1">Подробнее</Typography>
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </div>
  )
}

export default ToursList
