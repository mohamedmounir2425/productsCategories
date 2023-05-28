/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleShowPopupSearch } from "../../Store/Slices/PopupSearch";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg border-bottom p-0 ${styles.container}`}>
        <div className={` container-fluid  `}>
          <img
            className={`${styles.logo}`}
            src="https://cdn-new.tridge.com/assets/S27EOULS.svg"
            alt=""
          />
          <button
            className="navbar-toggler ms-auto "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-white" id="collapsibleNavId">
            <ul className="navbar-nav mt-lg-0 me-auto">
              <li className="nav-item">
                <a
                  className={`nav-link text-black ${
                    isHovered ? styles.navLinkHovered : ""
                  } `}
                  href="#"
                  onMouseEnter={handleHover}
                  // onMouseLeave={handleLeave}
                >
                  Services{" "}
                  <i
                    className={`bi bi-chevron-down ${
                      isHovered ? styles.arrowDownRotated : ""
                    }`}
                  ></i>
                </a>
                {isHovered && (
                  <div className={styles.dropdownContent}>
                    <div className={`${styles.serviseContainer}` } 
                    onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                    >

                    
                    <Container className="w-75 ps-5" >
                      <Row className={` ${styles.cardRow} gx-4 `}>
                        <Col md={4}>
                        <div className={` ${styles.card}  `}>
                          <div className={`d-flex align-items-center justify-content-start `} >

                        <img width={100} height={100} src="https://cdn-new.tridge.com/assets/DHWKQNAV.png" alt="" />
                          </div>
                          <div className={`card-body  ${styles.cardContent}`}>
                            <h5 className="card-title text-start">Sourcing Hub</h5>
                            <p className="card-text text-start">
                              Grow your business by connecting with credible
                              agri-food suppliers through Exhibition 365 and
                              Sourcing Requests.
                            </p>
                          </div>
                        </div>
                        <div className={`${styles.card}`}>
                         
                        
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className={` ${styles.card}  `}>
                          <div className={`d-flex align-items-center justify-content-start `} >

                        <img width={100} height={100} src="https://cdn-new.tridge.com/assets/DHWKQNAV.png" alt="" />
                          </div>
                          <div className={`card-body  ${styles.cardContent}`}>
                            <h5 className="card-title text-start">Sourcing Hub</h5>
                            <p className="card-text text-start">
                              Grow your business by connecting with credible
                              agri-food suppliers through Exhibition 365 and
                              Sourcing Requests.
                            </p>
                          </div>
                        </div>
                        <div className={`${styles.card}`}>
                         
                        
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className={` ${styles.card}  `}>
                          <div className={`d-flex align-items-center justify-content-start `} >

                        <img width={100} height={100} src="https://cdn-new.tridge.com/assets/DHWKQNAV.png" alt="" />
                          </div>
                          <div className={`card-body  ${styles.cardContent}`}>
                            <h5 className="card-title text-start">Sourcing Hub</h5>
                            <p className="card-text text-start">
                              Grow your business by connecting with credible
                              agri-food suppliers through Exhibition 365 and
                              Sourcing Requests.
                            </p>
                          </div>
                        </div>
                        <div className={`${styles.card}`}>
                         
                        
                        </div>
                        </Col>
                  
                      </Row>
                    </Container>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Resources{" "}
                  <i className={`bi bi-chevron-down ${styles.downIcon} `}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Company{" "}
                  <i className={`bi bi-chevron-down `}></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-lg-0">
              <li onClick={()=> dispatch(handleShowPopupSearch(true))} className={`nav-item ${styles.searchIcon}`}>
                <a className="nav-link text-black " href="#">
                  <i className={`bi bi-search fs-5 `}></i>
                </a>
              </li>
              <li className="nav-item">
                <button className={`btn btn-dark  rounded rounded-pill`}>
                  Sign In
                </button>
              </li>
              <li className={`${styles.language} nav-item`}>
                <a
                  className="nav-link text-black "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className={`bi bi-globe2`}></i> English{" "}
                  <svg
                    viewBox="0 0 20 20"
                    className={`Polaris-Icon__Svg ${styles.svg}`}
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M7.676 9h4.648c.563 0 .879-.603.53-1.014l-2.323-2.746a.708.708 0 0 0-1.062 0l-2.324 2.746c-.347.411-.032 1.014.531 1.014Zm4.648 2h-4.648c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014Z"></path>
                  </svg>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      german
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      turkish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      frensh
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </div>
  );
};

export default Navbar;
