import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Card from './components/Card'
import Main from './components/Main'
import Footer from './components/Footer'
import Side from './components/Side'
import Info from './components/Info'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Card></Card>
      <Main></Main>
      <Cards></Cards>
      <Info></Info>
      <Side></Side>
      <Footer></Footer>

    </>
  )
}

export default App
