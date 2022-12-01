import React from 'react';
import Slide from './Slide';
import styled from 'styled-components';
import { KAKAO_AUTH_URI } from './KakaoOauth';

const Login = () => {
  return (
    <LoginPage>
      <Slide />
      <LoginMain>
        <LoginTitle>bZrunch 시작하기</LoginTitle>
        <LoginBtn>
          <a href={KAKAO_AUTH_URI}>
            <i className="fa-solid fa-comment" /> 카카오계정으로 시작하기
          </a>
        </LoginBtn>
      </LoginMain>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  top: 60px;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  background-color: ${props => props.theme.theme.gray};
`;

const LoginTitle = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
`;

const LoginBtn = styled.div`
  display: inline-block;
  width: 90%;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #ffe500;
  text-align: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default Login;
