import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { FC, useState } from 'react'

import { registrationSchema } from './RegistrationSchema'

interface RegistrationFormData {
  name: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const RegistrationForm: FC<RegistrationFormData> = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [userFormData, setUserFormData] = useState<Partial<FormData>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const initialFormState = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const formData = {
    ...initialFormState,
    ...userFormData
  }
  const onHandleChange = (value: string, key: string) => {
    setUserFormData((prev) => ({ ...prev, [key]: value }))
  }

  const onHandleSubmit = async () => {
    try {
      await registrationSchema.validate(formData)
      console.log('Успешно', formData)
    } catch (error) {
      const errors = {}
      errors[error.path] = error.message
      setFormErrors(errors)
      console.log(errors)
    }
  }
  return (
    <Box>
      <Box>
        <TextField
          label="Имя"
          onChange={(e) => onHandleChange(e.currentTarget.value, 'name')}
          value={formData.name}
          variant="outlined"
        />
        <TextField
          error={!!formErrors.lastName}
          label="Фамилия"
          onChange={(e) => onHandleChange(e.currentTarget.value, 'lastName')}
          value={formData.lastName}
          variant="outlined"
        />
        <TextField
          label="Почта"
          onChange={(e) => onHandleChange(e.currentTarget.value, 'email')}
          value={formData.email}
          variant="outlined"
        />
        <TextField
          InputProps={{
            autoComplete: 'new-password',
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          error={!!formErrors.password}
          helperText={formErrors.password}
          label="Пароль"
          onChange={(e) => onHandleChange(e.currentTarget.value, 'password')}
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          variant="outlined"
        />
        <TextField
          InputProps={{
            autoComplete: 'new-password',
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
          label="Подтвердите пароль"
          onChange={(e) =>
            onHandleChange(e.currentTarget.value, 'confirmPassword')
          }
          type={showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          variant="outlined"
        />
      </Box>
      <Box>
        <Button onClick={onHandleSubmit}>Зарегистрировать</Button>
      </Box>
    </Box>
  )
}

export default RegistrationForm
