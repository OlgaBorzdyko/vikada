import { Box, Typography } from '@mui/material'

import { useMapStore } from '../../../store/MapStore'
import ImagesSwiper from './ImagesSwiper'

type DaySchedule = {
  from: string
  to: string
}

const getDayName = (dayNumber: number) => {
  const days: Record<number, string> = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  }
  return days[dayNumber] ?? '-'
}

const TagMainInfo = () => {
  const selectedObject = useMapStore((state) => state.selectedObject)
  const scheduleArray = Object.entries(
    selectedObject?.workingSchedule ?? ({} as [string, DaySchedule][])
  )
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
          <Box gap={2}>
            {scheduleArray.map(([day, hours]) => (
              <Box display="flex" flexDirection="row" key={day}>
                <Typography>{getDayName(Number(day))}</Typography>
                <Typography>
                  {hours?.from && hours?.to
                    ? `${hours.from} - ${hours.to}`
                    : '-'}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default TagMainInfo
