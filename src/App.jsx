/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/Search/SearchInput";
import Products from "./components/products/Products";
import Footer from "./components/Footer/Footer";
import PopupSearch from "./components/PopupSearch/PopupSearch";
import { useSelector } from "react-redux";
function App() {
  const { show } = useSelector((store) => store.popupSlice);
  return (
    <div className="App">
        {show ? <PopupSearch/> : null}
      <Navbar />
   
      <Container fluid className={`custom-container   pt-5`}>
        <div className="pt-4">
          <Nav.Link href="#" className="text-start text-muted ">
            {" "}
            <i className={`bi bi-chevron-left backIcon`}></i> Back to Product
            Browser
          </Nav.Link>
          
        </div>
        <div className="pt-5 ">
      
          <h1 className="">Browse Products by Category</h1>
        </div>
        <div className="sepratedRow my-4"></div>

        <SearchInput />
        <Products/>




      </Container>
        <Footer/>
    </div>
  );
}

export default App;
