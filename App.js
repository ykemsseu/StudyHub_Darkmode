import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar'; // update path if different

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      {/* Add your other components below */}
    </ThemeProvider>
  );
}

export default App;
