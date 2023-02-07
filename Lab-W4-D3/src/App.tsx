import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Post from './comp/Post '
import Effect from './comp/Effect'

function App() {

  return (
    <div className="App">
     
     <Routes>

      <Route path="/create" element={<Effect/>}></Route>
      <Route path="/" element={<Post/>}></Route>

     </Routes>
    </div>
  )
}

export default App
