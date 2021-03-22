import React from 'react';
import styled from 'styled-components';
import { Tag, Button } from 'antd';
import { FaHamburger } from 'react-icons/fa';

const IconSection = styled.section`
  padding: 5px;
`;



const MarketIcon = () => {
  return (
    <IconSection>
      <div style={{ color: 'purple' }}>
        <FaHamburger size={48} />
      </div>
    </IconSection>
  )
};

export default MarketIcon;