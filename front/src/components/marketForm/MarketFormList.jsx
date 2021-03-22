import React from 'react';
import styled from 'styled-components';
import { Button, Input, Radio, DatePicker, Checkbox, Space } from 'antd';

require('dotenv').config();

const { TextArea } = Input;

const FormSection = styled.section`
  padding-top: 40px;
  .form-box {
    margin-bottom: 50px;
  }
  .title {
    margin-bottom: 10px;
    font-family: 'hannaPro';
    font-size: 23px;
    > span,
    > label {
      margin-left: 10px;
    }
  }
  .form-logo {
    display: inline-block;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .logo-upload-btn {
    vertical-align: bottom;
  }
  .data-input {
    margin-bottom: 10px;
  }
  .date-radio {
    display: block;
    height: 30px;
    line-height: 30px;
  }
  .submit-btn-box {
    display: block;
    text-align: center;
  }
`;

const JobFormData = () => {

  return (
    <FormSection>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
      <div className='form-box'>
        <p className='title'>
          <span>회사 로고</span>
        </p>
      </div>
    </FormSection>
  );
};

export default JobFormData;