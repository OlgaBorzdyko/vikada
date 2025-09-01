import { Box, Chip, Divider, List, ListItem, Typography } from '@mui/material'

import { useTagSearch } from './useTagSearch'

interface SearchListProps {
  inputValue: string
}

const SearchList = ({ inputValue }: SearchListProps) => {
  const { pointsWithNameMatch = [], pointsWithTagMatch = [] } =
    useTagSearch(inputValue)

  return (
    <Box bgcolor="white" height="100%" width="100%">
      {pointsWithNameMatch.length > 0 && (
        <>
          <Typography
            color="text.secondary"
            sx={{ px: 2, pt: 1 }}
            variant="subtitle2"
          >
            Поиск по названию
          </Typography>
          <List>
            {pointsWithNameMatch.map((point) => (
              <ListItem key={point.id}>
                <Typography>{point.name}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider />
        </>
      )}

      {pointsWithTagMatch.length > 0 && (
        <>
          <Typography
            color="text.secondary"
            sx={{ px: 2, pt: 1 }}
            variant="subtitle2"
          >
            Поиск по тегу
          </Typography>
          <List>
            {pointsWithTagMatch.map((point) => {
              const matchingTags =
                point.tags?.filter((tag) =>
                  tag.name?.toLowerCase().includes(inputValue.toLowerCase())
                ) || []

              return (
                <ListItem
                  key={point.id}
                  sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <Typography>{point.name}</Typography>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}
                  >
                    {matchingTags.map((tag, index) => (
                      <Chip
                        color="primary"
                        key={index}
                        label={`#${tag.name}`}
                        size="small"
                        variant="filled"
                      />
                    ))}
                  </Box>
                </ListItem>
              )
            })}
          </List>
        </>
      )}

      {inputValue &&
        pointsWithNameMatch.length === 0 &&
        pointsWithTagMatch.length === 0 && (
          <Typography color="text.secondary" sx={{ px: 2, py: 2 }}>
            Совпадений не найдено
          </Typography>
        )}
    </Box>
  )
}

export default SearchList
