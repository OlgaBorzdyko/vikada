import { Alert, Box } from '@mui/material'

import { passwordRules } from './PasswordRules'

const PasswordChecking = ({
  errors,
  value
}: {
  errors: string[]
  value?: string
}) => {
  const isEmpty = !value?.length
  console.log(errors)
  return (
    <Box>
      {passwordRules.map((rule, i) => {
        const failed = isEmpty || errors?.includes(rule.errorText)
        return (
          <Alert
            key={i}
            severity={failed ? 'error' : 'success'}
            sx={{ border: 'none', padding: 0 }}
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
