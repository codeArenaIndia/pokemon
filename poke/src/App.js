import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from  './pages/list';
import Details from  './pages/details'

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />}/>
        <Route path="/" element={<List />}/>
        <Route path="details"  element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
