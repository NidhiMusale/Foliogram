import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Foliogram</div>
        <div className="social">Made with ♥</div>
      </div>
    </footer>
  );
}
