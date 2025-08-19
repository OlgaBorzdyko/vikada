import { Box, Typography } from '@mui/material'

import { useMapStore } from '../../../../store/MapStore'

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

const ScheduleComponent = () => {
  const selectedObject = useMapStore((state) => state.selectedObject)
  const scheduleArray = Object.entries(
    selectedObject?.workingSchedule ?? ({} as [string, DaySchedule][])
  )
  const today = new Date()
  const jsDay = today.getDay()
  const currentDay = jsDay === 0 ? 7 : jsDay
  const todaySchedule = selectedObject?.workingSchedule?.[currentDay]

  return (
    <Box gap={2}>
      <Typography>Открыто до {todaySchedule?.to.slice(0, 5)}</Typography>
      {scheduleArray.map(([day, hours]) => (
        <Box display="flex" flexDirection="row" key={day}>
          <Typography>{getDayName(Number(day))}</Typography>
          <Typography>
            {hours?.from && hours?.to
              ? `${hours.from.slice(0, 5)} - ${hours.to.slice(0, 5)}`
              : '-'}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
export default ScheduleComponent
