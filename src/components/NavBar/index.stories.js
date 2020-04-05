import React from 'react'
import NavBar from './index'
import { action } from "@storybook/addon-actions";

export default {
  title: 'NavBar',
  component: NavBar,
}

const loggedInInfo = {
  "icon": "person",
  "button1": "Liked",
  "button2": "Log Out"
}

const loggedOutInfo = {
  "icon": "star",
  "button1": "Sign Up",
  "button2": "Log In"
}

export const LoggedIn = () => (
  <NavBar info={loggedInInfo} />
)

export const LoggedOut = () => (
  <NavBar info={loggedOutInfo} />
)
