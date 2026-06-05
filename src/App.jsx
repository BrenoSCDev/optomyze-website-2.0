import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CRMPage from './pages/CRMPage';
import SolutionPage from './pages/SolutionPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PlansPage from './pages/PlansPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/solutions/crm"       element={<CRMPage />} />
        <Route path="/solutions/:slug"     element={<SolutionPage />} />
        <Route path="/blog"                element={<BlogPage />} />
        <Route path="/blog/:id"            element={<BlogPostPage />} />
        <Route path="/contact"             element={<ContactPage />} />
        <Route path="/plans"               element={<PlansPage />} />
        <Route path="*"                    element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
