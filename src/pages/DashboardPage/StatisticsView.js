import React from "react";
import { Button } from "antd";

const StatisticsView = props => {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div style={{ marginTop: 120, textAlign: "center" }}>
      <h2>Statistics View</h2>
      <Button onClick={goBack}>Go back</Button>
    </div>
  );
};

export default StatisticsView;
