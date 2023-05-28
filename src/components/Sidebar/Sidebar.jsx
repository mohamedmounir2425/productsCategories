/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Offcanvas } from "react-bootstrap";
import style from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Store/Slices/productSlice";
import { handleShow } from "../../Store/Slices/offCanvas";

export default function Sidebar() {
  useEffect(() => {
    dispatch(getData("pizza"));
    
  }, []);
  const { products, count } = useSelector(
    (store) => store.productSlice
  );
  const { show } = useSelector(
    (store) => store.offCanvaseSlice
  );
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  const dispatch = useDispatch();
  const keywords = [
    "pizza",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "green pepper",
    "lettuce",
    "onion",
    "mushrooms",
    "potato",
    "pumpkin",
    "tomato",
    "peas",
  ];

  const handleKeywordClick = (keyword) => {
    dispatch(getData(keyword));
    setSelectedKeyword(keyword);
  };
console.log(products)
  return (
    <>
      <Col md={3} className={`${style.bgColor} p-3 rounded d-none d-md-block `}>
       
        <ul className={`${style.keywordList }`}>
          {keywords.map((keyword, index) => (
            <li
              key={index}
              className={selectedKeyword === keyword ? style.active : ""}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword} {selectedKeyword === keyword ? `(${count})` : null}
            </li>
          ))}
        </ul>
      </Col>
      <Offcanvas show={show} onHide={()=> {
        dispatch(handleShow(false))
      }}>
        <Container className="py-4">

        <ul className={`${style.keywordList }`}>
          {keywords.map((keyword, index) => (
            <li
            key={index}
              className={selectedKeyword === keyword ? style.active : ""}
              onClick={() => handleKeywordClick(keyword)}
              >
              {keyword} {selectedKeyword === keyword ? `(${count})` : null}
            </li>
          ))}
        </ul>
          </Container>
      </Offcanvas>
    </>
  );
}
