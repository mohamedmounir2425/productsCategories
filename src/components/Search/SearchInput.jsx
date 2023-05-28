import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Offcanvas, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SearchInput.module.css";
import { useDispatch } from "react-redux";
import { search } from "../../Store/Slices/productSlice";
import { handleShow } from "../../Store/Slices/offCanvas";

export default function SearchInput() {


  const dispatch = useDispatch();


  const handleSearch = (e) => {
    dispatch(search({query:e.target.value}))
  }

  return (
    <>
      <Row className="my-5">
        <Col xs={10} lg={7} className={`p-sm-2  position-relative  `}>
          

        <div  className={`${styles.iconList} d-sm-block d-md-none`} onClick={() => {
          dispatch(handleShow(true))
        }}>
        <i class="bi bi-list-task"></i>
      </div>
          <div className={`${styles.searchContainer} ms-sm-5 ms-md-0`}>

          <FormControl
            onChange={handleSearch}
            placeholder="Search Products"
            className={`${styles.inputSearch} rounded-pill search `}
            />
          <i className={`${styles.searchIcon} bi bi-search text-muted  `}></i>
            </div>
           
        </Col>
      </Row>
      
    </>
  );
}
