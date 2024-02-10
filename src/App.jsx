import './App.css'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<MainPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
