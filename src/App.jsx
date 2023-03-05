import { BrowserRouter, Routes, Route } from 'react-router-dom'


import GlobalStyles from './global/GlobalStyles'
import QuickStart from './pages/QuickStart'
import  SelectedKnowledge  from './pages/SelectedKnowledge'
import Results from "./pages/Results"
import Home from './pages/Home'
import { CategorySelectedProvider } from './contexts/CategorySelectedContext'


function App() {
  return (
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<QuickStart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/select-knowledge" element={<SelectedKnowledge />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
