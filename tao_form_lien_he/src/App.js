import './App.css';
import StudentCreate from "./Comonnets/student/StudentCreate";
import StudentList from "./Comonnets/student/StudentList";
import { Route, Routes,BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
// import {NotFound} from "./Comonnets/NotFound";
import "react-toastify/dist/ReactToastify.css"
function App() {
    return (
        <><BrowserRouter>
            <Routes>
                <Route path="/students" element={<StudentList/>}/>
                <Route path="/create" element={<StudentCreate/>}/>
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
             <ToastContainer/>
        </BrowserRouter>
           
        </>
    );
}

export default App;
