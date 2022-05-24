import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Header = ({ searchFn }) => {
  const [searchTxt, setSearchText] = useState("");
  const search = (e) => {
    setSearchText(e.target.value);
    searchFn(e.target.value);
  };
  return (
    <div style={{ width: "100%" }}>
      <p
        style={{
          "background-image": "url('../Slices/nav_bar.png')",
        }}
      >
        <Row className="text-center row">
          <Col xs={3} sm={3} md={3} lg={3} style={{ marginTop: "18px" }}>
            <img src="../Slices/Back.png" width="30" height="30" alt="Back" />
          </Col>
          <Col style={{ color: "white" }} xs={6} sm={6} md={6} lg={6}>
            <h1 style={{ fontSize: "1.3rem", marginTop: "20px" }}>
              Romantic List
            </h1>
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            style={{ marginTop: "7px", width: "20%" }}
          >
            <input
              class="form-control py-2 mt-2"
              type="search"
              placeholder="Search"
              value={searchTxt}
              id="search-input-id"
              onChange={(e) => search(e)}
            />
          </Col>
        </Row>
      </p>
    </div>
  );
};

export default Header;
