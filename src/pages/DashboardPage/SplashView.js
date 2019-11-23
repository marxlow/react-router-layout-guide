import React from "react";
import { Alert, Row, Button } from "antd";

import routes from "../../routes";

const SplashView = props => {
  const goToSettingsPage = () => {
    props.history.push(routes.settings);
  };
  const goToStatisticsPage = () => {
    props.history.push(routes.statistics);
  };
  return (
    <div>
      {/* Title of page */}
      <Row
        type="flex"
        justify="center"
        style={{ margin: "120px 0px 32px 0px" }}
      >
        <Alert
          message="Dashboard splash view"
          description="Click to go into any of the nested pages of dashboard. Notice how the layout remains the same"
          type="info"
          showIcon
        />
      </Row>

      {/* Navigation to nested routes */}
      <Row type="flex" justify="center">
        <Button style={{ marginRight: 50 }} onClick={goToSettingsPage}>
          To Settings
        </Button>
        <Button onClick={goToStatisticsPage}>To Statistics</Button>
      </Row>
    </div>
  );
};

export default SplashView;
