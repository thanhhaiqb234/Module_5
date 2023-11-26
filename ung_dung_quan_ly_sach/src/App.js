import { ToastContainer } from 'react-toastify';
import './App.css';
import { BookCreate } from './components/BookCreate';
import { BookList } from './components/BookList';
import { BookUpdate } from './components/BookUpdate';
import {Routes, Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <>
        <Routes>
          <Route path="/books" element={<BookList/>}></Route>
          <Route path="/create" element={<BookCreate/>}></Route>
          <Route path="/update/:id" element={<BookUpdate/>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </>
  );
}

export default App;