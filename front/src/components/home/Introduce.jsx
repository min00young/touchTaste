import React from 'react';
import styled from 'styled-components';

const Introduce = () => {
  const IntroSection = styled.section`
    padding-top: 30px;
    text-align: center;
    > h2 {
      font-family: 'dohyeon';
      font-size: 20px;
    }
    @media (min-width: 768px) {
      padding: 50px 0 0;
      > h2 {
        font-size: 35px;
      }
    }
  `;

  return (
    <IntroSection>
      <h2>아이콘을 통해 더 빠르게 찾아보세요.</h2>
    </IntroSection>
  );
};

export default Introduce;