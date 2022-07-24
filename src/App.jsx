import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import AboveFooter from './components/AboveFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full w-full">
      <NavBar/>
      <MainPage/>
      <AboveFooter/>
      <Footer/>
     </div>
  )
}

export default App
