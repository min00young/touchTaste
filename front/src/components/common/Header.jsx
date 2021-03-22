import React from 'react';
import { GoogleLogout } from 'react-google-login';
import styled from 'styled-components';
import { Button, Radio, Input } from 'antd';

const { Search } = Input;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  > h1 {
    font-family: 'hannaPro';
    flex-grow: 1;
    color: #b618ff;
    width: 150px;
  }
  > Button {
    /* display: none; */
  }
  @media (min-width: 768px) {
    height: 60px;
    > h1 {
      font-family: 'hannaPro';
      font-size: 20px;
      flex-grow: 1;
    }
    > a {
      /* display: none; */
    }
    > Button {
      display: inline-block;
    }
    > Button + Button {
      margin-left: 10px;
    }
  }
`;

const Header = () => {

  return (
    <Wrapper>
      <h1>
        <a href='/'>맛집찾기</a>
      </h1>
      <Search placeholder='맛집을 검색해보세요' size='middle' maxLength="15" enterButton="검색" />
      <Button shape="round" style={{ backgroundColor: "#be4eff" }}>
        <a href='/Marketform'>게시물 올리기</a>
      </Button>
      <Button>
        <a href='/login'>로그인</a>
      </Button>

    </Wrapper >
  );
};

export default Header;