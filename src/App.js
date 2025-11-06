import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero-inner">
            <h1>Foliogram</h1>
            <p>A clean, modern portfolio for creators — built with React.</p>
            <a className="cta" href="#work">View Work</a>
          </div>
        </section>

        <section id="work" className="work">
          <h2>Selected Projects</h2>
          <div className="cards">
            <article className="card">
              <h3>Project One</h3>
              <p>Short description of project one.</p>
            </article>
            <article className="card">
              <h3>Project Two</h3>
              <p>Short description of project two.</p>
            </article>
            <article className="card">
              <h3>Project Three</h3>
              <p>Short description of project three.</p>
            </article>
          </div>
        </section>

        <section className="about">
          <h2>About</h2>
          <p>This starter React project includes your original uploaded files in <code>src/legacy_assets/</code>. Replace the placeholder cards with your real content or import HTML from the legacy folder as needed.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
