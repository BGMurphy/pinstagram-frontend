import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from './components/NavBar'
import PinMasonry from './components/PinMasonry'
import PinDetails from './components/PinDetails'

function App() {

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

const fakeData = 
[
  {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
  },
  {
    "title": "Surfing",
    "author": "Hit the waves!",
    "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
    "height": 689,
    "width": 1005
  },
  {
    "title": "Pass the Buck",
    "author": "Laurence Juber",
    "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
    "height": 500,
    "width": 500
  },
  {
    "title": "Dogs are Great",
    "author": "Woof woof",
    "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
    "height": 667,
    "width": 500
  },
  {
    "title": "Baby Yoda",
    "author": "He baby",
    "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
    "height": 462,
    "width": 780
  },
  {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
  },
  {
    "title": "Surfing",
    "author": "Hit the waves!",
    "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
    "height": 689,
    "width": 1005
  },
  {
    "title": "Pass the Buck",
    "author": "Laurence Juber",
    "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
    "height": 500,
    "width": 500
  },
  {
    "title": "Dogs are Great",
    "author": "Woof woof",
    "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
    "height": 667,
    "width": 500
  },
  {
    "title": "Baby Yoda",
    "author": "He baby",
    "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
    "height": 462,
    "width": 780
  },
  {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
  },
  {
    "title": "Surfing",
    "author": "Hit the waves!",
    "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
    "height": 689,
    "width": 1005
  },
  {
    "title": "Pass the Buck",
    "author": "Laurence Juber",
    "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
    "height": 500,
    "width": 500
  },
  {
    "title": "Dogs are Great",
    "author": "Woof woof",
    "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
    "height": 667,
    "width": 500
  },
  {
    "title": "Baby Yoda",
    "author": "He baby",
    "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
    "height": 462,
    "width": 780
  }
]


const [currentPin, setCurrentPin] = useState("");
const [pins, setPins] = useState([])
const [loading, setLoading] = useState(false)
const [search, setSearch] = useState("")

useEffect(() => {
  setLoading(true)
  fetchData(search.value)
  .then(pins => {
    setPins(pins)
    setLoading(false)
  })
}, [search])

const showDetails = () => {
	console.log(currentPin)
	if(currentPin === "") {
		return null;
	} else {
		return <PinDetails data={{...currentPin, liked: false}} onDismiss={handleClose}/>
	}
}

const loadingMasonry = () => {
	if(loading === true) {
		return <div style={{textAlign: "center", padding: "100"}}> 
			<text style={{ fontSize: "40px"}}>LOADING</text>
		</div>;
	} else {
		return <PinMasonry pins={pins}/>
	}
}

const handleClose = () => {
	setCurrentPin("")
}

const fetchData = (search) => {
	console.log("AAAAAAAAAAAAA")
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const pins = fakeData.map(pin => {
        return {
          ...pin,
          open() {
            console.log(pin)
            setCurrentPin(pin)
          }
        }
      }).filter(pin => {
        if (!search) {
        	console.log("AAAAAAAAAAAAAAAAAAAAA")
          return true
        }
        console.log(pin)
        console.log(pin.title.toLowerCase())
        console.log(search.toLowerCase())
        console.log(pin.author.toLowerCase())
        console.log(pin.title.toLowerCase().includes(search))
        return pin.title.toLowerCase().includes(search.toLowerCase()) || pin.author.toLowerCase().includes(search.toLowerCase())
      })
      resolve(pins)
    }, 2000) // two seconds to simulate network request
  })
}

  return (
    <div>
    <NavBar info={loggedInInfo} onChange={setSearch}/>
    {loadingMasonry()}
    {showDetails()}
    </div>
  );
}

export default App;

