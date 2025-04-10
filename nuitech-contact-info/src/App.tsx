import React from 'react';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>NuiTech Contact Information</h1>
      <ContactInfo 
        location="123 Tech Lane, Silicon Valley, CA"
        email="contact@nuitech.com"
        phone="(123) 456-7890"
      />
      <Footer />
    </div>
  );
}

export default App;