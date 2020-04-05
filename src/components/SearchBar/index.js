import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Text, Modal, Image, IconButton, Touchable, Button, SearchField } from "gestalt"

function SearchBar(props) {

  const [value, setValue] = useState(" ");

  const changeValue = (value) => {
	setValue(value);
  }

  return (
    <Box>
    	<SearchField 
    		accessibilityLabel="Search Bar"
    		id="searchField"
    		onChange={({ value }) => setValue({ value })}
			placeholder="Search and explore"
    	/>
    </Box>
  )
}

export default SearchBar