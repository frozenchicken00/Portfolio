import { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {/* Add padding to prevent content from going under the fixed header */}
        <div className="pt-16">
          <Main darkMode={darkMode} />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
