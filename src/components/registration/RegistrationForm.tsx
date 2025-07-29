import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import PasswordChecking from './PasswordChecking'
import { registrationSchema } from './RegistrationSchema'

interface RegistrationFormData {
  name: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    mode: 'onChange'
  })
  const passwordValue = watch('password')

  const onHandleSubmit = (data: RegistrationFormData) => {
    console.log('Успешно:', data)
  }
  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(onHandleSubmit)}>
        <TextField
          error={!!errors.name}
          label="Имя"
          {...register('name')}
          helperText={errors.name?.message}
          variant="outlined"
        />
        <TextField
          error={!!errors.lastName}
          {...register('lastName')}
          helperText={errors.lastName?.message}
          label="Фамилия"
          variant="outlined"
        />
        <TextField
          error={!!errors.email}
          {...register('email')}
          helperText={errors.email?.message}
          label="Почта"
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
          error={!!errors.password}
          {...register('password')}
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
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
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          label="Подтвердите пароль"
          {...register('confirmPassword')}
          type={showConfirmPassword ? 'text' : 'password'}
          variant="outlined"
        />
        <Box>
          <Button type="submit">Зарегистрировать</Button>
        </Box>
      </Box>
      <Box>
        <PasswordChecking
          errors={errors.password?.message ? [errors.password.message] : []}
          value={passwordValue}
        />
      </Box>
    </Box>
  )
}

export default RegistrationForm
