import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/signup';
import Lerror from './components/error';
import Match from './components/notmatch';
import HomeP from './components/homepage'
import Quiz from './components/questions'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Home/>}></Route>
      <Route path='/error' element={<Lerror/>}></Route>
      <Route path='/notmatch' element={<Match/>}></Route>
      <Route path='/homepage' element={<HomeP/>}></Route>
      <Route path='/questions' element={<Quiz/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
