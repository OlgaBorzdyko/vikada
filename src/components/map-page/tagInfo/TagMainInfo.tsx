import { Box, Typography } from '@mui/material'

import { useMapStore } from '../../../store/MapStore'
import ImagesSwiper from './ImagesSwiper'
import ScheduleComponent from './schedule/ScheduleComponent'

const TagMainInfo = () => {
  const selectedObject = useMapStore((state) => state.selectedObject)
  return (
    <div>
      <Box
        borderBottom="1px solid #E1E1E1"
        borderTop="1px solid #E1E1E1"
        display="flex"
        flexDirection="column"
        gap={1.5}
      >
        <Typography variant="h3">{selectedObject?.title}</Typography>
        <Typography variant="body1">{selectedObject?.description}</Typography>
        <ImagesSwiper images={selectedObject?.img || []} />

        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">{selectedObject?.address}</Typography>
            <Typography variant="body1">
              {selectedObject?.phoneNumber}
            </Typography>
          </Box>
          <Typography variant="body1">{selectedObject?.webSite}</Typography>
          <ScheduleComponent />
        </Box>
      </Box>
    </div>
  )
}

export default TagMainInfo
