import { Box, Button, TextField } from '@mui/material'
import { FC, useState } from 'react'

interface RegistrationFormData {
  name: string
  lastName: string
  email: string
  password: string
}

const RegistrationForm: FC<RegistrationFormData> = () => {
  const [userFormData, setUserFormData] = useState<Partial<FormData>>({})

  const initialFormState = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  }

  const formData = {
    ...initialFormState,
    ...userFormData
  }
  const onHandleChange = (value: string, key: string) => {
    setUserFormData({ ...formData, [key]: value })
  }

  const onHandleSubmit = () => {
    console.log(userFormData)
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
          key="password"
          label="● ● ● ● ● ● ● ●"
          onChange={(e) => onHandleChange(e.currentTarget.value, 'password')}
          value={formData.password}
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
