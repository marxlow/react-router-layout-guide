import React from "react";
import { message, Row, Layout, Button, Dropdown, Icon, Menu } from "antd";
import routes from "../../routes";

const { Header, Content } = Layout;

class AuthLayout extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      // User is not logged in. Redirect back to login
      this.props.history.push(routes.login);
      message.warning("Please login first");
      return;
    }
    // Fetch data for logged in user using token
  }

  onLogout = () => {
    // Remove token & other stored data
    localStorage.clear();
    this.props.history.push(routes.login);
  };

  render() {
    return (
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "#003f3a"
          }}
        >
          <Row
            type="flex"
            align="middle"
            justify="end"
            style={{ height: "100%" }}
          >
            {/* Dropdown with option to logout */}
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1" onClick={this.onLogout}>
                    <Icon type="logout" />
                    Logout
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Button ghost className="primary-btn">
                User@gmail.com <Icon type="down" />
              </Button>
            </Dropdown>
          </Row>
        </Header>

        <Content style={{ padding: "0 50px", marginTop: 64, height: "100vh" }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default AuthLayout;
