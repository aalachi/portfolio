import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProjectDorker from './pages/projects/ProjectDorker';
import ProjectDatano from './pages/projects/ProjectDatano';
import ProjectBapz from './pages/projects/ProjectBapz';
import ProjectServauth from './pages/projects/ProjectServauth';
import ProjectCompiler from './pages/projects/ProjectCompiler';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectWebmac from './pages/projects/ProjectWebmac';
import PostAuth from './pages/posts/PostAuth';
import PostDesignPatterns from './pages/posts/PostDesignPatterns';
import PostVim from './pages/posts/PostVim';
import ProjectCalculator from './pages/projects/ProjectCalculator';
import PostDebate from './pages/posts/PostDebate';
import PostRest from './pages/posts/PostRest';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';




// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects/dorker" element={<ProjectDorker />} />
          <Route path="/projects/datano" element={<ProjectDatano />} />
          <Route path="/projects/bapz" element={<ProjectBapz />} />
          <Route path="/projects/compiler" element={<ProjectCompiler />} />
          <Route path="/projects/webmac" element={<ProjectWebmac />} />
          <Route path="/projects/calculator" element={<ProjectCalculator />} />
          <Route path="/projects/servauth" element={<ProjectServauth />} />

          <Route path="/posts/vim" element={<PostVim />} />
          <Route path="/posts/auth" element={<PostAuth />} />
          <Route path="/posts/design-patterns" element={<PostDesignPatterns />} />
          <Route path="/posts/debate" element={<PostDebate />} />
          <Route path="/posts/rest" element={<PostRest />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
