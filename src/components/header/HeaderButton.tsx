import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderButton = ({ label, to }: { label: string; to: string }) => {
  return (
    <Box component={Link} to={to}>
      <Button>{label}</Button>
    </Box>
  )
}
export default HeaderButton
