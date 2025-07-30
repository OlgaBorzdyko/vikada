import { Alert, Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { passwordRules } from './PasswordRules'
import { passwordSchema } from './RegistrationSchema'

const PasswordChecking = ({ value }: { value?: string }) => {
  const [errors, setErrors] = useState<string[]>([])
  const isEmpty = !value?.length
  useEffect(() => {
    passwordSchema
      .validate(value, { abortEarly: false })
      .then(() => setErrors([]))
      .catch((err) => {
        const messages = err.inner?.map((e) => e.message) || []
        setErrors(messages)
      })
  }, [value])
  return (
    <>
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
    </>
  )
}

export default PasswordChecking
