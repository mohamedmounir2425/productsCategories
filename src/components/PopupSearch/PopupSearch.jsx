import React from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleShowPopupSearch } from "../../Store/Slices/PopupSearch";
import style from "./PopupSearch.module.css";
export default function PopupSearch() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(handleShowPopupSearch(false));
        }}
        className={`${style["blur-container"]}  d-flex justify-content-center align-items-center`}
      >
       
          <div onClick={(e) => e.stopPropagation()} className={`${style.searchContainer} `}>
            <FormControl
              placeholder="Search Products"
              className={`${style.inputSearch} rounded-pill`}
            />
            <i className={`${style.searchIcon} bi bi-search text-muted  `}></i>
      
        </div>
      </div>
    </>
  );
}
