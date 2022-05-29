import alfabetArr from './alfabet.json'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import StartField from './Components/StartField';
import GameField from './Components/GameField';
import ResultField from './Components/ResultField';
import ResultFieldWin from './Components/ResultFieldWin';

function App() {
  const alfabet = alfabetArr;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartField  />} />
          <Route path="/game" element={<GameField data={alfabet}/>} />
          <Route path="/lose" element={<ResultField />} />
          <Route path="/win" element={<ResultFieldWin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
