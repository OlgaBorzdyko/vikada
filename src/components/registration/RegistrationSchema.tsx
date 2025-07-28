import * as yup from 'yup'
import yupPassword from 'yup-password'

yupPassword(yup)

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Неверный email').required('Обязательное поле'),
  name: yup.string().required('Введите имя'),
  lastName: yup.string().required('Введите фамилию'),
  password: yup
    .string()
    .minUppercase(1, 'Пароль должен содержать минимум одну заглавную букву')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .minNumbers(1, 'Пароль должен содержать минимум 1 цифру')
    .minSymbols(
      1,
      'Пароль должен содержать минимум 1 спецсимвол (например, !@#$%^&*)'
    )
    .maxRepeating(
      3,
      'Пароль должен содержать максимум 3 одинаковых символа подряд'
    )
    .required('Обязательное поле'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Повторите пароль')
})
