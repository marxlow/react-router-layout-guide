import React from "react";
import { Row } from "antd";

const PublicLayout = props => {
  return (
    <div className="public-container">
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ paddingTop: 240 }}
        >
          {props.children}
        </Row>
      </div>
    </div>
  );
};

export default PublicLayout;
