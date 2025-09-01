import { Box, TextField } from '@mui/material'

const SearchField = ({
  value,
  onValueChange
}: {
  value: string
  onValueChange: (value: string) => void
}) => {
  return (
    <Box>
      <TextField
        onChange={(e) => onValueChange(e.target.value)}
        style={{ backgroundColor: 'white' }}
        value={value}
      />
    </Box>
  )
}

export default SearchField
