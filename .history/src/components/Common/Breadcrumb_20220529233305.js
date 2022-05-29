import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, BreadcrumbItem } from "reactstrap";

const Breadcrumb = (props) => {
  return (
    <Row className="breadcrum-container">
      <Col className="col-12">
        <div className="page-title-box d-flex align-items-start align-items-center justify-content-between">
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem active>
                <Link to="/tutor-dashboard">{props.breadcrumbItem}</Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to="#">{props.title}</Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
};

export default Breadcrumb;
