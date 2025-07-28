import { Box, Typography } from '@mui/material'

const PasswordChecking = ({ errors = [] }: { errors?: string[] }) => {
  console.log(errors)
  return (
    <Box>
      {errors.map((error, i) => (
        <Typography key={i}>{error}</Typography>
      ))}
    </Box>
  )
}

export default PasswordChecking
