import './../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './createLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';



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
        </Routes>

      </div>

      <Footer />
    </div>
  );
}

export default App;
