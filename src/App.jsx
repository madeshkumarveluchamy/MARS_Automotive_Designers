import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES IMPORT
import Home from './pages/Home';
import RetailingPage from './pages/RetailingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Gallery from './pages/Gallery';
import ScrollToTop from './pages/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import ServiceDetail1 from './pages/ServiceDetail1';
import ServiceDetail2 from './pages/ServiceDetail2';
import ServiceDetail3 from './pages/ServiceDetail3';
import ServiceDetail4 from './pages/ServiceDetail4';
import Terms from './pages/Terms'; 
import Location from './pages/Location';

function App() {
  const location = useLocation();

  return (
    <div className="App">
        {/* ScrollToTop - பக்கம் மாறும்போது மேலிருந்து தொடங்க உதவும் */}
        <ScrollToTop /> 
        
        {/* onExitComplete சேர்ப்பதுதான் மிக முக்கியம் - இது அனிமேஷன் முடிந்ததும் ஸ்க்ரோலை உறுதி செய்யும் */}
        <AnimatePresence 
          mode="wait" 
          onExitComplete={() => {
            // Puthu page render aaga oru chinna gap kuduthu scroll pandrom
            setTimeout(() => {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              
              // CSS lock iruntha ithu save pannum
              const appContainer = document.querySelector(".App");
              if (appContainer) {
                appContainer.scrollTop = 0;
              }
            }, 100);
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path="/retailing" element={<RetailingPage />} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/mars-solutions' element={<Service/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<BlogDetail/>}/>
            <Route path="/gallery" element={<Gallery/>} />
            
            {/* Terms & Location Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/location" element={<Location />} />
            
            <Route path="/mars-solutions/manufacturing-excellence-hub" element={<ServiceDetail1/>} />
            <Route path="/mars-solutions/advanced-machinery-sales" element={<ServiceDetail2 />} />
            <Route path="/mars-solutions/premium-materials-enquiry" element={<ServiceDetail3 />} />
            <Route path="/mars-solutions/after-sales-support-hub" element={<ServiceDetail4 />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;