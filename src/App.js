import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Principal from './Components/Principal'
import Grandcanyon from './Components/Grandcanyon'
import Escocia from './Components/Escocia'
import Muralha from './Components/Muralha'
import Aruba from './Components/Aruba'

function App() {
  return (
    <Router className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/Grandcanyon' element={<Grandcanyon/>} />
        <Route path='/Escocia' element={<Escocia/>} />
        <Route path='/Muralha' element={<Muralha/>} />
        <Route path='/Aruba' element={<Aruba/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
