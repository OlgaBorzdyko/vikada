import * as yup from 'yup'
import yupPassword from 'yup-password'

import { passwordRules } from './PasswordRules'

yupPassword(yup)

export const passwordSchema = passwordRules.reduce(
  (schema, rule) => rule.yup(schema),
  yup.string().required('*Введите пароль')
)

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Некорректный email').required('*Введите почту'),
  name: yup.string().required('*Введите имя'),
  lastName: yup.string().required('*Введите фамилию'),
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('*Повторите пароль')
})
