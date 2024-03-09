import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import DesignPage from './pages/DesignPage'
import Favorites from './components/Favorites'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/tutorial' element={<DesignPage/>}/>
        <Route path='/favorite' element={<Favorites/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
