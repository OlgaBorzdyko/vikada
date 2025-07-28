import * as yup from 'yup'
import yupPassword from 'yup-password'

import { passwordRules } from './PasswordRules'

yupPassword(yup)

const passwordSchema = passwordRules.reduce(
  (schema, rule) => rule.yup(schema),
  yup.string().required('Обязательное поле')
)

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Неверный email').required('Обязательное поле'),
  name: yup.string().required('Введите имя'),
  lastName: yup.string().required('Введите фамилию'),
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Повторите пароль')
})
