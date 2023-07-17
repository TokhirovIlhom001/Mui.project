import { useState } from 'react'
import Header from './components/Header/Header'
import { NavMenu } from './components/NavMenu/NavMenu'
import { Footer } from './components/Footer/Footer'
import { Cards } from './components/Cards/Cards'
import { Posts } from './components/Posts/Post'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Header/>
      <NavMenu/>
      <Footer/>
      <Cards/> 
      <Posts/>
    </div>
    
  )
}

export default App
