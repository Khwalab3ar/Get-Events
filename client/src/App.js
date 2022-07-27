import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Success from './pages/Success'
import Error from './pages/Error'
import UserHome from './pages/UserHome'
import OrgHome from './pages/OrgHome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/personals/:id" element={<UserHome />}></Route>
          <Route path="/organizations/:id" element={<OrgHome />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
