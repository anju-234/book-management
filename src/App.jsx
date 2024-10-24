
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' elememt={<Home/>}></Route>
        <Route path='/add' elememt={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
