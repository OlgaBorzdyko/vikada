import { Box, Typography } from '@mui/material'

import { passwordRules } from './PasswordRules'

const PasswordChecking = ({ errors = [] }: { errors?: string[] }) => {
  console.log(errors)
  return (
    <Box>
      {passwordRules.map((rule, i) => (
        <Typography key={i}>{rule.label}</Typography>
      ))}
    </Box>
  )
}

export default PasswordChecking
