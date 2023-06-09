import './../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './createLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Textdavinci003 from './openAi/text-davinci-003';
import Imgdavinci003 from './openAi/img-davinci-003';
import { useTranslation } from "react-i18next";
import SelectModel from './SelectAi';
import Perfil from './perfil';
import Search from './Search';



function App() {
  const { t } = useTranslation();
  return (
<div >
      <Header />
      <div className="ph3 pv1 background-gray">
      {t("hello_welcome_to_react")}
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path='/davinchi' element={<Textdavinci003/>}/>
          <Route path='/crearImg' element={<Imgdavinci003/>}/>
          <Route path='/selectModel' element={<SelectModel/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>

      </div>

      <Footer />
    </div>
  );
}

export default App;
