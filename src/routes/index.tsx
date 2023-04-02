import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../components/Main';
import About from '../components/About';
import AddCard from '../components/AddCard';
import NoMatch from '../components/NoMatch';

const routes = (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="about" element={<About />} />
    <Route path="create" element={<AddCard />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default routes;
