import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContatoPage from './pages/ContatoPage/ContatoPage';
import ServicesPage from './pages/ServicesPage/servicesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import logo from './favicon.ico';
import logoInstagram from './Img/instagram.png'
import logoWhatsapp from './Img/whatsapp.png'
import Footer from './components/footer/Footer';
import FloatWhatsapp from './components/Float/whatsapp/FloatWhatsapp';
import Service from './pages/ServicesPage/service';

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo}/>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/services/domiciliar' element={<Service page='1'/> }/>
        <Route path='/services/hospitalar' element={<Service page='2'/> }/>
        <Route path='/services/empresarial' element={<Service page='3'/> }/>
        <Route path='/services/acompanhamento' element={<Service page='4'/> }/>
        <Route path='/services/procedimentos' element={<Service page='5'/> }/>
        <Route path='/services/curativos' element={<Service page='6'/> }/>
        <Route path='/services/outros' element={<Service page='7'/> }/>

        <Route path='/contato' element={<ContatoPage />} />
        <Route path='/sitemap.xml' element={<sitemap />} />
        <Route path='/sitemap' element={<sitemap />} />
        <Route path='/robots.txt' element={<robots />} />
      </Routes>
      
      <Footer logo={logoInstagram}/>
      <FloatWhatsapp logo={logoWhatsapp}/>
    </BrowserRouter>
  );
}

export default App;