import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Layout from './components/layouts/Layout';
import Home from './components/pages/Home';
import LearnHooks from './components/moduls/LearnHooks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/LearnHooks" element={<LearnHooks />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </>
        );
};

        export default App;
