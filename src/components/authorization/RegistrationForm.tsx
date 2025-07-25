import { Box, Button, TextField } from '@mui/material'

const RegistrationForm = () => {
  return (
    <Box>
      <Box>
        <TextField label="Имя" variant="outlined" />
        <TextField label="Фамилия" variant="outlined" />
        <TextField label="Почта" variant="outlined" />
        <TextField label="● ● ● ● ● ● ● ●" variant="outlined" />
        <TextField label="● ● ● ● ● ● ● ●" variant="outlined" />
      </Box>
      <Box>
        <Button>Зарегистрировать</Button>
      </Box>
    </Box>
  )
}

export default RegistrationForm
