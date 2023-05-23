import './../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './createLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Textdavinci003 from './text-davinci-003';
import Imgdavinci003 from './img-davinci-003';



function App() {
  return (
<div >
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path='/davinchi' element={<Textdavinci003/>}/>
          <Route path='/crearImg' element={<Imgdavinci003/>}/>
        </Routes>

      </div>

      <Footer />
    </div>
  );
}

export default App;
