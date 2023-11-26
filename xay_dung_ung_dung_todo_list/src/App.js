import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoApp from "./components/TodoApp";
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>

                <Route path="/tasks"  element={<ToDoApp/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
