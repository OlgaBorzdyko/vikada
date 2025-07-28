import { Alert, Box } from '@mui/material'

import { passwordRules } from './PasswordRules'

const PasswordChecking = ({ errors }: { errors: string[] }) => {
  return (
    <Box>
      {passwordRules.map((rule, i) => {
        const failed = errors?.includes(rule.errorText)
        return (
          <Alert
            key={i}
            severity={failed ? 'success' : 'error'}
            variant="outlined"
          >
            {rule.label}
          </Alert>
        )
      })}
    </Box>
  )
}

export default PasswordChecking
