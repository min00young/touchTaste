import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 60px 0 20px;
  text-align: center;
  > address {
    margin-bottom: 5px;
    > a {
      color: #b618ff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <small>상업적인 용도가 아닌 포트폴리오용 사이트임을 안내드립니다.</small>
      <address>
        관련문의 <a href='mailto:milesmin23@gmail.com'>milesmin23@gmail.com</a>
      </address>

    </FooterWrapper>
  );
};

export default Footer;