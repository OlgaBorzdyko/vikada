import { Box, Link, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

import RegistrationForm from '../registration/RegistrationForm'
import AuthForm from './AuthForm'
import ImagesList from './ImagesList'

const AuthorizationPage = () => {
  const theme = useTheme()
  const [isRegister, setIsRegister] = useState(false) // false = AuthForm, true = RegistrationForm

  return (
    <Box
      sx={{
        background: `linear-gradient(to left, white 50%, ${theme.palette.primary.main} 50%)`,
        height: '100vh'
      }}
    >
      <Box
        sx={{
          height: '100%',
          py: (theme) => theme.fn.clampVW(146, 36, 146)
        }}
      >
        <Box
          alignItems="center"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          {/* Left block */}
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            sx={{
              px: (theme) => theme.fn.clampVW(72, 18, 72)
            }}
            width="50%"
          >
            <Box
              sx={{
                py: (theme) => theme.fn.clampVW(40, 18, 72),
                display: 'flex',
                flexDirection: 'column',
                gap: (theme) => theme.fn.clampVW(12, 12, 20)
              }}
            >
              <Typography color="background.default" variant="h5">
                Добро пожаловать в Vikada
              </Typography>
              <Typography color="background.default" variant="h6">
                Ваш билет в мир увлечений и новых знакомств — откройте яркие
                моменты вместе с нами!
              </Typography>
            </Box>
            <Box>
              <ImagesList />
            </Box>
          </Box>

          {/* Right block */}
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            width="50%"
          >
            {/* Форма авторизации или регистрации */}
            {isRegister ? <RegistrationForm /> : <AuthForm />}

            {/* Подпись для переключения форм */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              {isRegister ? (
                <>
                  <Typography>Уже есть аккаунт?</Typography>
                  <Link
                    component="button"
                    onClick={() => setIsRegister(false)}
                    underline="hover"
                  >
                    Войти
                  </Link>
                </>
              ) : (
                <>
                  <Typography>Нет аккаунта в Vikada?</Typography>
                  <Link
                    component="button"
                    onClick={() => setIsRegister(true)}
                    underline="hover"
                  >
                    Зарегистрироваться
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthorizationPage
