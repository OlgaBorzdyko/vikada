import { Box, TextField } from '@mui/material'

const SearchField = ({
  value,
  onValueChange
}: {
  value: string
  onValueChange: (value: string) => void
}) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '400px', md: '300px' },
        px: { xs: 2, sm: 0 }
      }}
    >
      <TextField
        fullWidth
        onChange={(e) => onValueChange(e.target.value)}
        sx={{
          backgroundColor: 'white',
          borderRadius: 1
        }}
        value={value}
      />
    </Box>
  )
}

export default SearchField
