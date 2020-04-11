import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Text, Modal, Image, IconButton, Touchable, Button } from "gestalt"

function Pin(props) {

  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const like = () => {
    console.log(liked)
    if(liked){
      setLiked(false);
    }
    else {
      setLiked(true);
    }
  }

  return (
    <Box
    maxWidth={250}
    >
      <Touchable
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
        <Box position="relative">
          <Image
            src={props.data.image}
            naturalHeight={props.data.height}
            naturalWidth={props.data.width}
            iconColor={ liked ? "red" : "gray"}
            alt="Image"
          />
          <Box
            opacity={show ? 1 : 0}>
            <Box 
              position="absolute"
              padding={2}
              bottom
              left>
              <Button text="Open" onClick={props.data.open}/>
            </Box>
            <Box
              position="absolute"
              padding={2}
              bottom
              right
              >
              <IconButton
                accessibilityLabel="Love"
                bgColor="white"
                icon="heart"
                iconColor={ liked ? "red" : "gray"}
                onClick={() => like()}
              />
            </Box>
          </Box>
        </Box>

          <Text
          weight="bold"
          size="lg">
            {props.data.title}
          </Text>
          <Text>
            {props.data.author}
          </Text>
      </Touchable>
    </Box>

  )
}

export default Pin