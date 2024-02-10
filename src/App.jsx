import './App.css'
import CallForPaper from './components/CallForPaper'
import CommitteePage from './components/CommitteePage'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/committee' exact element={<CommitteePage />} />
          <Route path='/call-for-papers' exact element={<CallForPaper />} />
          <Route path='/register' exact element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
