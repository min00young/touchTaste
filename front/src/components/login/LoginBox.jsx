import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';

require('dotenv').config();

const LoginWrapper = styled.section`
  position: absolute;
  top: 50%;
`;

const GoogleLoginCustom = styled(GoogleLogin)`
  margin: 80px auto 0 !important;
  padding: 4px 10px !important;
  font-size: 16px !important;
  box-shadow: none !important;
  background: #e24939 !important;
  color: #fff !important;
  > div {
    padding-bottom: 6px !important;
    border-radius: 50% !important;
  }
`;

const LoginBox = ({ onLoginSuccess }) => {
  return (
    <>
      <LoginWrapper>
        <h1>로그인을 통해서 더 많은 기능을 사용하세요!</h1>
        <GoogleLoginCustom
          clientId={process.env.REACT_APP_GOOGLE_ID}
          buttonText='Google 로그인하기'
          onSuccess={onLoginSuccess}
          onFailure={e => console.log(e)}
          cookiePolicy={'single_host_origin'}
        />
      </LoginWrapper>
    </>
  );
};

export default LoginBox;