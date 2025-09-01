import { Box } from '@mui/material'
import { useState } from 'react'

import SearchField from './SearchField'
import SearchList from './SearchList'

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box>
      <SearchField onValueChange={setSearchValue} value={searchValue} />
      <SearchList inputValue={searchValue} />
    </Box>
  )
}
export default SearchComponent
