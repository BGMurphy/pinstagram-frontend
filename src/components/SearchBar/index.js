import React, {useState, useEffect} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Text, Modal, Image, IconButton, Touchable, Button, SearchField } from "gestalt"

const useDebounce = (cb, value, delay) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            cb(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])
}

function SearchBar(props) {

  const [value, setValue] = useState(" ");


  useDebounce(() => {
    props.onChange(value)
  }, value, 500)

    return (
      <Box>
      	<SearchField 
      		accessibilityLabel="Search Bar"
      		id="searchField"
      		onChange={({ value }) => props.onChange({ value })}
  			placeholder="Search and explore"
      	/>
      </Box>
    )
}

export default SearchBar