import { BrowserRouter, Routes, Route, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import GlobalStyles from './global/GlobalStyles'
import QuickStart from './pages/QuickStart'
import  SelectedKnowledge  from './pages/SelectedKnowledge'
import Results from "./pages/Results"
import Home from './pages/Home'
import Questions from './pages/Questions'
import { CategorySelectedProvider } from './contexts/CategorySelectedContext'


function App() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.action === 'POP') {
        history.push('/');
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<QuickStart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/select-knowledge" element={<SelectedKnowledge />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
