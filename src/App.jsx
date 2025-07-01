import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import CardGrid from './pages/CardGrid.jsx'
function App() {

  return (
    <BrowserRouter>
    <div className='flex'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/cards' element={<CardGrid/>} />
      </Routes>
    </div>
    </BrowserRouter>    
  )
}

export default App
