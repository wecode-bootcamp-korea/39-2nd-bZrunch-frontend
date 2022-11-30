import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const LeftNav = ({ isOpen, handleBtn }) => {
  const sideRef = useRef(null);

  const clickOutside = e => {
    if (isOpen && !sideRef.current.contains(e.target)) {
      handleBtn();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  return (
    <Aside isOpen={isOpen} ref={sideRef}>
      <Header>
        <Logo>bZrunch</Logo>
        <Text>
          <Saying>You can make anything by writing</Saying>
          <Author>-C.S.Lewis-</Author>
        </Text>
        <Login>브Z런치 시작하기</Login>
      </Header>
      <Main>
        <Home>브Z런치 홈</Home>
        <Now>브Z런치 나우</Now>
        <MyPage>브Z런치 페이지</MyPage>
      </Main>
      <Forget>계정을 잊어버리셨나요?</Forget>
    </Aside>
  );
};

const Aside = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  left: ${props => (props.isOpen ? 0 : '-250px')};
  border: 1px solid ${props => props.theme.theme.gray};
  transition: 0.5s ease;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.theme.gray};
`;

const Logo = styled.div`
  padding-top: 50px;
  font-family: 'Caveat', cursive;
  font-size: 30px;
`;

const Text = styled.div`
  margin-top: 30px;
  color: gray;
  font-family: 'Georgia', serif;
  text-align: center;
`;

const Saying = styled.div`
  width: 70%;
  margin: 0 auto 20px;
  font-size: 14px;
  line-height: 15px;
`;

const Author = styled.div`
  margin-bottom: 30px;
  font-size: 12px;
`;

const Login = styled.button`
  margin-bottom: 40px;
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.theme.mint};
  border-radius: 20px;
  background-color: white;
  color: ${props => props.theme.theme.mint};
  font-size: 14px;
  cursor: pointer;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  letter-spacing: -0.5px;
`;

const Home = styled.div`
  padding-bottom: 40px;

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const Now = styled.div`
  padding-bottom: 40px;

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const MyPage = styled.div`
  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const Forget = styled.div`
  position: absolute;
  display: inline;
  bottom: 50px;
  left: 50%;
  margin: 0 auto;
  color: gray;
  transform: translate(-50%, -50%);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
`;

export default LeftNav;
