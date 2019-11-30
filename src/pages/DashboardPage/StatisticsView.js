import React from "react";
import { Button } from "antd";

const StatisticsView = props => {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div style={{ marginTop: 120, textAlign: "center" }}>
      <h2>Statistics View</h2>
      <h3>{`props.loggedInUser.name --> ${props.loggedInUser.name}`}</h3>
      <Button onClick={goBack}>Go back</Button>
    </div>
  );
};

export default StatisticsView;
