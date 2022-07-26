import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
