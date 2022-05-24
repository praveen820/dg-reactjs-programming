import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const List = ({ moviesList }) => {
  console.log("moviesList ", moviesList);
  const [data, setData] = useState(moviesList);
  useEffect(() => {
    if (moviesList.length > 0) {
      setData(moviesList);
    }
  }, [moviesList]);
  return (
    <Container>
      <div className="main-body">
        <Row className="gx-0">
          {data.length > 0 ? (
            data.map((obj) => (
              <Col xs={4} sm={4} md={4} lg={4}>
                <div className="listContent">
                  <div className="contentImg">
                    <img src={`images/${obj["poster-image"]}`} alt="Error" />
                  </div>
                  <div className="item-name">{obj.name}</div>
                </div>
              </Col>
            ))
          ) : (
            <> No data Found</>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default List;
