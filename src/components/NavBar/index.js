import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import SearchBar from '../SearchBar'
import { Box, Text, Modal, Image, IconButton, Touchable, Button, SearchField, Link } from "gestalt"

function NavBar(props) {
  return (
    <Box>
      <Box padding={5}
      display="flex" 
      direction="row" 
      alignItems="center">
        <IconButton accessibilityLabel="Profile" icon={props.info.icon} size="md" />
        <Box flex="grow">
          <SearchBar onChange={props.onChange}/>
        </Box>
        <Box>
          <Button 
          text="Home"
          color="white"
          size="sm" />
        </Box>
        <Box>
          <Button 
          text={props.info.button1}
          color="white"
          size="sm" />
        </Box>
        <Box>
          <Button 
          text={props.info.button2}
          color="white"
          size="sm" />
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar