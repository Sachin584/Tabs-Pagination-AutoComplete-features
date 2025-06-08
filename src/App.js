import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Pagination from './pagination/Pagination';
import Tabs from './tabs/Tabs';

// Header Component
const Header = () => (
  <header>
    <h1>My React App</h1>
    <nav>
      <Link to="/tabs">Tabs</Link>
      <Link to="/pagination">Pagination</Link>
    </nav>
  </header>
);

// Footer Component
const Footer = () => (
  <footer>
    <p>&copy; 2025 My App. All rights reserved.</p>
  </footer>
);

// App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="*" element={<div>Select a page from the menu.</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
