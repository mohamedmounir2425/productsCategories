import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          {/* <div className="footer-section"> */}
          <Row>
            <Col md={3} sm={6} xs={12}>
              <div className="footer-list">
                <p>SOURCING HUB</p>
                <ul>
                  <li>
                    <span>Introduction</span>
                  </li>
                  <li>
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Sourcing Requests</span>
                  </li>
                  <li>
                    <span>Exhibition 365 - Booths</span>
                  </li>
                  <li>
                    <span>Exhibition 365 - Events</span>
                  </li>
                  <li>
                    <span>Exhibition 365 - Overview</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={'auto'} sm={6} xs={12}>
              <div className="footer-list">
                <p>INTELLIGENCE &amp; DATA</p>
                <ul>
                  <li>
                    <span>Dashboard</span>
                  </li>
                  <li>
                    <span>News &amp; Insights</span>
                  </li>
                  <li>
                    <span>Analysis &amp; Reports</span>
                  </li>
                  <li>
                    <span>Price Data</span>
                  </li>
                  <li>
                    <span>Trade Data</span>
                  </li>
                  <li>
                    <span>Production Data</span>
                  </li>
                  <li>
                    <span>Seasonality Data</span>
                  </li>
                  <li>
                    <span>Weather Data</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={'auto'} sm={6} xs={12}>
              <div className="footer-list">
                <p>FULFILLMENT SOLUTION</p>
                <ul>
                  <li>
                    <span>Introduction</span>
                  </li>
                  <li>
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Browse</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={2} sm={6} xs={12}>
              <div className="footer-list">
                <p>RESOURCES</p>
                <ul>
                  <li>
                    <span>Global Price Trends</span>
                  </li>
                  <li>
                    <span>Webinars</span>
                  </li>
                  <li>
                    <span>White Papers</span>
                  </li>
                  <li>
                    <span>Data Coverage</span>
                  </li>
                  <li>
                    <span>Advertise with Tridge</span>
                  </li>
                  <li>
                    <span>Sourcing Requests Quota</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} sm={6} xs={12}>
              <div className="footer-list">
                <p>COMPANY</p>
                <ul>
                  <li>
                    <span>About Us</span>
                  </li>
                  <li>
                    <span>Blog</span>
                    <i class="bi bi-arrow-up-right"></i>
                  </li>
                  <li>
                    <span>Careers</span>
                    <i class="bi bi-arrow-up-right"></i>{" "}
                    <span className="badge rounded-pill">We're hiring!</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                    <i class="bi bi-arrow-up-right"></i>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* </div> */}
          <Row className="mt-5">
            <Col md={8} className="footer-links">
              <span className="me-5">© 2023 Tridge</span>
              <span className="links">Privacy</span>
              <span className="links">Terms</span>
              <span className="links">Sitemap</span>
            </Col>
            <Col md={4} className="footer-icons">
              <div className="icon-circle">
                <a href="https://www.example.com">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="icon-circle">
                <a href="https://www.youtube.com">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
              <div className="icon-circle">
                <a href="https://www.facebook.com">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div className="icon-circle">
                <a href="https://www.twitter.com">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <div className="icon-circle">
                <a href="#">
                  <span>N</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
