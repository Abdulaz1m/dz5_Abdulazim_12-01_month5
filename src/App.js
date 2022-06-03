import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactsPage/ContactPage';
import MainPage from './pages/mainPage/MainPage';
import NotFound from './pages/notFound/NotFound';
import Staff from './pages/staff/Staff';

function App() {
  return (
    <div className='App' >
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
