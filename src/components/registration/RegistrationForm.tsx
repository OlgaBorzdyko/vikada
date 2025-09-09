import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'

import LogoComponent from '../LogoComponent'
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
  const [isOpen, setIsOpen] = useState(false)

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

  const onInputChange = () => {
    setIsOpen(true)
  }

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={3}
      maxWidth={360}
      mx="auto"
      onSubmit={handleSubmit(onHandleSubmit)}
      width="100%"
    >
      <Link
        component={RouterLink}
        sx={{ display: 'inline-flex', justifyContent: 'center', mb: 2 }}
        to="/"
        underline="none"
      >
        <LogoComponent />
      </Link>

      <Typography align="left" gutterBottom variant="h6">
        Регистрация
      </Typography>

      <Box display="flex" gap={4}>
        <Box display="flex" flex={1} flexDirection="column" gap={2}>
          <TextField
            error={!!errors.name}
            label="Имя"
            {...register('name')}
            fullWidth
            helperText={errors.name?.message}
            variant="outlined"
          />

          <TextField
            error={!!errors.lastName}
            {...register('lastName')}
            fullWidth
            helperText={errors.lastName?.message}
            label="Фамилия"
            variant="outlined"
          />

          <TextField
            error={!!errors.email}
            {...register('email')}
            fullWidth
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
            // helperText={errors.password?.message}
            onClick={onInputChange}
            {...register('password')}
            fullWidth
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
            // helperText={errors.confirmPassword?.message}
            label="Подтвердите пароль"
            {...register('confirmPassword')}
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
          />

          <Button fullWidth size="large" type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </Box>

        {isOpen && (
          <Box minWidth={260}>
            <PasswordChecking
              errors={errors.password?.message ? [errors.password.message] : []}
              value={passwordValue}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default RegistrationForm
