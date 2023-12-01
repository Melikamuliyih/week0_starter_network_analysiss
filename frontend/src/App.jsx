import './App.css'
import Analytics from './pages/Analytics';
import Home from './pages/Home'
import { Route, Routes, useLocation} from 'react-router-dom';

function App() {
  return (
   <>
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/any' element={<Analytics />} />
          </Routes>
      </div>
   </>
  )
}

export default App
