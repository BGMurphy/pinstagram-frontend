import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import Pin from '../Pin'
import { Box, Text, Modal, Image, IconButton, Touchable, Button, Masonry } from "gestalt"

function PinMasonry(props) {
  console.log(props.pins)

  return (
    <Masonry
    comp={Pin}
    items={props.pins}
    />
  )
}

export default PinMasonry