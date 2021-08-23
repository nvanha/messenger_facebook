import React, { useState } from "react";
import { Row, Col, Layout, Typography } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import ImgContent from "./../../assets/images/login-pages/img-content.png";

const LoginContent = (props) => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <Layout.Content>
      <Row className="login-content-wrapper">
        <Col span={24} xl={{ span: 12 }}>
          <div className="login-content-left">
            <div className="login-form-wrapper">
              <Typography.Title className="title">
                Tụ họp <br /> mọi lúc, mọi nơi
              </Typography.Title>
              <Typography.Text className="desc">
                Với Messenger, việc kết nối với những người mình yêu mến thật
                đơn giản và thú vị.
              </Typography.Text>
              {hasAccount ? (
                <LoginForm
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                />
              ) : (
                <RegisterForm
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  setProgressPercent={props.setProgressPercent}
                  setIsProgressVisible={props.setIsProgressVisible}
                />
              )}
            </div>
          </div>
        </Col>

        <Col span={24} xl={{ span: 12 }}>
          <div className="login-content-right">
            <img src={ImgContent} alt="img-content" />
          </div>
        </Col>
      </Row>
    </Layout.Content>
  );
};

LoginContent.propTypes = {};

export default LoginContent;
