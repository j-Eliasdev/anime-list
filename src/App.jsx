import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import DetailsPage from './pages/details'
import PopularPage from './pages/popularAnime'
import UpcomingPage from './pages/upcoming'
import AiringPage from './pages/airing'
import CharactersPage from './pages/characters'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/anime/:id' element={<DetailsPage/>} />
        <Route path='/popular' element={<PopularPage/>}/>
        <Route path='/upcoming' element={<UpcomingPage/>}/>
        <Route path='/airing' element={<AiringPage/>} />
        <Route path='/characters/:id' element={<CharactersPage/>}/>
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </>
  )
}

export default App
