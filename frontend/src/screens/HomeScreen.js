import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

export const HomeScreen = () => {
  return (
    <>
      <h1 className="my-5">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
