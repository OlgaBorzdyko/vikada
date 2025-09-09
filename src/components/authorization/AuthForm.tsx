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

type AuthFormValues = {
  password: string
  email: string
}

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthFormValues>()

  const onSubmit = (data: AuthFormValues) => {
    console.log('Данные формы:', data)
  }

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={360}
      mx="auto"
      onSubmit={handleSubmit(onSubmit)}
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

      <Typography align="left" component="h1" variant="h6">
        Вход
      </Typography>
      <TextField
        error={!!errors.email}
        {...register('email')}
        fullWidth
        helperText={errors.email?.message}
        label="Почта"
        variant="outlined"
      />

      <TextField
        error={!!errors.password}
        fullWidth
        helperText={errors.password?.message}
        label="Пароль"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        {...register('password', {
          required: 'Введите пароль',
          minLength: { value: 6, message: 'Минимум 6 символов' }
        })}
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
      />

      <Box textAlign="right">
        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
          variant="body2"
        >
          Забыли пароль?
        </Link>
      </Box>

      <Button fullWidth size="large" type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  )
}

export default AuthForm
