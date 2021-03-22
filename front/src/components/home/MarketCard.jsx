import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

require('dotenv').config();

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1);
  background: #fff;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    z-index: 1;
  }
  > .logo {
    margin-top: 30px;
    width: 270px;
    height: 230px;
    border-radius: 20%;
    object-fit: cover;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > .company-name {
    margin-top: 25px;
    font-family: 'jua';
    font-size: 22px;
  }
  > .company-description {
    margin-top: 5px;
    font-size: 15px;
    color: #a7aab0;
  }
  > .company-tags {
    padding-top: 15px;
    width: 200px;
    height: 99px;
    text-align: center;
    line-height: 1.8;
    overflow: hidden;
    > span {
      margin: 0 4px;
      font-size: 16px;
    }
  }
  > .like-cnt {
    position: absolute;
    top: 15px;
    left: 10px;
    > span {
      margin-left: 5px;
    }
  }
`;

const MarketCard = ({ market }) => {
  return (
    <CardWrapper>
      <div className='logo'>
        {<img src={`${process.env.REACT_APP_SERVER_URL}/img/burger.png`} />}
      </div>
      <p className='company-name'>{market.name}</p>
      <div className='like-cnt'>
        <HeartTwoTone style={{ fontSize: '30px' }} twoToneColor='#eb2f51' />
        <span>{market.cntLike}</span>
      </div>
    </CardWrapper >
  );
};

export default MarketCard