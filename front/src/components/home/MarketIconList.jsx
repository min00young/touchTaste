import React from 'react';
import styled from 'styled-components';
import { Tag, Button } from 'antd';
import MarketIcon from '../home/MarketIcon'


const ListSection = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;

`;

const MarketIconList = () => {
  return (
    <ListSection>
      <MarketIcon />
      <MarketIcon />
      <MarketIcon />
      <MarketIcon />
      <MarketIcon />
      <MarketIcon />
    </ListSection >
  )
};

export default MarketIconList;