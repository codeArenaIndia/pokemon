import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from  './pages/list';
const Details = lazy(() => import('./pages/details'));

const App=()=> {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/list" element={<List />}/>
            <Route path="/" element={<List />}/>
            <Route path="details"  element={<Details />} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
