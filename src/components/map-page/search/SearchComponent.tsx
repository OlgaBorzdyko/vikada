import { Box } from '@mui/material'
import { useState } from 'react'

import SearchField from './SearchField'
import SearchList from './SearchList'

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      sx={{
        width: { xs: '100vw', sm: '400px', md: '300px' },
        px: { xs: 2, sm: 0 }
      }}
    >
      <SearchField onValueChange={setSearchValue} value={searchValue} />
      <SearchList inputValue={searchValue} />
    </Box>
  )
}

export default SearchComponent
