import { Box, Typography } from '@mui/material'

import { TagInfoArray } from './TagInfoArray'

const ToursList = () => {
  return (
    <div>
      {TagInfoArray.map((item, index) => (
        <Box key={index}>
          <Box display="flex" flexDirection="column" gap={1}>
            {item.tours?.map((tour, i) => (
              <Box key={i}>
                <Typography variant="h4">{tour.title}</Typography>
                <Typography variant="body2">{tour.description}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </div>
  )
}

export default ToursList
