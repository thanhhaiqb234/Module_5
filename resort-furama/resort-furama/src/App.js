import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Service from "./component/ServiceManager";
import ServiceCreate from "./component/ServiceCreate";
import ServiceEdit from "./component/ServiceEdit";
import ContractManager from "./component/ContractManager";
import ContractCreate from "./component/ContractCreate";
import CustomerManager from "./component/CustomerManager";
import CustomerCreate from "./component/CustomerCreate";
import CustomerEdit from "./component/CustomerEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

function App() {
  return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Service />}/>
          <Route path="/service/edit/:id" element={<ServiceEdit />} />
          <Route path="service/create" element={<ServiceCreate />} />
          <Route path="customer/list" element={<CustomerManager />} />
          <Route path="customer/create" element={<CustomerCreate />} />
          <Route path="customer/edit/:id" element={<CustomerEdit />} />
          <Route path="contract/list" element={<ContractManager />} />
          <Route path="contract/create" element={<ContractCreate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
