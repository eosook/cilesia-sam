import './App.scss'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import FAQ from './pages/FAQ/FAQ'
import Book from './pages/Book/Book';
import Contact from './pages/Contact/Contact';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import Care from './pages/Care/Care';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageEvent = {
      event: "pageview",
      page: location.pathname + location.search,
    };
    TagManager.dataLayer({ dataLayer: pageEvent });
  }, [location]);

  return (
    <>
      <BrowserRouter>
        <trackPageView />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/policy" element={<PolicyPage />}></Route>
          <Route path="/care" element={<Care />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
