type ruleItem = {
  label: string
  yup: (schema: yup.StringSchema<string>) => yup.StringSchema<string>
}

export const passwordRules: ruleItem[] = [
  {
    label: 'Минимум 8 символов',
    yup: (yup) => yup.min(8, 'Минимум 8 символов')
  },
  {
    label: 'Минимум 1 заглавная буква',
    yup: (yup) => yup.minUppercase(1, 'Минимум 1 заглавная буква')
  },
  {
    label: 'Минимум 1 цифра',
    yup: (yup) => yup.minNumbers(1, 'Минимум 1 цифра')
  },
  {
    label: 'Минимум 1 спецсимвол (например, !@#$%^&*)',
    yup: (yup) => yup.minSymbols(1, 'Минимум 1 спецсимвол (например, !@#$%^&*)')
  },
  {
    label: 'Максимум 2 одинаковых символа подряд',
    yup: (yup) => yup.maxRepeating(2, 'Максимум 2 одинаковых символа подряд')
  }
]
