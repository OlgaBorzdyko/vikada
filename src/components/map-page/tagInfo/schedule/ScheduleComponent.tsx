import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)
  const selectedObject = useMapStore((state) => state.selectedObject)
  const scheduleArray = Object.entries(
    selectedObject?.workingSchedule ?? ({} as [string, DaySchedule][])
  )
  const today = new Date()
  const jsDay = today.getDay()
  const currentDay = jsDay === 0 ? 7 : jsDay
  const todaySchedule = selectedObject?.workingSchedule?.[currentDay]

  return (
    <Box width="50%">
      <Box display="flex" flexDirection="row" gap="8px">
        <Typography sx={{ color: 'text.secondary' }}>График работы:</Typography>
        <Typography sx={{ color: 'primary.main' }}>
          Открыто до {todaySchedule?.to.slice(0, 5)}
        </Typography>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            minWidth: 0,
            width: 8,
            height: 4
          }}
        >
          <img
            alt="arrow"
            src="/ButtonOpenList.png"
            style={{
              width: 'auto',
              height: 'auto',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </Button>
      </Box>
      {isOpen && (
        <Box>
          {scheduleArray.map(([day, hours]) => (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              key={day}
            >
              <Typography sx={{ color: 'text.secondary' }}>
                {getDayName(Number(day))}
              </Typography>
              <Typography>
                {hours?.from && hours?.to
                  ? `${hours.from.slice(0, 5)} - ${hours.to.slice(0, 5)}`
                  : '-'}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
export default ScheduleComponent
