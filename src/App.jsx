import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './global/GlobalStyles'
import QuickStart from './pages/QuickStart'
import { SelectedKnowledge } from './pages/SelectedKnowledge'
import Results from "./pages/Results"

function App() {

  return (
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<QuickStart />} />
          <Route path="/select-knowledge" element={<SelectedKnowledge />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
