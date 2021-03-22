import React from 'react';
import styled from 'styled-components';
import { Button, Modal, Empty } from 'antd';
import MarketCard from '../home/MarketCard'
// import MarketCardContainer from '../../containers/home/MarketCardContainer';

const MarketSection = styled.section`
  display: grid;
  row-gap: 30px;
  padding-top: 50px;
  flex-grow: 1;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EmptyBox = styled(Empty)`
  grid-column-start: 1;
  @media (min-width: 992px) {
    grid-column-start: 2;
  }
`;

const MoreBtn = styled(Button)`
  margin: 50px auto 0;
  width: 200px;
`;

const MarketList = () => {

  const markets = [{
    id: 1,
    name: '바스버거'
  },
  {
    id: 2,
    name: '바스버거'
  },
  {
    id: 3,
    name: '바스버거'
  },
  {
    id: 4,
    name: '바스버거'
  },
  {
    id: 5,
    name: '바스버거'
  },
  {
    id: 6,
    name: '바스버거'
  },
  {
    id: 7,
    name: '바스버거'
  },
  {
    id: 8,
    name: '바스버거'
  }]
  return (
    <>
      <MarketSection>
        {markets.map(market => <MarketCard key={market.id} market={market} />)}
      </MarketSection>
    </>
  );
};


export default MarketList;