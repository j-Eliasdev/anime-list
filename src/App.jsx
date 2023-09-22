import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import DetailsPage from './pages/details'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/anime' element={<DetailsPage/>} />
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </>
  )
}

export default App
