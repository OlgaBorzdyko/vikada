import { Button } from '@mui/material'

const ProfileButton = () => {
  return (
    <Button
      sx={(theme) => ({
        ...theme.typography.h1,
        color: theme.palette.text.primary,
        borderRadius: '12px',
        backgroundColor: 'transparent',
        border: '1px solid #E1E1E1',
        textTransform: 'none',
        boxShadow: 'none',
        padding: '8px 12px',
        gap: 1,
        '&:hover': {
          backgroundColor: '#f5f5f5',
          boxShadow: 'none'
        }
      })}
    >
      <img
        alt="user icon"
        src="src/assets/icons/Avatar.png"
        style={{
          borderRadius: 50,
          width: '24px',
          height: '24px'
        }}
      />
      Екатерина
    </Button>
  )
}

export default ProfileButton
