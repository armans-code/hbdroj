import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import LevelOne from './pages/LevelOne';
import LevelTwo from './pages/LevelTwo';
import LevelThree from './pages/LevelThree';
import LevelFour from './pages/LevelFour';
import TheGame from './pages/TheGame';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<TheGame />} />
            <Route path="/level-one" element={<LevelOne />} />
            <Route path="/level-two" element={<LevelTwo />} />
            <Route path="/level-three" element={<LevelThree />} />
            <Route path="/level-four" element={<LevelFour />} />
        </Routes>
    );
}

export default App;
