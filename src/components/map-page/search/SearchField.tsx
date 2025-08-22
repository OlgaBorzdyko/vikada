import { Box, List, ListItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { useGetTags } from './useGetTags'
import { useTagSearch } from './useTagSearch'

const SearchField = () => {
  const [value, setValue] = useState('')
  const filteredPoints = useTagSearch(value)
  const test = useGetTags()
  console.log('test', test)
  return (
    <Box>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundColor: 'white' }}
        value={value}
      />
      {value && (
        <List>
          {filteredPoints.length > 2 ? (
            filteredPoints.map((point) => (
              <ListItem key={point.id}>
                <Typography>{point.title}</Typography>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <Typography color="text.secondary">
                Совпадений не найдено
              </Typography>
            </ListItem>
          )}
        </List>
      )}
    </Box>
  )
}

export default SearchField
