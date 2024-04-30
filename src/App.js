import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pets from "./Component/Pets";
import { Provider } from 'react-redux';
import petStore from './Redux/Store';


function App() {
  return (
    <Provider store={petStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>Welcome to Pets Web</h2>}></Route>
          <Route path="/pets/list" element={<Pets/>}></Route>
          <Route path="/pets/create" element={<h2>Pets Create</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
