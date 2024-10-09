import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Navbar from './Components/Header/Navbar';
import StudentPage from './Components/Student/StudentPage';
import Mentor from './Components/Mentor/Mentor';
import JuryPage from './Components/Jury/JuryPage';
import Team from './Components/Team/Team';


function App() {
  return (
    <div className="App">
     <Router basename='codefiesta'>
      <Navbar/>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/student' element={<StudentPage/>}/>
         <Route path='/mentor' element={<Mentor/>}/>
         <Route path='/jury' element={<JuryPage/>}/>
         <Route path='/team/:mentorId/:teamName' element={<Team/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
